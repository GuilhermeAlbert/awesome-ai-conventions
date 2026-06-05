---
title: "memory-md/MEMORY.md"
---


# `memory-md/MEMORY.md`

Source: `examples/memory-md/MEMORY.md`

## When To Use This Example

Use this page as a concrete starting point when the file path and convention type match your project. Treat the content as a reference shape, not as a mandatory template.

## How To Adapt It

- Keep fields that describe real project behavior.
- Remove placeholders that do not apply to your repository.
- Prefer short, explicit instructions over broad policy language.
- Link the adapted file back to the convention it supports when possible.

## Source File

````markdown
# MEMORY.md

> Agent-maintained project memory. Humans may correct factual errors, but routine updates should come from agent sessions.

## Stable Facts

- The API uses PostgreSQL in production and SQLite in local tests.
- The frontend routes live under `src/app/`.
- Shared UI primitives live under `src/components/ui/`.

## Current Architecture Notes

- Authentication is session-based.
- Background jobs are processed by the `worker` package.
- External provider clients are wrapped by services in `src/integrations/`.

## Open Follow-ups

- Confirm whether billing events should be retried by the worker or by the provider webhook handler.
- Document the production deploy command after the deployment workflow is finalized.

## Topic Files

- `memory/api.md` for API-specific facts.
- `memory/frontend.md` for frontend-specific facts.
- `memory/integrations.md` for third-party provider notes.
````
