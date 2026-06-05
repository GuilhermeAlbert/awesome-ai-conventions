---
title: "Layers"
sidebar_position: 3
---

# Layers

AI conventions are easier to reason about when grouped by the role they play in an agent workflow. Use this map to decide which artifact belongs in a repository, docs site, or integration surface.

## Quick Decision Map

| Need | Start with | Why |
| --- | --- | --- |
| Tell coding agents how to work in a repository | `AGENTS.md` | Cross-tool project instructions are the highest-leverage baseline. |
| Preserve long-lived project context | `MEMORY.md` or Memory Bank | These files keep stable knowledge and task state outside a single chat. |
| Package a reusable agent capability | `SKILL.md` | Skills are loaded on demand when a task matches the description. |
| Store prompts as versioned assets | `.prompty`, `.prompt`, or `system_prompt.txt` | Prompt files keep model instructions inspectable and reviewable. |
| Make behavior measurable | `EVAL.yaml` | Evals turn agent quality into a repeatable check. |
| Help LLMs discover public docs | `llms.txt` and `llms-full.txt` | Predictable Markdown entry points reduce scraping ambiguity. |
| Connect models to tools or agents | MCP, A2A, Agent Cards | Protocols define interoperability beyond one repository. |

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
- `auth.md`
- `/.well-known/ai-plugin.json`

## Protocol Layer

These standards define interoperability between tools, models, and agents.

- Model Context Protocol
- Agent Cards / A2A
