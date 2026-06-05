---
title: "Methodology"
sidebar_position: 5
---

# Methodology

> Defines how conventions are evaluated, documented, updated, and removed from this registry.

The registry is a curated map of conventions, not an index of every AI-related file name. Each entry should be useful to teams deciding whether to adopt a convention in a real project.

## Inclusion Criteria

A convention belongs in the registry when it meets all of these conditions:

- It is a file-based convention, predictable public path, manifest, or open protocol.
- It has public documentation, a canonical repository, a spec, or strong public reference material.
- It is adopted by more than one team, tool, product, or ecosystem when the claim is broader than a single vendor.
- It helps humans, codebases, AI agents, or model clients communicate with less ambiguity.

## Exclusion Criteria

The registry should not include:

- Frameworks, SaaS products, or libraries by themselves.
- Private templates without public evidence.
- One-off filenames with no broader recognition.
- Marketing names that do not define a file, URL, manifest, or protocol surface.
- Deprecated or abandoned conventions unless they are marked as legacy and still useful historically.

## Evidence Levels

Use evidence to keep descriptions factual:

| Level | Meaning | Example evidence |
| --- | --- | --- |
| Spec | A published specification or canonical reference defines the convention. | Official spec site, standards repo, formal docs. |
| Product Docs | A major tool or platform documents the convention. | Vendor docs, product guides, API references. |
| Ecosystem Adoption | Multiple independent projects use the convention. | Public repos, community guides, integrations. |
| Candidate | The pattern is useful but not yet established enough for the main registry. | Early proposals, internal templates, single-tool files. |

## Entry Shape

Each entry should answer:

- What is it?
- Where does it live?
- Who reads or writes it?
- What problem does it solve?
- Which source supports the claim?

Descriptions should be factual and direct. Avoid phrases like "rapidly adopted", "industry standard", or "game changing" unless the claim is backed by evidence in the entry.

## Update Policy

Update an entry when:

- The canonical URL changes.
- A better official source appears.
- A convention gains or loses adoption.
- A related convention should be linked.
- A description becomes too vendor-specific or too broad.

## Removal Policy

Remove or demote an entry when:

- The source disappears and no stable archive exists.
- The convention is abandoned and no longer useful.
- The entry is actually a product, library, or implementation detail.
- A broader or more accurate convention replaces it.

When removal is ambiguous, mark the item as candidate or legacy first and explain the open question.

