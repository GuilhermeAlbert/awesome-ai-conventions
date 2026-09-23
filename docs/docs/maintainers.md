---
title: "For Maintainers"
sidebar_position: 7
---

# For Maintainers

> Gives repository maintainers a practical path for making projects easier for AI agents to understand.

Agent-ready documentation makes important project facts easy to find, verify, and update. Most repositories need only a small set of conventions.

## Baseline Checklist

Start with these files:

- `AGENTS.md` for project instructions.
- `.aiignore` for secrets, generated output, large files, and noisy dependencies.
- `CONTRIBUTING.md` for human contribution rules.
- `README.md` for human project overview.

This is enough for many projects.

## Add Persistent Context When Needed

Add memory or context files when repeated agent sessions need the same project knowledge.

Good candidates:

- `MEMORY.md` for stable facts and open follow-ups.
- `cline_docs/` or `.roo/` when a tool expects Memory Bank folders.
- Architecture notes when agents repeatedly need system boundaries.

Keep instructions and learned context separate. Instructions tell agents what to do. Memory records what has been learned.

## Add Public LLM Entry Points

If the project has public docs, add:

- `llms.txt` for a short routing file.
- `llms-full.txt` when a compact full-docs snapshot is useful.

These files help agents retrieve the right docs without crawling the whole site.

## Add Capabilities and Evals Last

Use `SKILL.md` when the team has a repeatable workflow that agents should load on demand.

Use `EVAL.yaml` when agent behavior must be measured repeatedly, especially in prompts, support workflows, classification, or code-review tasks.

## Maintenance Rules

- Keep each file short enough to review.
- Link to canonical docs instead of copying long specs.
- Remove stale rules when tools or workflows change.
- Treat convention files as reviewed project documentation, not generated chat output.
