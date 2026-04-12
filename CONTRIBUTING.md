# Contributing

Thank you for considering a contribution. This list is a curated registry, not an exhaustive index. The bar for inclusion is intentional.

## Criteria for inclusion

A convention belongs here if it meets all three conditions:

1. **Adopted by more than one team or tool in production.** A spec draft or personal project does not qualify. There must be observable, independent adoption.
2. **Has a public spec, docs, or canonical reference.** A GitHub repo, published doc site, or archived proposal counts. A blog post alone does not.
3. **Is a file-based convention or open protocol.** The subject of the entry is a file format, a filename convention, or a communication protocol — not a framework, tool, or product.

## How to open a PR

1. Fork the repository.
2. Edit `README.md` only. Add your entry under the appropriate section.
3. Write the description in plain prose: one or two sentences that say what the convention does and why it exists. No bullet points within the description. No marketing language.
4. Link to the primary source first (spec, official docs, canonical repo). Secondary references (guides, community repos) may follow.
5. Open a PR. Fill in the pull request template.

If you are unsure which section fits, explain your reasoning in the PR description. New sections may be created if warranted, but they require at least two entries.

## What does not belong

- Frameworks and libraries (LangChain, LlamaIndex, AutoGen, etc.)
- Hosted products and commercial services
- Tooling that is not itself a file-based convention or protocol
- Anything that requires a single vendor's platform to function and has no independent spec

## Writing style

Descriptions in this list are factual and direct.

- Say what the convention does, not how great it is.
- Avoid adjectives that carry no information: "powerful," "seamless," "elegant," "robust," "game-changing."
- Avoid phrases that substitute for evidence: "rapidly adopted," "industry standard," "everyone uses."
- Use present tense.
- Prefer specifics over generalities. Instead of "tells agents what to do," write "documents build commands, coding conventions, and which files the agent must not modify."

A description that reads like marketing copy will be asked to rewrite before merge.

## Updating existing entries

If a spec URL changes, a project is abandoned, or new official docs exist, open a PR with the correction. Corrections are welcome and do not require the same adoption bar as new entries.

## What happens after you open a PR

Maintainers review for criteria, accuracy, and writing quality. Feedback is given as PR comments. There is no SLA. If your PR sits for more than two weeks without response, feel free to leave a comment to request review.
