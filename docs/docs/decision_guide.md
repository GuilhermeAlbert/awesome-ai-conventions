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

## Public Discoverability

Use `llms.txt`, `llms-full.txt`, `pricing.md`, `auth.md`, or `ai-plugin.json` when agents need predictable public entry points.

Good fit:

- Documentation that agents should retrieve without scraping navigation.
- Pricing or auth flows that are difficult to parse from JavaScript pages.
- API plugin discovery.
- Public docs that should be summarized or indexed by LLM tools.

## Interoperability

Use protocols such as MCP, A2A, and Agent Cards when systems need to communicate across tool or vendor boundaries.

Good fit:

- Exposing tools and resources to model hosts.
- Describing agent identity and capabilities.
- Supporting multi-agent workflows.
- Integrating with clients beyond a single product.

## Minimal Adoption Path

For most projects:

1. Add `AGENTS.md`.
2. Add `.aiignore` if sensitive or noisy files exist.
3. Add `llms.txt` for public docs.
4. Add `SKILL.md` only when a reusable agent workflow emerges.
5. Add evals when behavior needs to be measured repeatedly.

