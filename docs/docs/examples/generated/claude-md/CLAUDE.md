---
title: "claude-md/CLAUDE.md"
---


# `claude-md/CLAUDE.md`

Source: `examples/claude-md/CLAUDE.md`

## When To Use This Example

Use this page as a concrete starting point when the file path and convention type match your project. Treat the content as a reference shape, not as a mandatory template.

## How To Adapt It

- Keep fields that describe real project behavior.
- Remove placeholders that do not apply to your repository.
- Prefer short, explicit instructions over broad policy language.
- Link the adapted file back to the convention it supports when possible.

## Source File

````markdown
# CLAUDE.md

Use `AGENTS.md` as the source of truth for repository-wide build, test, and coding instructions.

## Claude-specific Notes

- Load only the files needed for the current task.
- Before editing, check the current git status and preserve unrelated user changes.
- When a task touches UI behavior, verify the result in a browser or with the available UI test command.
- When a task touches API behavior, run the narrowest relevant test first, then the broader suite if needed.

## Memory Hygiene

- Persist durable learnings in `MEMORY.md` only when they are likely to matter in future sessions.
- Do not store secrets, personal data, access tokens, or transient debugging observations.
````
