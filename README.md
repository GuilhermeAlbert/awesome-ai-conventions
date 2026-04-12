# awesome-ai-conventions [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> A curated list of emerging conventions, file standards, and protocols for building with AI agents.

This is a living registry of patterns the industry is converging on. Not frameworks, not tools — **file-based conventions and open protocols** that define how humans, codebases, and AI agents communicate with each other.

---

## Contents

- [Project-level context files](#project-level-context-files)
- [Agent skill files](#agent-skill-files)
- [Design and UI conventions](#design-and-ui-conventions)
- [Web and LLM discoverability](#web-and-llm-discoverability)
- [Protocols](#protocols)
- [Contributing](#contributing)

---

## Project-level context files

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

### .cursor/rules/ and .github/copilot-instructions.md

Tool-specific equivalents. Cursor uses YAML-frontmatter scoped rules by glob pattern. GitHub Copilot uses `.github/copilot-instructions.md` for repo-wide defaults and path-specific `.instructions.md` files. For teams using multiple tools, the symlink pattern prevents content from drifting apart across files.

- Docs (Cursor): [cursor.com/docs](https://cursor.com/docs)
- Docs (Copilot): [docs.github.com/copilot](https://docs.github.com/copilot)

### .aiignore

Tells AI agents which files and folders to skip — analogous to `.gitignore`. JetBrains Junie adopted this pattern. Prevents agents from reading sensitive config files, large binaries, or generated code you don't want touched.

- Reference: [jetbrains.com — aiignore](https://www.jetbrains.com/help/junie/aiignore.html)

---

## Agent skill files

Skills are modular, on-demand capability files. Instead of loading all context upfront, an agent reads a skill file only when the task matches its description. The format has converged into an open standard.

### SKILL.md

A markdown file with a YAML frontmatter header (`name`, `description`, `tools`, triggers) and a structured body with workflows, checklists, and output templates. The agent reads it from the filesystem on demand — it never enters the context window unless triggered.

Published by Anthropic as an open standard in December 2025 at [agentskills.io](https://agentskills.io). OpenAI adopted the same format for Codex CLI and ChatGPT in the same period. GitHub Copilot followed in December 2025, reading skills from `.github/skills/`.

Standard install locations:

| Agent          | Personal            | Project           |
| -------------- | ------------------- | ----------------- |
| Claude Code    | `~/.claude/skills/` | `.claude/skills/` |
| Codex CLI      | `~/.codex/skills/`  | `.codex/skills/`  |
| GitHub Copilot | —                   | `.github/skills/` |

For teams using multiple agents, the symlink pattern keeps a canonical `.skills/` directory and links each agent to it.

- Spec: [agentskills.io](https://agentskills.io)
- Docs: [platform.claude.com — Agent Skills overview](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview)
- Docs: [platform.claude.com — Skill authoring best practices](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/best-practices)
- Community repos: [skillmatic-ai/awesome-agent-skills](https://github.com/skillmatic-ai/awesome-agent-skills), [VoltAgent/awesome-agent-skills](https://github.com/VoltAgent/awesome-agent-skills)

---

## Design and UI conventions

### DESIGN.md

A markdown file placed in the project root that describes visual design intent for AI coding agents and tools like Google Stitch. No Figma exports, no JSON schemas, no special tooling — just markdown that tells the agent how the UI should look: typography, color palette, component patterns, spacing rules.

The format emerged as an informal convention and has been rapidly adopted. The `awesome-design-md` repo curates DESIGN.md files extracted from real products and design systems.

- Repo: [VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md)
- Directory: [getdesign.md](https://getdesign.md)

---

## Web and LLM discoverability

### llms.txt

A plain markdown file placed at `yourdomain.com/llms.txt` that tells AI crawlers which parts of your site are best suited for LLM ingestion. Proposed by Jeremy Howard (FastAI) in September 2024. A companion `llms-full.txt` contains the full content in a single file.

By mid-2025, over 600 websites had adopted the standard, including Anthropic, Stripe, Cloudflare, Perplexity, Cursor, Hugging Face, and ElevenLabs. The pattern is distinct from SEO: it targets AI agents that retrieve documentation to answer developer questions, not search crawlers.

- Spec: [llmstxt.org](https://llmstxt.org)
- Directory: [directory.llmstxt.cloud](https://directory.llmstxt.cloud)
- Guide: [gitbook.com — What is llms.txt](https://www.gitbook.com/blog/what-is-llms-txt)

---

## Protocols

### Model Context Protocol (MCP)

An open protocol for connecting AI models to external tools, APIs, and data sources. Described as "USB-C for AI models." Created by Anthropic and donated to the Agentic AI Foundation (Linux Foundation) in December 2025, alongside AGENTS.md and Goose.

MCP defines a standard interface between an LLM host (Claude, Cursor, VS Code, etc.) and MCP servers that expose tools, resources, and prompts. The protocol replaced dozens of fragmented tool-calling integrations across the industry.

- Spec: [modelcontextprotocol.io](https://modelcontextprotocol.io)
- Docs: [platform.claude.com — MCP](https://platform.claude.com/docs/en/build-with-claude/mcp)
- Servers list: [punkpeye/awesome-mcp-servers](https://github.com/punkpeye/awesome-mcp-servers)

### Agent Cards

A proposed standard for agents to expose their identity, capabilities, and trust level to other agents in multi-agent systems. Part of the broader push for agent interoperability. Referenced in the A2A (Agent-to-Agent) protocol from Google.

- Spec: [Google A2A](https://google.github.io/A2A/)
- Survey: [arxiv — Agent interoperability protocols](https://arxiv.org/abs/2505.01234)

---

## Contributing

This list follows the [Awesome manifesto](https://github.com/sindresorhus/awesome/blob/main/awesome.md).

To add a convention:

1. It must be **adopted by more than one team or tool** in production
2. It must have a **public spec, docs, or canonical reference**
3. It must be a **file-based convention or open protocol** — not a framework or tool

Open a PR with the convention name, a brief description in plain language, and links to the spec and at least one real-world reference.

---

## License

[MIT](LICENSE): permissive open-source license.
