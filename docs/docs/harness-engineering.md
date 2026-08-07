---
title: "Harness Engineering"
sidebar_position: 4
---

# Harness Engineering

> The system of context, tools, control loops, safety checks, and feedback mechanisms that turns a model into a usable agent.

## Model Versus Harness

A model generates outputs from the context it receives. A harness decides what context reaches the model, which actions are available, how actions are authorized and executed, when execution stops, and how results are checked. Instruction files and skills are part of that system, but they are not the whole system.

It is useful to separate two boundaries:

- **Tool-owned harness:** runtime behavior implemented by the coding agent or agent platform, including tool execution, context limits, permissions, retries, and stop conditions.
- **User-controlled harness:** repository instructions, scoped rules, prompt assets, skills, memory files, evals, and integrations that a project or user can configure.

The exact boundary varies by tool. Document observable controls and public interfaces rather than assuming how a product implements its private runtime.

## Anatomy of an Agent Run

| Stage | Harness responsibility | Related conventions |
| --- | --- | --- |
| Request intake | Parse the task, identify applicable policy, and reject unsupported input | `AGENTS.md`, tool-specific rules |
| Context assembly | Select relevant instructions, project facts, prior state, and capabilities | `AGENTS.md`, `MEMORY.md`, Memory Bank, `SKILL.md` |
| Reasoning and action selection | Decide whether to answer or request a bounded tool action | Prompt assets, skills |
| Authorization and execution | Check scope, permissions, input shape, timeout, and side effects | `.aiignore`, scoped rules, MCP |
| Result ingestion | Validate and sanitize tool output before adding it to context | Runtime guardrails |
| Loop control | Stop on completion, an unrecoverable blocker, or an explicit budget | `PLAN.md`, runtime policy |
| Result validation | Test outputs against the task and expected behavior | `EVAL.yaml` |
| Observation and improvement | Record safe traces and use failures to improve instructions, tools, or evals | OpenTelemetry GenAI, OpenInference |

## Context Assembly

Context is a selected working set, not every file or memory available. A harness may draw from:

- **Procedural context:** instructions, rules, skills, and playbooks that describe how to work.
- **Semantic context:** durable facts about the project, domain, or user preferences.
- **Episodic context:** relevant events and outcomes from earlier tasks or sessions.

Not every agent implements all three memory categories. Prefer explicit, reviewable project files for facts that must be portable across tools, and retrieve only what helps the current task.

## The Tool Loop

An agent run commonly alternates between model reasoning and tool execution. Each tool result becomes new context for the next decision. A safe loop defines:

- which tools are available and what each tool can access;
- authorization rules for reads, writes, network access, and destructive actions;
- schemas for tool inputs and validation for tool results;
- per-call timeouts, retry limits, and total action or token budgets;
- completion and blocked conditions that prevent an unbounded loop.

MCP can standardize the tool boundary, but it does not define the host's complete loop, permission model, or success criteria.

## Guardrails

Guardrails operate at several points:

1. Input checks reject or narrow unsafe and malformed requests.
2. Context checks prevent secrets, irrelevant data, or untrusted instructions from being injected silently.
3. Action checks enforce permissions before a tool changes external state.
4. Result checks treat tool output as untrusted input before returning it to the model.
5. Output checks verify format, evidence, and task-specific acceptance criteria.

A Markdown rule can express policy, but enforcement belongs in the runtime or tool boundary when failure would have material consequences.

## Evaluation and Observability

Evaluation asks whether the harness produced an acceptable result. Observability explains what happened during the run. They work together but are not interchangeable.

Useful measurements include completion rate, tool failures, retries, latency, token usage, estimated cost, policy denials, evaluator scores, and the stage where a task became blocked. Trace content can include sensitive prompts, responses, retrieved documents, and tool payloads; capture only what is needed, apply redaction, and define retention before enabling content-level telemetry.

## A Minimal Adoption Path

1. Add `AGENTS.md` with verified build, test, style, and safety instructions.
2. Exclude secrets and noisy generated content with `.aiignore` or supported scoped rules.
3. Add a reviewable `PLAN.md` workflow for multi-step or high-risk changes.
4. Extract repeated specialized workflows into `SKILL.md` files.
5. Add evals when behavior must remain stable across prompt, model, or tool changes.
6. Add tracing when failures span multiple model or tool calls and cannot be explained from final outputs alone.
7. Add MCP, A2A, or ACP only when the corresponding integration boundary exists.

Start with the smallest layer that addresses a measured problem. More context, tools, memory, and telemetry increase capability, but also increase cost, attack surface, and maintenance.

## Related Guides

- [Layers](./layers.md)
- [Decision Guide](./decision_guide.md)
- [Runtime and Guardrails](./conventions/runtime-guardrails.md)
- [Evaluation and Testing](./conventions/evaluation-testing.md)
- [Observability and Tracing](./conventions/observability-tracing.md)
- [Protocols](./conventions/protocols.md)
