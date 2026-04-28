---
title: "Protocols"
sidebar_position: 8
---

# Protocols

> Open protocols for connecting agents, tools, resources, and other agents.

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
