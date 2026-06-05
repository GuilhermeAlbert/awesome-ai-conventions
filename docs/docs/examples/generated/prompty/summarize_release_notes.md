---
title: "prompty/summarize_release_notes.prompty"
---


# `prompty/summarize_release_notes.prompty`

Source: `examples/prompty/summarize_release_notes.prompty`

## When To Use This Example

Use this page as a concrete starting point when the file path and convention type match your project. Treat the content as a reference shape, not as a mandatory template.

## How To Adapt It

- Keep fields that describe real project behavior.
- Remove placeholders that do not apply to your repository.
- Prefer short, explicit instructions over broad policy language.
- Link the adapted file back to the convention it supports when possible.

## Source File

````text
---
name: summarize_release_notes
description: Turn raw changelog entries into concise user-facing release notes.
model:
  api: chat
  configuration:
    type: openai
    model: gpt-4o-mini
  parameters:
    temperature: 0.2
inputs:
  changelog:
    type: string
    description: Raw changelog bullets from the release.
  audience:
    type: string
    default: product users
sample:
  changelog: |
    - Added CSV export for invoices.
    - Fixed duplicate toast messages after retrying a failed payment.
  audience: account managers
---

system:
You write clear release notes for {{audience}}. Keep the tone factual and avoid marketing language.

user:
Summarize these changes in three bullets or fewer:

{{changelog}}
````
