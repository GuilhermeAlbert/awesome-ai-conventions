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
    id: 'discoverability',
    title: 'Web and LLM Discoverability',
    heading: 'Web and LLM discoverability',
    position: 7,
    description:
      'Files and well-known URLs that help LLMs discover docs, pricing, and APIs.',
  },
  {
    id: 'protocols',
    title: 'Protocols',
    heading: 'Protocols',
    position: 8,
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

The source of truth remains the repository root \`README.md\`. The Docusaurus site mirrors that registry into focused pages, adds navigation and local search, and generates browsable pages for every file under \`examples/**\`.

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
- Explore copyable files in [Examples](./examples/index.md).
`,
  },
  {
    file: 'layers.md',
    title: 'Layers',
    position: 3,
    body: `# Layers

AI conventions are easier to reason about when grouped by the role they play in an agent workflow.

## Instruction Layer

These files tell agents how to behave in a repository.

- \`AGENTS.md\`
- \`CLAUDE.md\`
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

## Evaluation Layer

These files make behavior testable and repeatable.

- \`EVAL.yaml\`

## Discoverability Layer

These files expose structured information to LLMs and API-aware clients.

- \`llms.txt\`
- \`llms-full.txt\`
- \`pricing.md\`
- \`/.well-known/ai-plugin.json\`

## Protocol Layer

These standards define interoperability between tools, models, and agents.

- Model Context Protocol
- Agent Cards / A2A
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

${indexList}
`,
  );
}

async function main() {
  const readme = await fs.readFile(rootReadmePath, 'utf8');
  await writeManualDocs(readme);
  await writeExamples();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
