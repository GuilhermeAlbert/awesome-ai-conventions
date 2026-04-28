---
title: "Layers"
sidebar_position: 3
---

# Layers

AI conventions are easier to reason about when grouped by the role they play in an agent workflow.

## Instruction Layer

These files tell agents how to behave in a repository.

- `AGENTS.md`
- `CLAUDE.md`
- Tool-specific rules such as Cursor rules, Cline rules, and Copilot instructions
- `.aiignore`

## Context and State Layer

These files preserve project knowledge, task state, or execution intent.

- `MEMORY.md`
- Memory Bank folders such as `cline_docs/` and `.roo/`
- `PLAN.md`

## Prompt and Capability Layer

These files package model instructions and agent capabilities into reusable assets.

- `.prompty`
- `.prompt`
- `system_prompt.txt`
- `SKILL.md`

## Evaluation Layer

These files make behavior testable and repeatable.

- `EVAL.yaml`

## Discoverability Layer

These files expose structured information to LLMs and API-aware clients.

- `llms.txt`
- `llms-full.txt`
- `pricing.md`
- `/.well-known/ai-plugin.json`

## Protocol Layer

These standards define interoperability between tools, models, and agents.

- Model Context Protocol
- Agent Cards / A2A
