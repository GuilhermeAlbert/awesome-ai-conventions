---
title: "eval-yaml/EVAL.yaml"
---


# `eval-yaml/EVAL.yaml`

Source: `examples/eval-yaml/EVAL.yaml`

## When To Use This Example

Use this page as a concrete starting point when the file path and convention type match your project. Treat the content as a reference shape, not as a mandatory template.

## How To Adapt It

- Keep fields that describe real project behavior.
- Remove placeholders that do not apply to your repository.
- Prefer short, explicit instructions over broad policy language.
- Link the adapted file back to the convention it supports when possible.

## Source File

````yaml
name: issue-triage-quality
version: "1.0"
description: Evaluates whether an agent can triage product issues consistently.

execution:
  target: issue-triage-agent

assert:
  - name: triage_quality
    type: rubric
    rubrics:
      - id: product-area
        outcome: Identifies the affected product area.
        weight: 2.0
      - id: priority
        outcome: Assigns a priority with a short justification.
        weight: 2.0
      - id: missing-information
        outcome: Lists any missing information needed from the reporter.
        weight: 1.0

  - name: required_workflow
    type: tool_trajectory
    mode: in_order
    expected:
      - tool: search_existing_issues
      - tool: classify_issue

tests:
  - id: checkout-timeout
    description: Triage a checkout timeout report.
    criteria: The agent triages a checkout timeout report without inventing missing facts.
    input:
      - role: user
        content: "Checkout times out after card authorization for EU customers."
    rubrics:
      - Mentions payments or checkout as the likely domain.
      - Flags the issue as high priority.
      - Asks for logs, region, and affected order IDs.
````
