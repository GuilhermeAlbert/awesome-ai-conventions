---
title: "Emerging Patterns"
sidebar_position: 7
---

# Emerging Patterns

This page tracks public conventions that have useful implementations but do not yet meet the registry's bar for the main README. Each entry names the missing evidence so maintainers know what to review next.

## REVIEW.md

**Status:** Watchlist

**Review after:** 2027-03-01

`REVIEW.md` provides repository-specific instructions for AI code review. GitHub Copilot code review reads it alongside other repository instruction files. Anthropic's Claude Code changelog also refers to `REVIEW.md` instructions in its Code Review service.

The file has support from two review products, but its scope, precedence, and expected structure are not defined by an independent specification. Keep it on the watchlist until more tools document compatible behavior.

- Docs: [GitHub Copilot code review](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/request-a-code-review/use-code-review)
- Adoption: [Claude Code changelog](https://code.claude.com/docs/en/changelog)

## Project MCP configuration

**Status:** Candidate

**Review after:** 2027-03-01

Project-level MCP configuration lets a repository declare the MCP servers available to its contributors and agents. Claude Code uses `.mcp.json` at the repository root. Cursor uses `.cursor/mcp.json`. Both formats define servers under an `mcpServers` object, but their paths and supported fields can differ.

The shared filename and object shape show convergence. Because the paths differ, repositories still need client-specific files. Verify each file with the target client.

- Docs: [Claude Code MCP configuration](https://code.claude.com/docs/en/mcp)
- Docs: [Cursor MCP configuration](https://docs.cursor.com/context/model-context-protocol)

## `.github/prompts/*.prompt.md`

**Status:** Candidate

**Review after:** 2027-03-01

GitHub Copilot prompt files store reusable prompts with optional inputs and tool declarations under `.github/prompts/`. The format is available across several Copilot surfaces, but GitHub still marks prompt files as public preview.

The repository already tracks `.prompt` and `system_prompt.txt` as broader prompt asset patterns. Keep Copilot's path-specific format as a candidate until the format stabilizes or another tool adopts it.

- Docs: [GitHub Copilot customization cheat sheet](https://docs.github.com/en/copilot/reference/customization-cheat-sheet)
- Status: [GitHub Copilot response customization](https://docs.github.com/en/copilot/concepts/prompting/response-customization)
