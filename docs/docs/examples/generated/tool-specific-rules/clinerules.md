---
title: "tool-specific-rules/.clinerules"
---


# `tool-specific-rules/.clinerules`

Source: `examples/tool-specific-rules/.clinerules`

## When To Use This Example

Use this page as a concrete starting point when the file path and convention type match your project. Treat the content as a reference shape, not as a mandatory template.

## How To Adapt It

- Keep fields that describe real project behavior.
- Remove placeholders that do not apply to your repository.
- Prefer short, explicit instructions over broad policy language.
- Link the adapted file back to the convention it supports when possible.

## Source File

````text
# Cline Rules

- Read `AGENTS.md` before planning or editing.
- Use the repository's package manager and scripts instead of ad hoc commands.
- Keep changes scoped to the user's request.
- Run the most relevant verification command before reporting completion.
- Never place secrets, tokens, or private customer data in prompts, logs, or generated files.
````
