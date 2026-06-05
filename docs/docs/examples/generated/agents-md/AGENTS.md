---
title: "agents-md/AGENTS.md"
---


# `agents-md/AGENTS.md`

Source: `examples/agents-md/AGENTS.md`

## When To Use This Example

Use this page as a concrete starting point when the file path and convention type match your project. Treat the content as a reference shape, not as a mandatory template.

## How To Adapt It

- Keep fields that describe real project behavior.
- Remove placeholders that do not apply to your repository.
- Prefer short, explicit instructions over broad policy language.
- Link the adapted file back to the convention it supports when possible.

## Source File

````markdown
# AGENTS.md

## Project

This repository contains a TypeScript web application with a Node.js API and a React frontend.

## Commands

- Install dependencies: `npm install`
- Start development server: `npm run dev`
- Run tests: `npm test`
- Run linting: `npm run lint`
- Build production assets: `npm run build`

## Coding Conventions

- Keep application code in `src/`.
- Keep tests next to the code they cover using `*.test.ts` or `*.test.tsx`.
- Prefer small, focused modules over shared utility files with unrelated helpers.
- Use existing services and components before introducing new abstractions.

## Pull Requests

- Include a short summary of behavior changes.
- Mention the test or verification command that was run.
- Do not include generated build output unless the repository already tracks it.

## Guardrails

- Do not edit secrets, production credentials, or files listed in `.aiignore`.
- Ask before changing database migrations that may already have run in production.
- Keep unrelated formatting changes out of the patch.
````
