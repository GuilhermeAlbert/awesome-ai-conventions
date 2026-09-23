---
title: "Observability and Tracing"
sidebar_position: 7
---

# Observability and Tracing

> Semantic conventions for tracing model calls, agents, tools, guardrails, and evaluations.

## How To Evaluate Entries

Each entry in this family should make the following points clear:

- What the convention is.
- Where the file, URL, or protocol surface normally lives.
- When a team should use it.
- Adoption evidence from a public spec, canonical docs, or active ecosystem use.
- Which example illustrates the convention, if one exists.
- Related conventions that solve adjacent problems.

## Registry Entries

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
