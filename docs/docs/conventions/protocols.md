---
title: "Protocols"
sidebar_position: 9
---

# Protocols

> Open protocols for connecting agents, tools, resources, and other agents.

## How To Evaluate Entries

Each entry in this family should make the following points clear:

- What the convention is.
- Where the file, URL, or protocol surface normally lives.
- When a team should use it.
- Adoption evidence from a public spec, canonical docs, or active ecosystem use.
- Which example illustrates the convention, if one exists.
- Related conventions that solve adjacent problems.

## Registry Entries

### Model Context Protocol (MCP)

An open protocol for connecting AI models to external tools, APIs, and data sources. Described as "USB-C for AI models." Created by Anthropic and donated to the Agentic AI Foundation (Linux Foundation) in December 2025, alongside AGENTS.md and Goose.

MCP defines a standard interface between an LLM host (Claude, Cursor, VS Code, etc.) and MCP servers that expose tools, resources, and prompts. The protocol replaced dozens of fragmented tool-calling integrations across the industry.

- Spec: [modelcontextprotocol.io](https://modelcontextprotocol.io)
- Docs: [platform.claude.com — MCP](https://platform.claude.com/docs/en/build-with-claude/mcp)
- Servers list: [punkpeye/awesome-mcp-servers](https://github.com/punkpeye/awesome-mcp-servers)

### Agent2Agent Protocol (A2A)

Agent2Agent Protocol is an open protocol for communication between independent agentic applications. It defines discovery through Agent Cards, task lifecycle management, messages, artifacts, streaming, and extension negotiation without requiring agents to expose their internal memory or tools.

A2A is hosted by the Linux Foundation and has implementations across multiple cloud and agent ecosystems. It complements MCP: MCP connects a model host or agent to tools and data, while A2A coordinates work between agents.

- Spec: [A2A Protocol specification](https://a2a-protocol.org/latest/specification/)
- Project: [A2A Protocol](https://a2a-protocol.org/latest/)
- Governance: [Linux Foundation — Agent2Agent project](https://www.linuxfoundation.org/press/linux-foundation-launches-the-agent2agent-protocol-project-to-enable-secure-intelligent-communication-between-ai-agents)

### Agent Client Protocol (ACP)

Agent Client Protocol is an open JSON-RPC protocol between coding agents and editors or other client interfaces. It standardizes session setup, prompts, streaming updates, tool calls, file changes, terminal output, and capability negotiation so an agent can work across compatible clients.

ACP occupies a different boundary from MCP and A2A: ACP connects a client to a coding agent, MCP connects an agent to tools and data, and A2A connects independent agents. Zed and JetBrains jointly develop the protocol, with implementations for multiple editors and agents.

- Spec: [Agent Client Protocol](https://agentclientprotocol.com/protocol/overview)
- Project: [Zed — Agent Client Protocol](https://zed.dev/acp)
- Adoption: [JetBrains — Agent Client Protocol](https://www.jetbrains.com/acp/)

---
