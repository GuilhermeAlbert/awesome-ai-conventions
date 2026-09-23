---
title: "Project Context Files"
sidebar_position: 1
---

# Project Context Files

> Repository-root files that teach coding agents how to work inside a project.

## How To Evaluate Entries

Each entry in this family should make the following points clear:

- What the convention is.
- Where the file, URL, or protocol surface normally lives.
- When a team should use it.
- Adoption evidence from a public spec, canonical docs, or active ecosystem use.
- Which example illustrates the convention, if one exists.
- Related conventions that solve adjacent problems.

## Registry Entries

These files live in a repository root and tell AI coding agents how to behave in that project. Think of them as a README written for agents.

### AGENTS.md

The cross-tool standard for agent context. The [Agentic AI Foundation](https://aaif.org), part of the Linux Foundation, maintains it after OpenAI donated the project in December 2025 alongside Anthropic's MCP and Block's Goose. Claude Code, Cursor, Copilot, Gemini CLI, and other agents can read the same file.

A typical AGENTS.md documents build commands, coding conventions, PR rules, and what the agent must not touch. In monorepos, each subdirectory can have its own AGENTS.md that inherits from the root. Agents read the nearest file in the directory tree.

Claude Code added `AGENTS.md` support in version 2.1.277. When a project has no `CLAUDE.md`, Claude Code reads `AGENTS.md` as its project instructions. Anthropic notes that this fallback is not yet available on Bedrock, Vertex, or Foundry.

- Spec: [GitHub: agentic-ai/AGENTS.md](https://github.com/agentic-ai/AGENTS.md)
- Guide: [devtk.ai: What is AGENTS.md](https://devtk.ai/en/blog/what-is-agents-md-guide/)
- Adoption: [Claude Code 2.1.277 changelog](https://code.claude.com/docs/en/changelog#2-1-277)
- Adoption: [GitHub Copilot repository instructions](https://docs.github.com/en/copilot/how-tos/configure-custom-instructions-in-your-ide/add-repository-instructions-in-your-ide)

### CLAUDE.md

Claude Code's native memory file. Loaded automatically before every session. Anything in it enters the context window without prompting. Supports `@imports` for referencing other files (up to 5 levels deep), which keeps the main file lean while allowing each team or subdirectory to own its own rules.

CLAUDE.md is Claude-specific. For multi-tool teams, the common pattern is to make it a symlink to AGENTS.md: `CLAUDE.md → AGENTS.md`.

- Docs: [Anthropic: Customize your setup](https://www.anthropic.com/engineering/claude-code-best-practices)
- Guide: [mindstudio.ai: What is CLAUDE.md](https://www.mindstudio.ai/blog/what-is-claude-md-file-permanent-instruction-manual)
- Research: [arxiv.org: Agentic Coding Manifests study](https://arxiv.org/html/2509.14744v1) (253 CLAUDE.md files analyzed)

### GEMINI.md

Gemini CLI's default project context file. It can hold project instructions, coding conventions, and domain context. Gemini CLI loads these files hierarchically from global, workspace, and subdirectory locations, and supports `@file.md` imports for splitting instructions across files.

GitHub Copilot's cloud agent and CLI also recognize `GEMINI.md`. Gemini CLI can be configured to look for additional filenames, including `AGENTS.md`, through `context.fileName`.

- Docs: [Gemini CLI: Provide context with GEMINI.md files](https://geminicli.com/docs/cli/gemini-md/)
- Adoption: [GitHub Copilot custom instruction support](https://docs.github.com/en/copilot/reference/custom-instructions-support)

### MEMORY.md

Claude Code's auto-memory file. Written by the agent, not the human. When Claude learns something about your codebase mid-session, it can persist that knowledge here. On next session, the index loads automatically; topic files load on demand. Complements CLAUDE.md: you write the instructions, the agent writes the learnings.

- Guide: [Medium: AI Agent Memory Files](https://medium.com/data-science-collective/the-complete-guide-to-ai-agent-memory-files-claudemd-agentsmd-and-beyond-49ea0df5c5a9)

### Cursor, Cline, and GitHub Copilot instruction files

Tool-specific equivalents. Cursor uses YAML-frontmatter scoped rules by glob pattern. GitHub Copilot uses `.github/copilot-instructions.md` for repo-wide defaults and path-specific `.instructions.md` files. Open-source agents like Cline and Roo Code use `.clinerules` or `.roorules` in the project root to ingest behavior on initialization. For teams using multiple tools, the symlink pattern prevents content from drifting apart across files.

- Docs (Cursor): [cursor.com/docs](https://cursor.com/docs)
- Docs (Copilot): [GitHub Copilot docs](https://docs.github.com/copilot)

### .aiignore

Tells AI agents which files and folders to skip, much like `.gitignore`. JetBrains Junie adopted this pattern. It can keep sensitive configuration, large binaries, and generated code outside the agent's context.

- Reference: [jetbrains.com: aiignore](https://www.jetbrains.com/help/junie/aiignore.html)

### Memory Bank (`cline_docs/` or `.roo/`)

A project state architecture popularized by open-source agents like [Cline](https://github.com/cline/cline) and [Roo Code](https://github.com/RooVetGit/Roo-Code). The agent maintains context across several Markdown files, such as `activeContext.md`, `productContext.md`, and `systemArchitecture.md`. It updates those files as the project changes across long-running sessions.

---
