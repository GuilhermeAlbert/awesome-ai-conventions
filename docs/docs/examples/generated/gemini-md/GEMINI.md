---
title: "gemini-md/GEMINI.md"
---


# `gemini-md/GEMINI.md`

Source: `examples/gemini-md/GEMINI.md`

## When To Use This Example

Use this page as a concrete starting point when the file path and convention type match your project. Treat the content as a reference shape, not as a mandatory template.

## How To Adapt It

- Keep fields that describe real project behavior.
- Remove placeholders that do not apply to your repository.
- Prefer short, explicit instructions over broad policy language.
- Link the adapted file back to the convention it supports when possible.

## Source File

````markdown
# Project Instructions

## Commands

- Install dependencies with `npm ci`.
- Run tests with `npm test`.
- Run the linter with `npm run lint`.

## Code conventions

- Follow the existing module structure.
- Add tests for behavior changes.
- Keep public APIs backward compatible unless the task includes a migration.

## Boundaries

- Do not edit generated files directly.
- Do not commit secrets, tokens, or local configuration.
````
