---
title: "Runtime and Guardrails"
sidebar_position: 2
---

# Runtime and Guardrails

Runtime and guardrail files control what an agent should avoid, how it should stage work, and what state is safe to carry across a task.

## Accepted Conventions in This Registry

- `.aiignore` limits which files and folders agents should read or touch.
- `PLAN.md` captures proposed execution before changes are made.
- Tool-specific rule files can encode project guardrails for Cursor, Cline, Roo, Copilot, and similar agents.

## Candidate Patterns

Files such as `TOOLS.md`, `GUARDRAILS.md`, and `STATE.md` are useful internal templates in some teams, but they are not listed as standalone conventions until there is stronger public evidence of cross-tool adoption.
