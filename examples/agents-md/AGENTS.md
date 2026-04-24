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
