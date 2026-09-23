---
title: "Status Taxonomy"
sidebar_position: 6
---

# Status Taxonomy

> Provides a shared vocabulary for deciding how mature each convention is.

Useful patterns mature at different rates. The registry separates established conventions from candidates and legacy artifacts.

Kind and maturity answer different questions. `Standard`, `Protocol`, `Convention`, and `Emerging` describe what an entry is. The statuses on this page describe how much evidence and stability it has.

## Accepted

Use `accepted` for conventions that are stable enough to list in the main README.

Signals:

- Public spec, canonical docs, or strong reference material.
- Clear file, URL, manifest, or protocol boundary.
- Evidence of real usage beyond a single private project.
- The convention solves a recurring problem for agents or model clients.

## Candidate

Use `candidate` for patterns that are promising but not ready for the main registry.

Signals:

- Useful internal or community pattern.
- Limited public adoption.
- Ambiguous naming or file location.
- Similar conventions may already exist.

Candidate patterns can live in docs pages while the README remains selective.

## Watchlist

Use `watchlist` for conventions that may become important but need more observation.

Signals:

- Early proposal from a credible tool or standards group.
- Public discussion exists, but adoption is unclear.
- The convention may overlap with an accepted entry.

Watchlist items should have a review date or clear evidence question.

## Legacy

Use `legacy` for conventions that are historically relevant but no longer recommended as a default.

Signals:

- Superseded by another standard.
- Still appears in older projects.
- Useful for compatibility or migration notes.

Legacy entries should explain what replaced them when possible.

## Deprecated

Use `deprecated` only when a source explicitly marks the convention as deprecated or unsupported.

Signals:

- Official deprecation notice.
- Replacement path from the maintainer.
- Known risk for new adopters.

Deprecated items should not be promoted as default choices.
