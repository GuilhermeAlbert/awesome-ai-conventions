# Awesome Agent Standards Rename

> Defines the repository rename, editorial positioning, taxonomy, and delivery sequence.

## Objective

Rename the project from **Awesome AI Conventions** to **Awesome Agent Standards** and align the repository, documentation site, and GitHub metadata with the new position.

The project will remain a curated technical index. It will cover formal standards alongside protocols, community conventions, and emerging patterns used by AI agents.

## Public identity

- Display name: `Awesome Agent Standards`
- Repository slug: `awesome-agent-standards`
- Description: `A curated index of standards, protocols, conventions, and emerging patterns for AI agents.`
- Primary audience: developers, tool authors, maintainers, and teams building with AI agents

The word `Agent` keeps the scope focused on agent tooling and interoperability. The word `Standards` gives the project a clear category while the description preserves room for work that is not yet formalized.

## Classification model

Every listed item should fit one of four classifications:

- `Standard`: a published specification with defined structure or behavior
- `Protocol`: a specification for communication or interoperability
- `Convention`: an adopted practice without a formal standards process
- `Emerging`: a recent proposal or pattern whose adoption is still developing

An item's classification describes its current status. Inclusion in the repository does not imply endorsement or industry-wide adoption.

## Repository changes

The implementation will update:

- The README title, introduction, contents, and contribution language
- Documentation pages and navigation labels
- Generated documentation and text indexes
- Package and site metadata where the old project name or URL appears
- Repository links, canonical URLs, badges, and clone instructions
- Contribution and pull request guidance where classification terminology appears
- GitHub repository name, description, and topics

Examples and technical names such as `AGENTS.md`, MCP, A2A, and Agent Skills will keep their official spelling.

## Editorial rules

All edited prose will:

- Use concise technical English
- Avoid em dashes
- Avoid generic marketing language
- Distinguish verified adoption from proposals and emerging patterns
- Prefer primary sources for factual and compatibility claims
- Keep paragraphs focused on one concrete point

## Delivery sequence

1. Rename the GitHub repository to `awesome-agent-standards`.
2. Update the local remote after confirming the GitHub redirect.
3. Bring the working branch up to date with `main` without discarding existing documentation work.
4. Replace the old identity and URLs across source and generated files.
5. Apply the four-part classification model to the README and documentation.
6. Regenerate derived documentation when the repository provides a generator.
7. Run documentation tests, the site build, link checks, and the Awesome List linter when available.
8. Commit and push the changes.
9. Open or update a pull request against `main`.

## Validation

The change is complete when:

- GitHub exposes the repository as `GuilhermeAlbert/awesome-agent-standards`
- The previous GitHub URL redirects to the renamed repository
- No unintended reference to `Awesome AI Conventions` or `awesome-ai-conventions` remains
- README and documentation use the same description and classification terms
- Generated files match their sources
- Documentation tests and builds pass
- The final diff contains no em dashes in edited prose

## Risks and mitigations

### Existing links

GitHub normally redirects renamed repository URLs. Internal and canonical links will still be replaced so the project does not depend on that redirect.

### Meaning of standards

Some entries are conventions or early proposals. The classification model makes their maturity explicit and prevents the title from overstating adoption.

### Existing branch history

The current documentation branch contains work that is not on `main`. The implementation will preserve those commits and reconcile the branch before editing shared files.

### Generated documentation

Generated files may overwrite manual changes. Source files and generators will be updated first, then derived files will be regenerated and checked.
