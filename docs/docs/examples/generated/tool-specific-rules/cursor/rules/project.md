---
title: "tool-specific-rules/.cursor/rules/project.mdc"
---


# `tool-specific-rules/.cursor/rules/project.mdc`

Source: `examples/tool-specific-rules/.cursor/rules/project.mdc`

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
description: Project rules for application source, tests, and documentation
globs:
  - "src/**/*"
  - "tests/**/*"
  - "docs/**/*"
alwaysApply: false
---

# Project Rules

- Follow the instructions in `AGENTS.md` before making code changes.
- Keep React components focused on rendering and delegate data fetching to services or hooks.
- Prefer existing project helpers over introducing new dependencies.
- Update or add tests when behavior changes.
- Do not edit generated files unless the task explicitly asks for regeneration.
````
