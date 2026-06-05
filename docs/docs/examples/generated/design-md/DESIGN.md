---
title: "design-md/DESIGN.md"
---


# `design-md/DESIGN.md`

Source: `examples/design-md/DESIGN.md`

## When To Use This Example

Use this page as a concrete starting point when the file path and convention type match your project. Treat the content as a reference shape, not as a mandatory template.

## How To Adapt It

- Keep fields that describe real project behavior.
- Remove placeholders that do not apply to your repository.
- Prefer short, explicit instructions over broad policy language.
- Link the adapted file back to the convention it supports when possible.

## Source File

````markdown
---
name: Operations Console
colors:
  primary: "#1f7a5c"
  secondary: "#334155"
  surface: "#ffffff"
  surface-muted: "#f6f8fa"
  border: "#d8dee4"
  on-surface: "#17202a"
  error: "#c7392f"
typography:
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 400
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: 600
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
rounded:
  sm: 4px
  md: 8px
---

# Design System

## Overview

A quiet, work-focused interface for an operations console. Screens should support scanning, comparison, and repeated actions without decorative distractions.

## Colors

- Primary (#1f7a5c): important actions, active navigation, selected states.
- Secondary (#334155): supporting controls and less prominent actions.
- Surface (#ffffff): main page and panel backgrounds.
- Surface muted (#f6f8fa): table headers, sidebars, and subtle grouped areas.
- Border (#d8dee4): dividers, input borders, and card outlines.
- Error (#c7392f): destructive actions and validation errors.

## Typography

- Headlines use Inter semibold with compact line height.
- Body text uses Inter regular at 14-16px.
- Labels use Inter semibold at 12px for dense controls and metadata.

## Components

- Buttons use 8px radius and clear icon or text labels.
- Inputs use a 1px border and visible focus ring.
- Tables prioritize alignment, row density, and readable empty states.
- Cards use borders, not heavy shadows.

## Do's and Don'ts

- Do reserve the primary color for the main action or selected state.
- Do keep operational screens compact and easy to scan.
- Do maintain accessible contrast for all text.
- Don't use decorative gradients, oversized hero sections, or card-heavy marketing layouts.
````
