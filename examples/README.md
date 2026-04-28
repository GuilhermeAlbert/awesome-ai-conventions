# Examples

> Minimal, copyable examples for each convention in the root README.

Each folder uses a stable slug instead of repeating filenames in the directory name. Inside each folder, the files keep the path or filename a project would normally use.

## Project-level context files

- [AGENTS.md](agents-md/AGENTS.md)
- [CLAUDE.md](claude-md/CLAUDE.md)
- [MEMORY.md](memory-md/MEMORY.md)
- [Tool-specific rules](tool-specific-rules/)
  - [.cursor/rules/project.mdc](tool-specific-rules/.cursor/rules/project.mdc)
  - [.clinerules](tool-specific-rules/.clinerules)
  - [.github/copilot-instructions.md](tool-specific-rules/.github/copilot-instructions.md)
- [.aiignore](aiignore/.aiignore)
- [Memory Bank](memory-bank/)
  - [cline_docs/activeContext.md](memory-bank/cline_docs/activeContext.md)
  - [.roo/activeContext.md](memory-bank/.roo/activeContext.md)

## Prompt asset files

- [.prompty](prompty/summarize_release_notes.prompty)
- [.prompt](prompt-files/refactor.prompt)
- [system_prompt.txt](prompt-files/system_prompt.txt)

## Agent skill files

- [SKILL.md](skill-md/SKILL.md)

## Design and UI conventions

- [DESIGN.md](design-md/DESIGN.md)

## Evaluation conventions

- [EVAL.yaml](eval-yaml/EVAL.yaml)

## Web and LLM discoverability

- [llms.txt](llms-txt/llms.txt)
- [llms-full.txt](llms-txt/llms-full.txt)
- [pricing.md](pricing-md/pricing.md)
- [ai-plugin.json](ai-plugin/.well-known/ai-plugin.json)
- [OpenAPI schema for ai-plugin.json](ai-plugin/openapi.yaml)

## Protocols

- [Model Context Protocol config](model-context-protocol/claude_desktop_config.json)
- [Agent Card](agent-cards/.well-known/agent-card.json)
