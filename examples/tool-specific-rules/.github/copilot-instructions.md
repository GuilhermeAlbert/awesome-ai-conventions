# GitHub Copilot Instructions

This project prefers direct, maintainable code over broad abstractions.

- Use TypeScript for application code.
- Keep domain logic outside React components.
- Reuse existing UI primitives from `src/components/ui/`.
- Add tests for bug fixes and user-visible behavior changes.
- Do not suggest code that logs secrets or personal data.
- Follow naming and formatting patterns already present in nearby files.
