---
title: "model-context-protocol/claude_desktop_config.json"
---


# `model-context-protocol/claude_desktop_config.json`

Source: `examples/model-context-protocol/claude_desktop_config.json`

````json
{
  "mcpServers": {
    "project-files": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "/absolute/path/to/project"
      ]
    },
    "memory": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-memory"
      ]
    }
  }
}
````
