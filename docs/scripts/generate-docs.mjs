import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const docsRoot = path.resolve(scriptDir, '..');
const repoRoot = path.resolve(docsRoot, '..');
const docsDir = path.join(docsRoot, 'docs');
const conventionsDir = path.join(docsDir, 'conventions');
const examplesDir = path.join(docsDir, 'examples');
const generatedExamplesDir = path.join(examplesDir, 'generated');
const rootReadmePath = path.join(repoRoot, 'README.md');
const repoExamplesDir = path.join(repoRoot, 'examples');
const staticDir = path.join(docsRoot, 'static');
const siteDocsUrl = 'https://guilhermealbert.github.io/awesome-ai-conventions/docs';

const sectionPages = [
  {
    id: 'project-context-files',
    title: 'Project Context Files',
    heading: 'Project-level context files',
    position: 1,
    description:
      'Repository-root files that teach coding agents how to work inside a project.',
  },
  {
    id: 'prompt-assets',
    title: 'Prompt Assets',
    heading: 'Prompt asset files',
    position: 3,
    description:
      'Prompt files and prompt formats that keep model instructions versioned with code.',
  },
  {
    id: 'agent-skills',
    title: 'Agent Skills',
    heading: 'Agent skill files',
    position: 4,
    description:
      'On-demand capability files and skill registries used by AI agents.',
  },
  {
    id: 'design-ui',
    title: 'Design and UI',
    heading: 'Design and UI conventions',
    position: 5,
    description:
      'Machine-readable design guidance for agents that generate product interfaces.',
  },
  {
    id: 'evaluation-testing',
    title: 'Evaluation and Testing',
    heading: 'Evaluation conventions',
    position: 6,
    description:
      'Version-controlled evaluation files for agent behavior and prompt quality.',
  },
  {
    id: 'observability-tracing',
    title: 'Observability and Tracing',
    heading: 'Observability and tracing conventions',
    position: 7,
    description:
      'Semantic conventions for tracing model calls, agents, tools, guardrails, and evaluations.',
  },
  {
    id: 'discoverability',
    title: 'Web and LLM Discoverability',
    heading: 'Web and LLM discoverability',
    position: 8,
    description:
      'Files and well-known URLs that help LLMs discover docs, pricing, and APIs.',
  },
  {
    id: 'protocols',
    title: 'Protocols',
    heading: 'Protocols',
    position: 9,
    description:
      'Open protocols for connecting agents, tools, resources, and other agents.',
  },
];

const manualPages = [
  {
    file: 'intro.md',
    title: 'Introduction',
    position: 1,
    body: `# Introduction

Awesome AI Conventions is a curated registry of file-based conventions and open protocols for AI-agent-ready projects.

The source of truth remains the repository root \`README.md\`. The Docusaurus site mirrors that registry into focused pages, explains how conventions are evaluated, and generates browsable pages for every file under \`examples/**\`.

## What Belongs Here

- File-based conventions that agents can read directly from repositories or predictable web paths.
- Open protocols that standardize how agents connect to tools, resources, APIs, or each other.
- Patterns with public documentation, specs, canonical references, or clear production usage.

## What Does Not Belong Here

- Frameworks, SaaS products, or libraries by themselves.
- Private team templates without external adoption.
- Useful file names that have not become a recognizable convention.

## Start Here

- Read the full registry in [README Mirror](./readme.md).
- Browse the conceptual map in [Layers](./layers.md).
- Read [Harness Engineering](./harness-engineering.md) to see how the conventions work together during an agent run.
- Use the [Decision Guide](./decision_guide.md) to choose a convention for a specific project need.
- Review the [Methodology](./methodology.md) and [Status Taxonomy](./status_taxonomy.md) before proposing new entries.
- Check [Emerging Patterns](./emerging_patterns.md) for candidates that still need adoption or specification evidence.
- Explore copyable files in [Examples](./examples/index.md).
`,
  },
  {
    file: 'layers.md',
    title: 'Layers',
    position: 3,
    body: `# Layers

AI conventions are easier to reason about when grouped by the role they play in an agent workflow. Use this map to decide which artifact belongs in a repository, docs site, or integration surface.

## Quick Decision Map

| Need | Start with | Why |
| --- | --- | --- |
| Tell coding agents how to work in a repository | \`AGENTS.md\` | Cross-tool project instructions are the most useful baseline. |
| Preserve long-lived project context | \`MEMORY.md\` or Memory Bank | These files keep stable knowledge and task state outside a single chat. |
| Package a reusable agent capability | \`SKILL.md\` | Skills are loaded on demand when a task matches the description. |
| Store prompts as versioned assets | \`.prompty\`, \`.prompt\`, or \`system_prompt.txt\` | Prompt files keep model instructions inspectable and reviewable. |
| Restrict files or stage risky work | \`.aiignore\`, scoped rules, and \`PLAN.md\` | Guardrails reduce accidental reads, writes, and unreviewed execution. |
| Make behavior measurable | \`EVAL.yaml\` | Evals turn agent quality into a repeatable check. |
| Trace agent execution | OpenTelemetry GenAI or OpenInference | Semantic conventions make model, agent, and tool telemetry comparable. |
| Help LLMs discover public docs | \`llms.txt\` and \`llms-full.txt\` | Predictable Markdown entry points reduce scraping ambiguity. |
| Connect an agent to tools and data | MCP | MCP standardizes the agent-to-tool boundary. |
| Connect independent agents | A2A | A2A standardizes discovery and task exchange between agents. |
| Connect a coding agent to an editor | ACP | ACP standardizes the client-to-agent boundary. |

## Instruction Layer

These files tell agents how to behave in a repository.

- \`AGENTS.md\`
- \`CLAUDE.md\`
- \`GEMINI.md\`
- Tool-specific rules such as Cursor rules, Cline rules, and Copilot instructions
- \`.aiignore\`

## Context and State Layer

These files preserve project knowledge, task state, or execution intent.

- \`MEMORY.md\`
- Memory Bank folders such as \`cline_docs/\` and \`.roo/\`
- \`PLAN.md\`

## Prompt and Capability Layer

These files package model instructions and agent capabilities into reusable assets.

- \`.prompty\`
- \`.prompt\`
- \`system_prompt.txt\`
- \`SKILL.md\`

## Execution and Safety Layer

Runtime loops, authorization checks, budgets, retries, and output validation are usually implemented by the agent host. Repository conventions can influence these controls but do not implement the runtime by themselves.

- \`.aiignore\`
- \`PLAN.md\`
- Tool-specific scoped rules

## Evaluation Layer

These files make behavior testable and repeatable.

- \`EVAL.yaml\`

## Observability Layer

These semantic conventions describe agent runs as traces, spans, metrics, and events.

- OpenTelemetry GenAI Semantic Conventions
- OpenInference Semantic Conventions

## Discoverability Layer

These files expose structured information to LLMs and API-aware clients.

- \`llms.txt\`
- \`llms-full.txt\`
- \`pricing.md\`
- \`auth.md\`
- \`/.well-known/ai-plugin.json\`

## Interoperability Layer

These standards define interoperability across different harness boundaries.

- Model Context Protocol for agents, tools, and data
- Agent2Agent Protocol for independent agents
- Agent Client Protocol for coding agents and editor clients
`,
  },
  {
    file: 'emerging_patterns.md',
    title: 'Emerging Patterns',
    position: 7,
    body: `# Emerging Patterns

This page tracks public conventions that have useful implementations but do not yet meet the registry's bar for the main README. Each entry names the missing evidence so maintainers know what to review next.

## REVIEW.md

**Status:** Watchlist

**Review after:** 2027-03-01

\`REVIEW.md\` provides repository-specific instructions for AI code review. GitHub Copilot code review reads it alongside other repository instruction files. Anthropic's Claude Code changelog also refers to \`REVIEW.md\` instructions in its Code Review service.

The file has support from two review products, but its scope, precedence, and expected structure are not defined by an independent specification. Keep it on the watchlist until more tools document compatible behavior.

- Docs: [GitHub Copilot code review](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/request-a-code-review/use-code-review)
- Adoption: [Claude Code changelog](https://code.claude.com/docs/en/changelog)

## Project MCP configuration

**Status:** Candidate

**Review after:** 2027-03-01

Project-level MCP configuration lets a repository declare the MCP servers available to its contributors and agents. Claude Code uses \`.mcp.json\` at the repository root. Cursor uses \`.cursor/mcp.json\`. Both formats define servers under an \`mcpServers\` object, but their paths and supported fields can differ.

The shared filename and object shape show convergence. Because the paths differ, repositories still need client-specific files. Verify each file with the target client.

- Docs: [Claude Code MCP configuration](https://code.claude.com/docs/en/mcp)
- Docs: [Cursor MCP configuration](https://docs.cursor.com/context/model-context-protocol)

## \`.github/prompts/*.prompt.md\`

**Status:** Candidate

**Review after:** 2027-03-01

GitHub Copilot prompt files store reusable prompts with optional inputs and tool declarations under \`.github/prompts/\`. The format is available across several Copilot surfaces, but GitHub still marks prompt files as public preview.

The repository already tracks \`.prompt\` and \`system_prompt.txt\` as broader prompt asset patterns. Keep Copilot's path-specific format as a candidate until the format stabilizes or another tool adopts it.

- Docs: [GitHub Copilot customization cheat sheet](https://docs.github.com/en/copilot/reference/customization-cheat-sheet)
- Status: [GitHub Copilot response customization](https://docs.github.com/en/copilot/concepts/prompting/response-customization)
`,
  },
  {
    file: 'conventions/runtime-guardrails.md',
    title: 'Runtime and Guardrails',
    position: 2,
    body: `# Runtime and Guardrails

Runtime and guardrail files control what an agent should avoid, how it should stage work, and what state is safe to carry across a task.

## Accepted Conventions in This Registry

- \`.aiignore\` limits which files and folders agents should read or touch.
- \`PLAN.md\` captures proposed execution before changes are made.
- Tool-specific rule files can encode project guardrails for Cursor, Cline, Roo, Copilot, and similar agents.

## Candidate Patterns

Files such as \`TOOLS.md\`, \`GUARDRAILS.md\`, and \`STATE.md\` are useful internal templates in some teams, but they are not listed as standalone conventions until there is stronger public evidence of cross-tool adoption.
`,
  },
  {
    file: 'conventions/architecture-decisions.md',
    title: 'Architecture and Decisions',
    position: 9,
    body: `# Architecture and Decisions

Architecture files help agents understand system boundaries before modifying code.

## Related Existing Conventions

- Memory Bank files such as \`systemArchitecture.md\` can document system structure for long-running agents.
- \`DESIGN.md\` documents visual architecture for product UI.
- \`PLAN.md\` can capture architectural implementation decisions for a specific task.

## Candidate Patterns

Generic files such as \`ARCHITECTURE.md\`, \`DECISIONS.md\`, and ADR folders are valuable for human engineering teams, but this registry only lists them as AI conventions when there is clear evidence of agent-specific standardization.
`,
  },
];

function titleCase(value) {
  return value
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function slugify(value) {
  return value
    .replace(/\\/g, '/')
    .split('/')
    .map((part) =>
      part
        .replace(/^\.+/, '')
        .replace(/[^a-zA-Z0-9._-]+/g, '-')
        .replace(/^-+|-+$/g, '') || 'file',
    )
    .join('/');
}

function frontMatter(title, position) {
  const positionLine = position ? `sidebar_position: ${position}\n` : '';
  return `---\ntitle: ${JSON.stringify(title)}\n${positionLine}---\n\n`;
}

function rewriteReadmeLinks(markdown) {
  return markdown
    .replace(/\]\(examples\/README\.md\)/g, '](/docs/examples)')
    .replace(/\]\(LICENSE\)/g, '](https://github.com/guilhermealbert/awesome-ai-conventions/blob/main/LICENSE)')
    .replace(/\]\(CONTRIBUTING\.md\)/g, '](https://github.com/guilhermealbert/awesome-ai-conventions/blob/main/CONTRIBUTING.md)');
}

function extractSection(markdown, heading) {
  const pattern = new RegExp(`^## ${heading.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s*$`, 'm');
  const match = markdown.match(pattern);
  if (!match || match.index === undefined) {
    throw new Error(`Missing README section: ${heading}`);
  }

  const start = match.index;
  const next = markdown.slice(start + match[0].length).search(/^## /m);
  if (next === -1) {
    return markdown.slice(start).trim();
  }

  return markdown.slice(start, start + match[0].length + next).trim();
}

function languageFor(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (ext === '.md' || ext === '.mdx') return 'markdown';
  if (ext === '.json') return 'json';
  if (ext === '.yaml' || ext === '.yml') return 'yaml';
  if (ext === '.txt' || ext === '.prompt') return 'text';
  if (ext === '.sh') return 'bash';
  if (ext === '.mdc') return 'markdown';
  return 'text';
}

function outputPathForExample(relativePath) {
  const parsed = path.posix.parse(slugify(relativePath));
  const directory = parsed.dir ? `${parsed.dir}/` : '';
  const baseName = parsed.name || parsed.base || 'file';
  return `${directory}${baseName}.md`;
}

function routePathForGeneratedExample(outputRelative) {
  const parsed = path.posix.parse(outputRelative);
  const parentName = path.posix.basename(parsed.dir);

  if (parentName && parentName === parsed.name) {
    return parsed.dir;
  }

  return outputRelative.replace(/\.md$/, '');
}

function fenceFor(content) {
  const matches = content.match(/`{3,}/g) ?? [];
  const longest = matches.reduce((max, item) => Math.max(max, item.length), 3);
  return '`'.repeat(longest + 1);
}

async function listFiles(dir) {
  const entries = await fs.readdir(dir, {withFileTypes: true});
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await listFiles(fullPath)));
    } else if (entry.isFile()) {
      files.push(fullPath);
    }
  }

  return files.sort((a, b) => a.localeCompare(b));
}

async function resetGeneratedExamples() {
  await fs.rm(generatedExamplesDir, {recursive: true, force: true});
  await fs.mkdir(generatedExamplesDir, {recursive: true});
  await fs.writeFile(
    path.join(generatedExamplesDir, '_category_.json'),
    JSON.stringify({label: 'Generated Examples', position: 2}, null, 2) + '\n',
  );
}

async function writeManualDocs(readme) {
  await fs.mkdir(docsDir, {recursive: true});
  await fs.mkdir(conventionsDir, {recursive: true});

  for (const page of manualPages) {
    await fs.writeFile(
      path.join(docsDir, page.file),
      frontMatter(page.title, page.position) + page.body.trim() + '\n',
    );
  }

  await fs.writeFile(
    path.join(docsDir, 'readme.md'),
    frontMatter('README Mirror', 2) + rewriteReadmeLinks(readme).trim() + '\n',
  );

  for (const page of sectionPages) {
    const section = extractSection(readme, page.heading);
    const body = `# ${page.title}

> ${page.description}

## How To Evaluate Entries

Each entry in this family should make the following points clear:

- What the convention is.
- Where the file, URL, or protocol surface normally lives.
- When a team should use it.
- Adoption evidence from a public spec, canonical docs, or active ecosystem use.
- Which example illustrates the convention, if one exists.
- Related conventions that solve adjacent problems.

## Registry Entries

${section.replace(/^## .+$/m, '').trim()}
`;

    await fs.writeFile(
      path.join(conventionsDir, `${page.id}.md`),
      frontMatter(page.title, page.position) + rewriteReadmeLinks(body).trim() + '\n',
    );
  }
}

async function writeExamples() {
  await resetGeneratedExamples();
  const files = await listFiles(repoExamplesDir);
  const generated = [];

  for (const file of files) {
    const relativePath = path.relative(repoExamplesDir, file);
    if (relativePath === 'README.md') continue;

    const normalized = relativePath.split(path.sep).join('/');
    const outputRelative = outputPathForExample(normalized);
    const outputPath = path.join(generatedExamplesDir, outputRelative);
    const content = await fs.readFile(file, 'utf8');
    const fence = fenceFor(content);
    const title = normalized;
    const body = `${frontMatter(title)}
# \`${normalized}\`

Source: \`examples/${normalized}\`

## When To Use This Example

Use this page as a concrete starting point when the file path and convention type match your project. Treat the content as a reference shape, not as a mandatory template.

## How To Adapt It

- Keep fields that describe real project behavior.
- Remove placeholders that do not apply to your repository.
- Prefer short, explicit instructions over broad policy language.
- Link the adapted file back to the convention it supports when possible.

## Source File

${fence}${languageFor(normalized)}
${content.replace(/\s+$/g, '')}
${fence}
`;

    await fs.mkdir(path.dirname(outputPath), {recursive: true});
    await fs.writeFile(outputPath, body);
    generated.push({title, docPath: `generated/${routePathForGeneratedExample(outputRelative)}`});
  }

  const indexList = generated
    .map((item) => `- [\`${item.title}\`](/docs/examples/${item.docPath})`)
    .join('\n');

  await fs.writeFile(
    path.join(examplesDir, 'index.md'),
    `${frontMatter('Examples', 1)}# Examples

Every page below is generated from the repository's \`examples/**\` files. Edit the source example, then run \`npm run generate\` from \`docs/\` to refresh this section.

## How To Use These Examples

- Copy examples as starting points, not as universal templates.
- Keep only fields that are true for your project.
- Prefer the shortest useful file before adding team-specific policy.
- Update the source file in \`examples/**\`; generated docs are overwritten.

${indexList}
`,
  );
}

const llmPages = [
  ['intro', 'Introduction', 'Project scope and entry points.'],
  [
    'harness-engineering',
    'Harness Engineering',
    'How context, tools, control loops, safety, evaluation, and observability compose around an agent run.',
  ],
  [
    'layers',
    'Layers',
    'Conceptual map of instruction, context, execution, evaluation, observability, discoverability, and interoperability layers.',
  ],
  ['decision_guide', 'Decision Guide', 'How to choose the smallest convention for a project need.'],
  ['methodology', 'Methodology', 'Inclusion criteria, evidence levels, updates, and removals.'],
  [
    'status_taxonomy',
    'Status Taxonomy',
    'Accepted, candidate, watchlist, legacy, and deprecated maturity labels.',
  ],
  [
    'emerging_patterns',
    'Emerging Patterns',
    'Public conventions that still need adoption or specification evidence.',
  ],
  ['maintainers', 'For Maintainers', 'Practical guidance for maintaining an agent-ready registry.'],
  [
    'conventions/project-context-files',
    'Project Context Files',
    'Repository-root files that teach coding agents how to work inside a project.',
  ],
  [
    'conventions/runtime-guardrails',
    'Runtime and Guardrails',
    'Files and policies for scope, staged work, and safe execution.',
  ],
  ['conventions/prompt-assets', 'Prompt Assets', 'Versioned prompt files and formats.'],
  ['conventions/agent-skills', 'Agent Skills', 'On-demand capability files and skill registries.'],
  [
    'conventions/design-ui',
    'Design and UI',
    'Machine-readable design guidance for interface-generating agents.',
  ],
  [
    'conventions/evaluation-testing',
    'Evaluation and Testing',
    'Version-controlled evaluation files for agent behavior.',
  ],
  [
    'conventions/observability-tracing',
    'Observability and Tracing',
    'Semantic conventions for model, agent, tool, guardrail, and evaluation telemetry.',
  ],
  [
    'conventions/discoverability',
    'Web and LLM Discoverability',
    'Predictable public files and URLs for model clients.',
  ],
  ['conventions/protocols', 'Protocols', 'MCP, A2A, and ACP interoperability boundaries.'],
  ['examples', 'Examples', 'Generated pages for copyable convention files.'],
];

export function renderLlmsDocuments() {
  const pageLine = ([id, title, description]) =>
    `- [${title}](${siteDocsUrl}/${id}): ${description}`;
  const startHere = llmPages.slice(0, 8).map(pageLine).join('\n');
  const families = llmPages.slice(8, 17).map(pageLine).join('\n');
  const fullMap = llmPages
    .map(
      ([id, title, description]) =>
        `### ${title}\n\n${description}\n\nURL: ${siteDocsUrl}/${id}`,
    )
    .join('\n\n');

  const concise = `# Awesome AI Conventions

> A curated registry of file-based conventions and open protocols for AI-agent-ready projects.

## Start Here

${startHere}

## Core Convention Families

${families}

## Full Snapshot

- [llms-full.txt](https://guilhermealbert.github.io/awesome-ai-conventions/llms-full.txt): Compact Markdown snapshot of the main docs.
`;
  const full = `# Awesome AI Conventions Full Docs Snapshot

> A compact Markdown map of the documentation for LLM retrieval.

## Project Scope

Awesome AI Conventions tracks file-based conventions, predictable public paths, manifests, and open protocols that help humans, codebases, AI agents, and model clients communicate with less ambiguity.

The registry covers conventions with public documentation, a canonical repository, a specification, or clear production use. Frameworks, SaaS products, private templates, and standalone libraries fall outside that scope.

## Documentation Map

${fullMap}
`;

  return {concise, full};
}

async function writeLlmsFiles() {
  const {concise, full} = renderLlmsDocuments();

  await fs.mkdir(staticDir, {recursive: true});
  await Promise.all([
    fs.writeFile(path.join(staticDir, 'llms.txt'), concise),
    fs.writeFile(path.join(staticDir, 'llms-full.txt'), full),
  ]);
}

async function main() {
  const readme = await fs.readFile(rootReadmePath, 'utf8');
  await writeManualDocs(readme);
  await writeExamples();
  await writeLlmsFiles();
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
}
