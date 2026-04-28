---
title: "claude-md/CLAUDE.md"
---


# `claude-md/CLAUDE.md`

Source: `examples/claude-md/CLAUDE.md`

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
