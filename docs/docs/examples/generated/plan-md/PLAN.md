---
title: "plan-md/PLAN.md"
---


# `plan-md/PLAN.md`

Source: `examples/plan-md/PLAN.md`

## When To Use This Example

Use this page as a concrete starting point when the file path and convention type match your project. Treat the content as a reference shape, not as a mandatory template.

## How To Adapt It

- Keep fields that describe real project behavior.
- Remove placeholders that do not apply to your repository.
- Prefer short, explicit instructions over broad policy language.
- Link the adapted file back to the convention it supports when possible.

## Source File

````markdown
---
task: "Implement OAuth login"
status: "planning"
owner: "planning-agent"
---

# Implementation Plan

## Objective

Add OAuth login while preserving the existing email/password flow.

## Context Summary

- The app already has user sessions and a login page.
- OAuth credentials are provided through environment variables.
- Existing authentication tests must keep passing.

## Approach

Introduce the OAuth provider behind the existing authentication service, then add a callback route and a frontend entry point. Keep provider-specific logic isolated from the user model.

## Implementation Steps

- [ ] Add OAuth environment variables to the sample config.
- [ ] Configure the OAuth strategy in the authentication service.
- [ ] Add the `/auth/callback` route.
- [ ] Add a login button that links to the provider authorization URL.
- [ ] Update tests for successful callback and denied authorization.

## Testing and Validation

- Run the authentication test suite.
- Verify email/password login still works.
- Verify the OAuth callback creates or links the expected user account.
````
