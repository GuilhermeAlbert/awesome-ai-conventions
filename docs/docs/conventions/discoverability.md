---
title: "Web and LLM Discoverability"
sidebar_position: 7
---

# Web and LLM Discoverability

> Files and well-known URLs that help LLMs discover docs, pricing, and APIs.

### llms.txt

A plain markdown file placed at `yourdomain.com/llms.txt` that tells AI crawlers which parts of your site are best suited for LLM ingestion. Proposed by Jeremy Howard (FastAI) in September 2024. A companion `llms-full.txt` contains the full content in a single file.

By mid-2025, over 600 websites had adopted the standard, including Anthropic, Stripe, Cloudflare, Perplexity, Cursor, Hugging Face, and ElevenLabs. The pattern is distinct from SEO: it targets AI agents that retrieve documentation to answer developer questions, not search crawlers.

- Spec: [llmstxt.org](https://llmstxt.org)
- Directory: [directory.llmstxt.cloud](https://directory.llmstxt.cloud)
- Guide: [gitbook.com — What is llms.txt](https://www.gitbook.com/blog/what-is-llms-txt)

### pricing.md

A machine-readable pricing file served at `yourdomain.com/pricing.md`. The convention emerged from a practical problem: AI agents were getting confused by JS-rendered pricing pages with interactive sliders. Publishing a static Markdown version at a predictable URL — with content negotiation support (`Accept: text/markdown`) — gives agents a reliable way to parse plans, tiers, and overage rates without scraping.

Popularized in 2025 by Resend, Auth0, and WorkOS, with the pattern spreading across developer-focused SaaS companies.

- Example: [resend.com/pricing.md](https://resend.com/pricing.md)
- Example: [auth0.com/pricing.md](https://auth0.com/pricing.md)
- Example: [workos.com/pricing.md](https://workos.com/pricing.md)

### auth.md

A markdown file served from `yourdomain.com/auth.md` that tells AI agents how to register, claim credentials, present credentials, handle errors, and recover from revocation. It acts as the prose companion to OAuth Protected Resource Metadata at `/.well-known/oauth-protected-resource`, which remains the authoritative source for endpoints and supported flows.

WorkOS documents the convention for agentic registration flows. A typical file walks agents through discovery, method selection, registration shapes, OTP claim ceremony, credential usage, errors, and revocation behavior.

- Docs: [WorkOS — The auth.md file](https://workos.com/auth-md/docs/auth-md)
- Example: [workos/auth.md AUTH.md](https://github.com/workos/auth.md/blob/main/AUTH.md)

### ai-plugin.json

A JSON manifest served from `/.well-known/ai-plugin.json` that lets an AI client discover an API plugin. The manifest describes the API in human-facing and model-facing terms, declares authentication, and points to an OpenAPI schema that defines callable operations.

OpenAI introduced the convention for ChatGPT plugins. Plugins have since been superseded by GPT Actions in OpenAI's product, but the file remains a real legacy convention and is still supported by some plugin import flows that understand OpenAI-style manifests.

- Example: [OpenAI/plugins-quickstart](https://github.com/openai/plugins-quickstart)
- Manifest example: [OpenAI/plugins-quickstart/.well-known/ai-plugin.json](https://github.com/openai/plugins-quickstart/blob/main/.well-known/ai-plugin.json)
- Reference: [Microsoft Security Copilot API plugins](https://learn.microsoft.com/en-us/copilot/security/plugin-api)

---
