---
title: "README Mirror"
sidebar_position: 2
---

# Awesome AI Conventions [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> A curated list of conventions, file standards, and protocols for building with AI agents.

This registry tracks **file-based conventions and open protocols** used by humans, codebases, and AI agents to exchange context and coordinate work.

---

## Contents

- [Project-level context files](#project-level-context-files)
  - [AGENTS.md](#agentsmd)
  - [CLAUDE.md](#claudemd)
  - [GEMINI.md](#geminimd)
  - [MEMORY.md](#memorymd)
  - [Cursor, Cline, and GitHub Copilot instruction files](#cursor-cline-and-github-copilot-instruction-files)
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
- [Observability and tracing conventions](#observability-and-tracing-conventions)
  - [OpenTelemetry GenAI Semantic Conventions](#opentelemetry-genai-semantic-conventions)
  - [OpenInference Semantic Conventions](#openinference-semantic-conventions)
- [Web and LLM discoverability](#web-and-llm-discoverability)
  - [llms.txt](#llmstxt)
  - [pricing.md](#pricingmd)
  - [auth.md](#authmd)
  - [ai-plugin.json](#ai-pluginjson)
- [Protocols](#protocols)
  - [Model Context Protocol (MCP)](#model-context-protocol-mcp)
  - [Agent2Agent Protocol (A2A)](#agent2agent-protocol-a2a)
  - [Agent Client Protocol (ACP)](#agent-client-protocol-acp)
- [Examples](#examples)

---

## Project-level context files

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

## Workflow and state artifacts

These files capture what an agent intends to do or what state a session should carry forward. Unlike project-level instruction files, they are usually produced during a task and then reviewed or consumed by a later execution phase.

### PLAN.md

A Markdown implementation plan generated or maintained by an agent before code changes begin. The file gives humans a reviewable artifact for objective, context, approach, implementation steps, and validation criteria, while giving a later execution agent a stable handoff document.

OpenHands documents this pattern in its Planning Mode: a planning agent writes a structured `PLAN.md` in the workspace, then an execution agent reads that file to implement the plan. The convention is still less universal than `AGENTS.md`, but it is a concrete file artifact used by agentic coding workflows.

- Docs: [OpenHands: Creating Custom Agent](https://docs.openhands.dev/sdk/guides/agent-custom)
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

Skills are modular, on-demand capability files. An agent reads the relevant skill only when a task matches its description, which keeps unrelated instructions out of the context window. The format has converged into an open standard.

### SKILL.md

A Markdown file with a YAML frontmatter header (`name`, `description`, `tools`, triggers) and a body containing workflows, checklists, and output templates. The agent reads the file only when the task triggers it.

Published by Anthropic as an open standard in December 2025. OpenAI adopted the same format for Codex CLI and ChatGPT in the same period. GitHub Copilot followed in December 2025, reading skills from `.github/skills/`.

Standard install locations:

| Agent          | Personal            | Project           |
| -------------- | ------------------- | ----------------- |
| Claude Code    | `~/.claude/skills/` | `.claude/skills/` |
| Codex CLI      | `~/.codex/skills/`  | `.codex/skills/`  |
| GitHub Copilot | Not supported       | `.github/skills/` |

For teams using multiple agents, the symlink pattern keeps a canonical `.skills/` directory and links each agent to it.

- Spec: [agentskills.io](https://agentskills.io)
- Docs: [platform.claude.com: Agent Skills overview](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview)
- Docs: [platform.claude.com: Skill authoring best practices](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/best-practices)
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

- Spec: [Stitch: DESIGN.md specification](https://stitch.withgoogle.com/docs/design-md/specification)
- Docs: [Stitch: What is DESIGN.md?](https://stitch.withgoogle.com/docs/design-md/overview)
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

## Observability and tracing conventions

These conventions give traces, spans, metrics, and events consistent names so agent runs can be inspected across model calls, tool execution, retrieval, guardrails, and evaluation.

### OpenTelemetry GenAI Semantic Conventions

The OpenTelemetry GenAI Semantic Conventions define common telemetry for generative AI systems. They cover model and agent spans, tool execution, token usage, duration metrics, exceptions, input and output events, and evaluation results using OpenTelemetry signals.

The GenAI conventions are currently marked as development. Implementations should pin the emitted convention version and expect changes before the specification reaches stable status. Prompt content, responses, tool arguments, and tool results may contain sensitive data and should not be captured by default without an explicit privacy policy.

- Spec: [OpenTelemetry: Semantic conventions for generative AI systems](https://github.com/open-telemetry/semantic-conventions-genai/blob/main/docs/gen-ai/README.md)
- Project: [OpenTelemetry GenAI Semantic Conventions](https://github.com/open-telemetry/semantic-conventions-genai)

### OpenInference Semantic Conventions

OpenInference defines OpenTelemetry-compatible attributes and span kinds for AI applications. Its semantic conventions cover LLM calls, embeddings, chains, agents, tools, retrievers, rerankers, guardrails, evaluators, and prompts, with instrumentations for multiple model SDKs and agent frameworks.

OpenInference traces can be exported to OpenTelemetry-compatible backends. Its content-capture controls can hide inputs, outputs, invocation parameters, and tool definitions when telemetry would otherwise expose sensitive or oversized payloads.

- Spec: [OpenInference: Semantic Conventions](https://arize-ai.github.io/openinference/spec/semantic_conventions.html)
- Project: [Arize AI: OpenInference](https://github.com/Arize-ai/openinference)
- Configuration: [OpenInference: Configuration](https://arize-ai.github.io/openinference/spec/configuration.html)

---

## Web and LLM discoverability

### llms.txt

A plain markdown file placed at `yourdomain.com/llms.txt` that tells AI crawlers which parts of your site are best suited for LLM ingestion. Proposed by Jeremy Howard (FastAI) in September 2024. A companion `llms-full.txt` contains the full content in a single file.

By mid-2025, over 600 websites had adopted the standard, including Anthropic, Stripe, Cloudflare, Perplexity, Cursor, Hugging Face, and ElevenLabs. The pattern is distinct from SEO: it targets AI agents that retrieve documentation to answer developer questions, not search crawlers.

- Spec: [llmstxt.org](https://llmstxt.org)
- Directory: [directory.llmstxt.cloud](https://directory.llmstxt.cloud)
- Guide: [gitbook.com: What is llms.txt](https://www.gitbook.com/blog/what-is-llms-txt)

### pricing.md

A machine-readable pricing file served at `yourdomain.com/pricing.md`. AI agents often fail to parse JavaScript-rendered pricing pages with interactive sliders. A static Markdown file at a predictable URL, optionally served through content negotiation with `Accept: text/markdown`, lets agents read plans, tiers, and overage rates without scraping the rendered page.

Popularized in 2025 by Resend, Auth0, and WorkOS, with the pattern spreading across developer-focused SaaS companies.

- Example: [resend.com/pricing.md](https://resend.com/pricing.md)
- Example: [auth0.com/pricing.md](https://auth0.com/pricing.md)
- Example: [workos.com/pricing.md](https://workos.com/pricing.md)

### auth.md

A markdown file served from `yourdomain.com/auth.md` that tells AI agents how to register, claim credentials, present credentials, handle errors, and recover from revocation. It acts as the prose companion to OAuth Protected Resource Metadata at `/.well-known/oauth-protected-resource`, which remains the authoritative source for endpoints and supported flows.

WorkOS documents the convention for agentic registration flows. A typical file walks agents through discovery, method selection, registration shapes, OTP claim ceremony, credential usage, errors, and revocation behavior.

- Docs: [WorkOS: The auth.md file](https://workos.com/auth-md/docs/auth-md)
- Example: [workos/auth.md AUTH.md](https://github.com/workos/auth.md/blob/main/AUTH.md)

### ai-plugin.json

A JSON manifest served from `/.well-known/ai-plugin.json` that lets an AI client discover an API plugin. The manifest describes the API in human-facing and model-facing terms, declares authentication, and points to an OpenAPI schema that defines callable operations.

OpenAI introduced the convention for ChatGPT plugins. Plugins have since been superseded by GPT Actions in OpenAI's product, but the file remains a real legacy convention and is still supported by some plugin import flows that understand OpenAI-style manifests.

- Example: [OpenAI/plugins-quickstart](https://github.com/openai/plugins-quickstart)
- Manifest example: [OpenAI/plugins-quickstart/.well-known/ai-plugin.json](https://github.com/openai/plugins-quickstart/blob/main/.well-known/ai-plugin.json)
- Reference: [Microsoft Security Copilot API plugins](https://learn.microsoft.com/en-us/copilot/security/plugin-api)

---

## Protocols

### Model Context Protocol (MCP)

An open protocol for connecting AI models to external tools, APIs, and data sources. Anthropic created MCP and donated it to the Agentic AI Foundation, part of the Linux Foundation, in December 2025 alongside AGENTS.md and Goose.

MCP defines a standard interface between an LLM host (Claude, Cursor, VS Code, etc.) and MCP servers that expose tools, resources, and prompts. The protocol replaced dozens of fragmented tool-calling integrations across the industry.

- Spec: [modelcontextprotocol.io](https://modelcontextprotocol.io)
- Docs: [platform.claude.com: MCP](https://platform.claude.com/docs/en/build-with-claude/mcp)
- Servers list: [punkpeye/awesome-mcp-servers](https://github.com/punkpeye/awesome-mcp-servers)

### Agent2Agent Protocol (A2A)

Agent2Agent Protocol is an open protocol for communication between independent agentic applications. It defines discovery through Agent Cards, task lifecycle management, messages, artifacts, streaming, and extension negotiation without requiring agents to expose their internal memory or tools.

A2A is hosted by the Linux Foundation and has implementations across multiple cloud and agent ecosystems. MCP connects a model host or agent to tools and data. A2A coordinates work between independent agents.

- Spec: [A2A Protocol specification](https://a2a-protocol.org/latest/specification/)
- Project: [A2A Protocol](https://a2a-protocol.org/latest/)
- Governance: [Linux Foundation: Agent2Agent project](https://www.linuxfoundation.org/press/linux-foundation-launches-the-agent2agent-protocol-project-to-enable-secure-intelligent-communication-between-ai-agents)

### Agent Client Protocol (ACP)

Agent Client Protocol is an open JSON-RPC protocol between coding agents and editors or other client interfaces. It standardizes session setup, prompts, streaming updates, tool calls, file changes, terminal output, and capability negotiation so an agent can work across compatible clients.

ACP occupies a different boundary from MCP and A2A: ACP connects a client to a coding agent, MCP connects an agent to tools and data, and A2A connects independent agents. Zed and JetBrains jointly develop the protocol, with implementations for multiple editors and agents.

- Spec: [Agent Client Protocol](https://agentclientprotocol.com/protocol/overview)
- Project: [Zed: Agent Client Protocol](https://zed.dev/acp)
- Adoption: [JetBrains: Agent Client Protocol](https://www.jetbrains.com/acp/)

---

## Examples

Minimal example files for every convention in this list live in [examples/](/docs/examples). Each folder uses a stable slug and contains the file path a project would normally place in its own repository or service. To refresh the generated docs, run `npm run generate` from `docs/`.

---

## Contributing

This list follows the [Awesome manifesto](https://github.com/sindresorhus/awesome/blob/main/awesome.md).

To add a convention:

1. It must be **adopted by more than one team or tool** in production
2. It must have a **public spec, docs, or canonical reference**
3. It must describe a **file-based convention or open protocol**

Open a PR with the convention name, a brief description in plain language, and links to the spec and at least one real-world reference.
