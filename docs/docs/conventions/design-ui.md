---
title: "Design and UI"
sidebar_position: 5
---

# Design and UI

> Machine-readable design guidance for agents that generate product interfaces.

## How To Evaluate Entries

Each entry in this family should make the following points clear:

- What the convention is.
- Where the file, URL, or protocol surface normally lives.
- When a team should use it.
- Adoption evidence from a public spec, canonical docs, or active ecosystem use.
- Which example illustrates the convention, if one exists.
- Related conventions that solve adjacent problems.

## Registry Entries

### DESIGN.md

A markdown file placed in the project root that defines a project's visual design system for AI design and coding agents. It combines YAML front matter for machine-readable tokens, such as colors, typography, spacing, and radius values, with Markdown prose that explains the visual intent and component patterns.

Google Stitch documents DESIGN.md as the design counterpart to AGENTS.md: a plain-text artifact that agents can read, edit, and apply when generating consistent screens. The format allows unknown sections and custom tokens, so teams can extend it for domain-specific design rules.

- Spec: [Stitch — DESIGN.md specification](https://stitch.withgoogle.com/docs/design-md/specification)
- Docs: [Stitch — What is DESIGN.md?](https://stitch.withgoogle.com/docs/design-md/overview)
- Repo: [VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md)
- Directory: [getdesign.md](https://getdesign.md)

---
