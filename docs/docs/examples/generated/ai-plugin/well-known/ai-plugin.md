---
title: "ai-plugin/.well-known/ai-plugin.json"
---


# `ai-plugin/.well-known/ai-plugin.json`

Source: `examples/ai-plugin/.well-known/ai-plugin.json`

## When To Use This Example

Use this page as a concrete starting point when the file path and convention type match your project. Treat the content as a reference shape, not as a mandatory template.

## How To Adapt It

- Keep fields that describe real project behavior.
- Remove placeholders that do not apply to your repository.
- Prefer short, explicit instructions over broad policy language.
- Link the adapted file back to the convention it supports when possible.

## Source File

````json
{
  "schema_version": "v1",
  "name_for_human": "Issue Tracker",
  "name_for_model": "issue_tracker",
  "description_for_human": "Create and search issues in an example issue tracker.",
  "description_for_model": "Use this API to create issues, search existing issues, and fetch issue details when the user asks about project support or bug reports.",
  "auth": {
    "type": "none"
  },
  "api": {
    "type": "openapi",
    "url": "https://example.com/openapi.yaml"
  },
  "logo_url": "https://example.com/logo.png",
  "contact_email": "support@example.com",
  "legal_info_url": "https://example.com/legal"
}
````
