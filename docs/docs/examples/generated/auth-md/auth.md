---
title: "auth-md/auth.md"
---


# `auth-md/auth.md`

Source: `examples/auth-md/auth.md`

````markdown
# auth.md

This service supports agentic registration. Use `https://api.example.com` as the resource server and `https://auth.example.com` as the authorization server.

## 1. Discover

If an API request returns `401 Unauthorized`, read the Protected Resource Metadata URL from the response:

```http
WWW-Authenticate: Bearer resource_metadata="https://api.example.com/.well-known/oauth-protected-resource"
```

If the header is missing, fetch the conventional URL:

```http
GET /.well-known/oauth-protected-resource HTTP/1.1
Host: api.example.com
Accept: application/json
```

Read these fields from the Protected Resource Metadata:

```json
{
  "resource": "https://api.example.com",
  "resource_name": "Example API",
  "authorization_servers": ["https://auth.example.com"],
  "scopes_supported": ["issues:read", "issues:write"],
  "bearer_methods_supported": ["header"]
}
```

Then fetch the authorization server metadata:

```http
GET /.well-known/oauth-authorization-server HTTP/1.1
Host: auth.example.com
Accept: application/json
```

Read the `agent_auth` block before choosing a registration method:

```json
{
  "agent_auth": {
    "skill": "issue-triage",
    "register_uri": "https://auth.example.com/agent/auth",
    "claim_uri": "https://auth.example.com/agent/auth/claim",
    "revocation_uri": "https://auth.example.com/agent/auth/revoke",
    "identity_types_supported": ["identity_assertion", "anonymous"],
    "identity_assertion_supported": ["id-jag", "email"],
    "anonymous_supported": ["api_key"],
    "events_supported": ["logout+jwt"]
  }
}
```

## 2. Pick a method

- If you have an ID-JAG bound to `https://api.example.com`, use `identity_assertion` with `id-jag`.
- If you only have the user's email, use `identity_assertion` with `email` and complete the claim ceremony.
- If you have neither, use `anonymous` and claim later.

Check the matching `*_supported` array before registering. If this service does not support the shape you selected, choose another supported shape or stop.

## 3. Register

### identity_assertion + id-jag

```http
POST /agent/auth HTTP/1.1
Host: auth.example.com
Content-Type: application/json
Accept: application/json
```

```json
{
  "type": "identity_assertion",
  "assertion_type": "id-jag",
  "assertion": "<id-jag>",
  "credential_type": "access_token",
  "scopes": ["issues:read", "issues:write"]
}
```

Success:

```json
{
  "credential": "eyJhbGciOi...",
  "credential_type": "access_token",
  "credential_expires": "2026-06-01T12:00:00Z",
  "scopes": ["issues:read", "issues:write"]
}
```

### identity_assertion + email

```http
POST /agent/auth HTTP/1.1
Host: auth.example.com
Content-Type: application/json
Accept: application/json
```

```json
{
  "type": "identity_assertion",
  "assertion_type": "email",
  "email": "user@example.com",
  "credential_type": "access_token",
  "scopes": ["issues:read", "issues:write"]
}
```

Success:

```json
{
  "claim_token": "claim_abc123",
  "post_claim_scopes": ["issues:read", "issues:write"]
}
```

### anonymous

```http
POST /agent/auth HTTP/1.1
Host: auth.example.com
Content-Type: application/json
Accept: application/json
```

```json
{
  "type": "anonymous",
  "credential_type": "api_key",
  "scopes": ["issues:read"]
}
```

Success:

```json
{
  "credential": "ak_live_example",
  "credential_type": "api_key",
  "claim_token": "claim_def456",
  "scopes": ["issues:read"],
  "post_claim_scopes": ["issues:read", "issues:write"]
}
```

## 4. Claim ceremony

### 4a. Trigger the claim email

Anonymous registrations only. Email-verification registrations skip this step because the email is sent during registration.

```http
POST /agent/auth/claim HTTP/1.1
Host: auth.example.com
Content-Type: application/json
Accept: application/json
```

```json
{
  "claim_token": "claim_def456",
  "email": "user@example.com"
}
```

### 4b. Wait for the OTP

Tell the user that Example API sent a verification code to their email. Ask them to read the code back when they have it.

### 4c. Submit the OTP

```http
POST /agent/auth/claim/complete HTTP/1.1
Host: auth.example.com
Content-Type: application/json
Accept: application/json
```

```json
{
  "claim_token": "claim_def456",
  "otp": "123456"
}
```

For anonymous registration, the existing credential upgrades in place:

```json
{
  "credential": "ak_live_example",
  "credential_type": "api_key",
  "scopes": ["issues:read", "issues:write"]
}
```

For email verification, the response issues a new credential:

```json
{
  "credential": "eyJhbGciOi...",
  "credential_type": "access_token",
  "credential_expires": "2026-06-01T12:00:00Z",
  "scopes": ["issues:read", "issues:write"]
}
```

## 5. Use the credential

Send both access tokens and API keys as bearer credentials:

```http
GET /issues HTTP/1.1
Host: api.example.com
Authorization: Bearer <credential>
Accept: application/json
```

If an access token expires, mint a fresh ID-JAG or rerun the claim ceremony. API keys do not expire by default. If a credential that previously worked returns `401 Unauthorized`, discard it and restart discovery from Step 1.

## 6. Errors

| Error | Endpoint | Agent action |
| --- | --- | --- |
| `invalid_signature` | `/agent/auth` | Ask the identity provider for a fresh assertion. |
| `replay_detected` | `/agent/auth` | Mint a new assertion and retry once. |
| `audience_mismatch` | `/agent/auth` | Use an assertion bound to `https://api.example.com`. |
| `credential_expired` | API endpoints | Drop the credential and restart discovery. |
| `identity_assertion_not_enabled` | `/agent/auth` | Pick another supported method or stop. |
| `anonymous_not_enabled` | `/agent/auth` | Pick another supported method or stop. |
| `unsupported_credential_type` | `/agent/auth` | Choose a credential type listed in metadata. |
| `rate_limited` | Any endpoint | Wait before retrying. |
| `invalid_claim_token` | Claim endpoints | Restart registration. |
| `otp_invalid` | `/agent/auth/claim/complete` | Ask the user to confirm the code and retry. |
| `otp_expired` | `/agent/auth/claim/complete` | Restart the claim ceremony. |
| `claim_expired` | Claim endpoints | Restart registration. |
| `previously_claimed` | Claim endpoints | Use the existing credential or restart registration. |

## 7. Revocation

Agents do not initiate revocation.

For ID-JAG flows, the provider that minted the ID-JAG posts a `logout+jwt` event to `revocation_uri`. The agent discovers revocation on the next `401 Unauthorized`.

For email and anonymous flows, there is no agent-facing revoke endpoint. If the credential returns `401 Unauthorized`, discard it and restart from Step 1.
````
