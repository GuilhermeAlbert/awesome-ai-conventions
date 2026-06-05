---
title: "tool-specific-rules/.github/copilot-instructions.md"
---


# `tool-specific-rules/.github/copilot-instructions.md`

Source: `examples/tool-specific-rules/.github/copilot-instructions.md`

## When To Use This Example

Use this page as a concrete starting point when the file path and convention type match your project. Treat the content as a reference shape, not as a mandatory template.

## How To Adapt It

- Keep fields that describe real project behavior.
- Remove placeholders that do not apply to your repository.
- Prefer short, explicit instructions over broad policy language.
- Link the adapted file back to the convention it supports when possible.

## Source File

````markdown
# GitHub Copilot Instructions

This project prefers direct, maintainable code over broad abstractions.

- Use TypeScript for application code.
- Keep domain logic outside React components.
- Reuse existing UI primitives from `src/components/ui/`.
- Add tests for bug fixes and user-visible behavior changes.
- Do not suggest code that logs secrets or personal data.
- Follow naming and formatting patterns already present in nearby files.
````
