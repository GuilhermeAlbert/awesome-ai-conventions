---
title: "Decision Guide"
sidebar_position: 4
---

# Decision Guide

> Helps maintainers choose the smallest convention that solves a concrete agent-readiness problem.

Start with the problem the project has, not with the newest convention name. A repository usually needs one or two high-signal files before it needs a full convention stack.

## Repository Instructions

Use `AGENTS.md` when an AI coding agent needs project-specific operating instructions.

Good fit:

- Build, test, and lint commands.
- Code style and review expectations.
- Directories agents should avoid.
- PR, migration, or deployment rules.

Avoid using `AGENTS.md` as a dumping ground for product history, unresolved tasks, or generated summaries. Put long-lived project knowledge in memory or architecture files instead.

## Persistent Context

Use `MEMORY.md` or Memory Bank folders when project knowledge should survive across sessions.

Good fit:

- Stable facts about architecture and domain rules.
- Recently learned constraints.
- Current task state for long-running work.
- Open follow-ups that should not be lost.

Avoid memory files for instructions that should always apply. Those belong in `AGENTS.md` or a tool-specific instruction file.

## Prompt Assets

Use `.prompty`, `.prompt`, or `system_prompt.txt` when a prompt is an asset that should be versioned and reviewed.

Good fit:

- Product prompts used by application code.
- Reusable system prompts.
- Prompt templates with named inputs.
- Prompts that are evaluated or changed in PRs.

Choose `.prompty` when metadata and inputs matter. Choose `.prompt` or `system_prompt.txt` for lightweight text-first prompt storage.

## Capabilities

Use `SKILL.md` when an agent should load a specialized workflow only when the task matches it.

Good fit:

- Review workflows.
- Domain-specific checklists.
- Tool-specific procedures.
- Repeatable processes that are too large for always-on instructions.

Avoid skills for one-off notes or generic project rules.

## Evaluation

Use `EVAL.yaml` when a prompt, skill, or agent workflow needs repeatable acceptance criteria.

Good fit:

- Comparing behavior across prompt or model changes.
- Checking tool trajectories and structured output fields.
- Turning a recurring production failure into a regression case.

Do not use tracing as a substitute for an eval. Traces explain a run; evals judge whether its result met the requirement.

## Observability

Use OpenTelemetry GenAI or OpenInference semantic conventions when a multi-step run needs consistent traces, metrics, or events.

Good fit:

- Locating latency or failures across model, retrieval, agent, and tool spans.
- Measuring token usage, retries, exceptions, and evaluator results.
- Exporting telemetry to more than one compatible backend.

Do not capture prompt, response, retrieval, or tool content by default. Define redaction, access, and retention policies first.

## Public Discoverability

Use `llms.txt`, `llms-full.txt`, `pricing.md`, `auth.md`, or `ai-plugin.json` when agents need predictable public entry points.

Good fit:

- Documentation that agents should retrieve without scraping navigation.
- Pricing or auth flows that are difficult to parse from JavaScript pages.
- API plugin discovery.
- Public docs that should be summarized or indexed by LLM tools.

## Interoperability

Choose the protocol that matches the boundary:

| Boundary | Protocol | Use when |
| --- | --- | --- |
| Agent or model host to tools and data | MCP | A client needs portable tools, resources, or prompts. |
| Independent agent to independent agent | A2A | Agents need discovery, task exchange, streaming, or artifacts. |
| Editor or client to coding agent | ACP | A coding agent should work through multiple compatible interfaces. |

These protocols can coexist in one harness. Do not add one until the corresponding integration boundary exists.

## Minimal Adoption Path

For most projects:

1. Add `AGENTS.md`.
2. Add `.aiignore` or supported scoped rules for secrets and generated noise.
3. Use `PLAN.md` for multi-step or risky work.
4. Extract repeated specialist workflows into `SKILL.md`.
5. Add evals for behavior that must remain stable.
6. Add tracing when multi-step failures are difficult to diagnose.
7. Add MCP, A2A, or ACP only for a real integration boundary.

See [Harness Engineering](./harness-engineering.md) for the complete agent-run lifecycle.
