---
title: "Evaluation and Testing"
sidebar_position: 6
---

# Evaluation and Testing

> Version-controlled evaluation files for agent behavior and prompt quality.

These conventions make agent behavior testable and version-controlled. They sit near prompts, skills, and agent instructions so teams can catch regressions when changing tools, prompts, models, or workflows.

### EVAL.yaml

AgentEvals defines a declarative YAML format for evaluating AI agent capabilities. The main file is `EVAL.yaml`, with test cases, criteria, rubrics, and evaluator definitions such as code judges, LLM judges, tool trajectory checks, field accuracy, and execution metrics.

The pattern is useful when agent quality needs to be reviewed in pull requests or CI instead of living only in external dashboards. A repository can keep central evals in an `evals/` directory or colocate them with agent skills and prompts.

- Spec: [AgentEvals specification overview](https://agentevals.io/specification/overview/)
- Format: [AgentEvals EVAL format](https://agentevals.io/specification/eval-format/)
- Repo: [agentevals/agentevals](https://github.com/agentevals/agentevals)

---
