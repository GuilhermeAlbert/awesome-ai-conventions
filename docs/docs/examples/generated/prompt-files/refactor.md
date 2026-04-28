---
title: "prompt-files/refactor.prompt"
---


# `prompt-files/refactor.prompt`

Source: `examples/prompt-files/refactor.prompt`

````text
# Refactor Prompt

You are helping refactor an existing codebase.

Goal:
Make the requested change with the smallest clear patch that preserves current behavior.

Rules:
- Read nearby code before proposing changes.
- Prefer existing project patterns over new abstractions.
- Keep public APIs backward compatible unless the task explicitly asks for a breaking change.
- Add or update tests when behavior changes.
- Report any verification command that could not be run.

Task:
Refactor the selected module to remove duplication without changing runtime behavior.
````
