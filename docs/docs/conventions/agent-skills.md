---
title: "Agent Skills"
sidebar_position: 4
---

# Agent Skills

> On-demand capability files and skill registries used by AI agents.

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
