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
| Restrict files or stage risky work | `.aiignore`, scoped rules, and `PLAN.md` | Guardrails reduce accidental reads, writes, and unreviewed execution. |
| Make behavior measurable | `EVAL.yaml` | Evals turn agent quality into a repeatable check. |
| Trace agent execution | OpenTelemetry GenAI or OpenInference | Semantic conventions make model, agent, and tool telemetry comparable. |
| Help LLMs discover public docs | `llms.txt` and `llms-full.txt` | Predictable Markdown entry points reduce scraping ambiguity. |
| Connect an agent to tools and data | MCP | MCP standardizes the agent-to-tool boundary. |
| Connect independent agents | A2A | A2A standardizes discovery and task exchange between agents. |
| Connect a coding agent to an editor | ACP | ACP standardizes the client-to-agent boundary. |

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

## Execution and Safety Layer

Runtime loops, authorization checks, budgets, retries, and output validation are usually implemented by the agent host. Repository conventions can influence these controls but do not implement the runtime by themselves.

- `.aiignore`
- `PLAN.md`
- Tool-specific scoped rules

## Evaluation Layer

These files make behavior testable and repeatable.

- `EVAL.yaml`

## Observability Layer

These semantic conventions describe agent runs as traces, spans, metrics, and events.

- OpenTelemetry GenAI Semantic Conventions
- OpenInference Semantic Conventions

## Discoverability Layer

These files expose structured information to LLMs and API-aware clients.

- `llms.txt`
- `llms-full.txt`
- `pricing.md`
- `auth.md`
- `/.well-known/ai-plugin.json`

## Interoperability Layer

These standards define interoperability across different harness boundaries.

- Model Context Protocol for agents, tools, and data
- Agent2Agent Protocol for independent agents
- Agent Client Protocol for coding agents and editor clients
