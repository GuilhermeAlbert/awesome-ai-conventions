---
title: "Prompt Assets"
sidebar_position: 3
---

# Prompt Assets

> Prompt files and prompt formats that keep model instructions versioned with code.

These conventions standardize how prompts are stored, versioned, and shared inside codebases, keeping them cleanly separated from application logic.

### .prompty

An asset class and open file format for prompts. Prompty files are modified Markdown documents with YAML frontmatter containing model configurations, inputs, and execution metadata, followed by the prompt template in Markdown.

Initially introduced by Microsoft, it is now adopted by tools like Promptflow, LangChain, and Semantic Kernel.

- Spec: [prompty.ai](https://prompty.ai)

### .prompt and system_prompt.txt

A more informal but widespread convention across various LLM CLIs and custom toolchains. Storing prompts in `.prompt` files or `system_prompt.txt` keeps the prompt content out of the script file, making it easier for human developers to read and edit them like normal text documents.

- Reference: [Promptfoo](https://promptfoo.dev) natively parses `.prompt` files.

---
