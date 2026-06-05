---
title: "memory-bank/cline_docs/systemArchitecture.md"
---


# `memory-bank/cline_docs/systemArchitecture.md`

Source: `examples/memory-bank/cline_docs/systemArchitecture.md`

## When To Use This Example

Use this page as a concrete starting point when the file path and convention type match your project. Treat the content as a reference shape, not as a mandatory template.

## How To Adapt It

- Keep fields that describe real project behavior.
- Remove placeholders that do not apply to your repository.
- Prefer short, explicit instructions over broad policy language.
- Link the adapted file back to the convention it supports when possible.

## Source File

````markdown
# System Architecture

## Overview

The application is split into a React frontend, a Node.js API, and a worker process.

## Boundaries

- The frontend owns routing, forms, and view state.
- The API owns authentication, validation, and persistence.
- The worker owns retries, scheduled jobs, and provider synchronization.

## Data Flow

1. The frontend calls typed API clients.
2. API handlers validate input and call domain services.
3. Domain services read and write through repositories.
4. Long-running work is queued for the worker.
````
