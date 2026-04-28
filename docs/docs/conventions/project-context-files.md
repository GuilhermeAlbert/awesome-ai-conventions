---
title: "Project Context Files"
sidebar_position: 1
---

# Project Context Files

> Repository-root files that teach coding agents how to work inside a project.

These files live in a repository root and tell AI coding agents how to behave in that specific project. They are the "README for AI" — not for humans, but for agents.

### AGENTS.md

The cross-tool standard for agent context. Maintained by the [Agentic AI Foundation](https://aaif.org) under the Linux Foundation (donated by OpenAI in December 2025 alongside Anthropic's MCP and Block's Goose). The pitch is one file readable by any agent: Claude Code, Cursor, Copilot, Gemini CLI, and others.

A typical AGENTS.md documents build commands, coding conventions, PR rules, and what the agent must not touch. In monorepos, each subdirectory can have its own AGENTS.md that inherits from the root. Agents read the nearest file in the directory tree.

- Spec: [github.com/agentic-ai/AGENTS.md](https://github.com/agentic-ai/AGENTS.md)
- Guide: [devtk.ai — What is AGENTS.md](https://devtk.ai/en/blog/what-is-agents-md-guide/)

### CLAUDE.md

Claude Code's native memory file. Loaded automatically before every session. Anything in it enters the context window without prompting. Supports `@imports` for referencing other files (up to 5 levels deep), which keeps the main file lean while allowing each team or subdirectory to own its own rules.

CLAUDE.md is Claude-specific. For multi-tool teams, the common pattern is to make it a symlink to AGENTS.md: `CLAUDE.md → AGENTS.md`.

- Docs: [Anthropic — Customize your setup](https://www.anthropic.com/engineering/claude-code-best-practices)
- Guide: [mindstudio.ai — What is CLAUDE.md](https://www.mindstudio.ai/blog/what-is-claude-md-file-permanent-instruction-manual)
- Research: [arxiv.org — Agentic Coding Manifests study](https://arxiv.org/html/2509.14744v1) (253 CLAUDE.md files analyzed)

### MEMORY.md

Claude Code's auto-memory file. Written by the agent, not the human. When Claude learns something about your codebase mid-session, it can persist that knowledge here. On next session, the index loads automatically; topic files load on demand. Complements CLAUDE.md: you write the instructions, the agent writes the learnings.

- Guide: [Medium — AI Agent Memory Files](https://medium.com/data-science-collective/the-complete-guide-to-ai-agent-memory-files-claudemd-agentsmd-and-beyond-49ea0df5c5a9)

### .cursor/rules/, .clinerules, and .github/copilot-instructions.md

Tool-specific equivalents. Cursor uses YAML-frontmatter scoped rules by glob pattern. GitHub Copilot uses `.github/copilot-instructions.md` for repo-wide defaults and path-specific `.instructions.md` files. Open-source agents like Cline and Roo Code use `.clinerules` or `.roorules` in the project root to ingest behavior on initialization. For teams using multiple tools, the symlink pattern prevents content from drifting apart across files.

- Docs (Cursor): [cursor.com/docs](https://cursor.com/docs)
- Docs (Copilot): [docs.github.com/copilot](https://docs.github.com/copilot)

### .aiignore

Tells AI agents which files and folders to skip — analogous to `.gitignore`. JetBrains Junie adopted this pattern. Prevents agents from reading sensitive config files, large binaries, or generated code you don't want touched.

- Reference: [jetbrains.com — aiignore](https://www.jetbrains.com/help/junie/aiignore.html)

### Memory Bank (`cline_docs/` or `.roo/`)

A project state architecture popularized by open-source agents like [Cline](https://github.com/cline/cline) and [Roo Code](https://github.com/RooVetGit/Roo-Code). Instead of a single static file, the agent maintains a directory of Markdown files (e.g., `activeContext.md`, `productContext.md`, `systemArchitecture.md`). This allows the agent to document and update its own contextual state as the project evolves across long-living sessions.

---
