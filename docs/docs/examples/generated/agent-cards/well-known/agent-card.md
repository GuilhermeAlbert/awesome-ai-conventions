---
title: "agent-cards/.well-known/agent-card.json"
---


# `agent-cards/.well-known/agent-card.json`

Source: `examples/agent-cards/.well-known/agent-card.json`

````json
{
  "name": "Issue Triage Agent",
  "description": "Classifies incoming support and engineering issues, suggests priority, and returns a structured triage summary.",
  "supportedInterfaces": [
    {
      "url": "https://agents.example.com/triage/a2a/v1",
      "protocolBinding": "JSONRPC",
      "protocolVersion": "1.0"
    }
  ],
  "provider": {
    "organization": "Example Corp",
    "url": "https://example.com"
  },
  "version": "1.0.0",
  "documentationUrl": "https://example.com/docs/issue-triage-agent",
  "capabilities": {
    "streaming": true,
    "pushNotifications": false,
    "extendedAgentCard": false
  },
  "defaultInputModes": [
    "text/plain",
    "application/json"
  ],
  "defaultOutputModes": [
    "application/json",
    "text/plain"
  ],
  "skills": [
    {
      "id": "triage-issue",
      "name": "Triage Issue",
      "description": "Reads an issue description and returns category, priority, owner recommendation, and missing information.",
      "tags": [
        "support",
        "github",
        "triage"
      ],
      "examples": [
        "Classify this GitHub issue and suggest a priority.",
        "{\"title\":\"Checkout fails for EU customers\",\"body\":\"Payment succeeds but order creation times out.\"}"
      ],
      "inputModes": [
        "text/plain",
        "application/json"
      ],
      "outputModes": [
        "application/json"
      ]
    }
  ]
}
````
