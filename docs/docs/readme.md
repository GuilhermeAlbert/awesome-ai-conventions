---
title: "README Mirror"
sidebar_position: 2
---

# awesome-ai-conventions [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> A curated list of emerging conventions, file standards, and protocols for building with AI agents.

This is a living registry of patterns the industry is converging on. Not frameworks, not tools — **file-based conventions and open protocols** that define how humans, codebases, and AI agents communicate with each other.

---

## Contents

- [Project-level context files](#project-level-context-files)
  - [AGENTS.md](#agentsmd)
  - [CLAUDE.md](#claudemd)
  - [MEMORY.md](#memorymd)
  - [.cursor/rules/, .clinerules, and .github/copilot-instructions.md](#cursorrules-clinerules-and-githubcopilot-instructionsmd)
  - [.aiignore](#aiignore)
  - [Memory Bank (`cline_docs/` or `.roo/`)](#memory-bank-cline_docs-or-roo)
- [Workflow and state artifacts](#workflow-and-state-artifacts)
  - [PLAN.md](#planmd)
- [Prompt asset files](#prompt-asset-files)
  - [.prompty](#prompty)
  - [.prompt and system_prompt.txt](#prompt-and-system_prompttxt)
- [Agent skill files](#agent-skill-files)
  - [SKILL.md](#skillmd)
  - [skills.sh](#skillssh)
- [Design and UI conventions](#design-and-ui-conventions)
  - [DESIGN.md](#designmd)
- [Evaluation conventions](#evaluation-conventions)
  - [EVAL.yaml](#evalyaml)
- [Web and LLM discoverability](#web-and-llm-discoverability)
  - [llms.txt](#llmstxt)
  - [pricing.md](#pricingmd)
  - [ai-plugin.json](#ai-pluginjson)
- [Protocols](#protocols)
  - [Model Context Protocol (MCP)](#model-context-protocol-mcp)
  - [Agent Cards](#agent-cards)
- [Examples](#examples)
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

## Workflow and state artifacts

These files capture what an agent intends to do or what state a session should carry forward. Unlike project-level instruction files, they are usually produced during a task and then reviewed or consumed by a later execution phase.

### PLAN.md

A Markdown implementation plan generated or maintained by an agent before code changes begin. The file gives humans a reviewable artifact for objective, context, approach, implementation steps, and validation criteria, while giving a later execution agent a stable handoff document.

OpenHands documents this pattern in its Planning Mode: a planning agent writes a structured `PLAN.md` in the workspace, then an execution agent reads that file to implement the plan. The convention is still less universal than `AGENTS.md`, but it is a concrete file artifact used by agentic coding workflows.

- Docs: [OpenHands — Creating Custom Agent](https://docs.openhands.dev/sdk/guides/agent-custom)
- Product note: [OpenHands Planning Mode Beta](https://openhands.dev/blog/openhands-product-update---march-2026)

---

## Prompt asset files

These conventions standardize how prompts are stored, versioned, and shared inside codebases, keeping them cleanly separated from application logic.

### .prompty

An asset class and open file format for prompts. Prompty files are modified Markdown documents with YAML frontmatter containing model configurations, inputs, and execution metadata, followed by the prompt template in Markdown.

Initially introduced by Microsoft, it is now adopted by tools like Promptflow, LangChain, and Semantic Kernel.

- Spec: [prompty.ai](https://prompty.ai)

### .prompt and system_prompt.txt

A more informal but widespread convention across various LLM CLIs and custom toolchains. Storing prompts in `.prompt` files or `system_prompt.txt` keeps the prompt content out of the script file, making it easier for human developers to read and edit them like normal text documents.

- Reference: [Promptfoo](https://promptfoo.dev) natively parses `.prompt` files.

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

### skills.sh

A community registry and package manager for agent skills. Tracks install counts across a public leaderboard and lets anyone publish or discover skills for any supported agent. Install any skill into the current project with a single command:

```sh
npx skills init
```

Supports all major agents: AMP, Antigravity, Claude Code, ClawdBot, Cline, Codex, Cursor, Droid, Gemini, GitHub Copilot, Goose, Kilo, Kiro CLI, Nous Research, OpenCode, Roo, Trae, VSCode, and Windsurf.

- Registry: [skills.sh](https://skills.sh/)

---

## Design and UI conventions

### DESIGN.md

A markdown file placed in the project root that defines a project's visual design system for AI design and coding agents. It combines YAML front matter for machine-readable tokens, such as colors, typography, spacing, and radius values, with Markdown prose that explains the visual intent and component patterns.

Google Stitch documents DESIGN.md as the design counterpart to AGENTS.md: a plain-text artifact that agents can read, edit, and apply when generating consistent screens. The format allows unknown sections and custom tokens, so teams can extend it for domain-specific design rules.

- Spec: [Stitch — DESIGN.md specification](https://stitch.withgoogle.com/docs/design-md/specification)
- Docs: [Stitch — What is DESIGN.md?](https://stitch.withgoogle.com/docs/design-md/overview)
- Repo: [VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md)
- Directory: [getdesign.md](https://getdesign.md)

---

## Evaluation conventions

These conventions make agent behavior testable and version-controlled. They sit near prompts, skills, and agent instructions so teams can catch regressions when changing tools, prompts, models, or workflows.

### EVAL.yaml

AgentEvals defines a declarative YAML format for evaluating AI agent capabilities. The main file is `EVAL.yaml`, with test cases, criteria, rubrics, and evaluator definitions such as code judges, LLM judges, tool trajectory checks, field accuracy, and execution metrics.

The pattern is useful when agent quality needs to be reviewed in pull requests or CI instead of living only in external dashboards. A repository can keep central evals in an `evals/` directory or colocate them with agent skills and prompts.

- Spec: [AgentEvals specification overview](https://agentevals.io/specification/overview/)
- Format: [AgentEvals EVAL format](https://agentevals.io/specification/eval-format/)
- Repo: [agentevals/agentevals](https://github.com/agentevals/agentevals)

---

## Web and LLM discoverability

### llms.txt

A plain markdown file placed at `yourdomain.com/llms.txt` that tells AI crawlers which parts of your site are best suited for LLM ingestion. Proposed by Jeremy Howard (FastAI) in September 2024. A companion `llms-full.txt` contains the full content in a single file.

By mid-2025, over 600 websites had adopted the standard, including Anthropic, Stripe, Cloudflare, Perplexity, Cursor, Hugging Face, and ElevenLabs. The pattern is distinct from SEO: it targets AI agents that retrieve documentation to answer developer questions, not search crawlers.

- Spec: [llmstxt.org](https://llmstxt.org)
- Directory: [directory.llmstxt.cloud](https://directory.llmstxt.cloud)
- Guide: [gitbook.com — What is llms.txt](https://www.gitbook.com/blog/what-is-llms-txt)

### pricing.md

A machine-readable pricing file served at `yourdomain.com/pricing.md`. The convention emerged from a practical problem: AI agents were getting confused by JS-rendered pricing pages with interactive sliders. Publishing a static Markdown version at a predictable URL — with content negotiation support (`Accept: text/markdown`) — gives agents a reliable way to parse plans, tiers, and overage rates without scraping.

Popularized in 2025 by Resend, Auth0, and WorkOS, with the pattern spreading across developer-focused SaaS companies.

- Example: [resend.com/pricing.md](https://resend.com/pricing.md)
- Example: [auth0.com/pricing.md](https://auth0.com/pricing.md)
- Example: [workos.com/pricing.md](https://workos.com/pricing.md)

### ai-plugin.json

A JSON manifest served from `/.well-known/ai-plugin.json` that lets an AI client discover an API plugin. The manifest describes the API in human-facing and model-facing terms, declares authentication, and points to an OpenAPI schema that defines callable operations.

OpenAI introduced the convention for ChatGPT plugins. Plugins have since been superseded by GPT Actions in OpenAI's product, but the file remains a real legacy convention and is still supported by some plugin import flows that understand OpenAI-style manifests.

- Example: [openai/plugins-quickstart](https://github.com/openai/plugins-quickstart)
- Manifest example: [openai/plugins-quickstart/.well-known/ai-plugin.json](https://github.com/openai/plugins-quickstart/blob/main/.well-known/ai-plugin.json)
- Reference: [Microsoft Security Copilot API plugins](https://learn.microsoft.com/en-us/copilot/security/plugin-api)

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

## Examples

Minimal example files for every convention in this list live in [examples/](/docs/examples). Each folder uses a stable slug and contains the file path a project would normally place in its own repository or service.

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

[MIT](https://github.com/guilhermealbert/awesome-ai-conventions/blob/main/LICENSE): permissive open-source license.
