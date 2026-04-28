---
title: "skill-md/SKILL.md"
---


# `skill-md/SKILL.md`

Source: `examples/skill-md/SKILL.md`

````markdown
---
name: api-contract-reviewer
description: Use when reviewing API schema changes for breaking compatibility and migration risk.
tools:
  - shell
---

# API Contract Reviewer

## Purpose

Review API contract changes before implementation or merge.

## Workflow

1. Identify changed endpoints, request fields, response fields, and status codes.
2. Compare the new contract with the currently documented contract.
3. Flag breaking changes, ambiguous field semantics, and missing migration notes.
4. Check whether tests cover old and new client behavior.
5. Produce a short review with findings first, followed by open questions.

## Review Checklist

- Required fields were not added without a default or migration path.
- Response fields were not renamed or removed without versioning.
- Error shapes remain predictable.
- Pagination, sorting, and filtering behavior remain documented.
- Authentication and authorization requirements are explicit.
````
