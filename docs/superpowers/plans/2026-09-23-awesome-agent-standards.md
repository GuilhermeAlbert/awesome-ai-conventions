# Awesome Agent Standards Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rename the repository and documentation to Awesome Agent Standards while making each entry's type and maturity explicit.

**Architecture:** Keep `README.md` as the registry source of truth. Update the Docusaurus generator and site configuration before regenerating derived pages and LLM discovery files. Apply two separate labels to entries: kind describes what an item is, while the existing status taxonomy describes how mature it is.

**Tech Stack:** Markdown, Docusaurus 3, TypeScript, Node.js test runner, GitHub CLI, GitHub Pages

---

## File map

- `README.md`: public registry title, description, classification legend, and entries.
- `CONTRIBUTING.md`: inclusion and classification guidance for contributors.
- `.github/PULL_REQUEST_TEMPLATE.md`: checklist for kind and status evidence.
- `.github/ISSUE_TEMPLATE/suggest.md`: fields for proposing and classifying an entry.
- `docs/package.json`: documentation package identity.
- `docs/package-lock.json`: lockfile copy of the package identity.
- `docs/docusaurus.config.ts`: site title, description, base URL, repository links, and footer.
- `docs/src/pages/index.tsx`: landing page title and positioning.
- `docs/static/img/logo.svg`: accessible project name.
- `docs/scripts/generate-docs.mjs`: generated page prose, canonical links, and LLM discovery content.
- `docs/scripts/generate-docs.test.mjs`: regression coverage for the public identity and canonical URLs.
- `docs/docs/status_taxonomy.md`: distinction between item kind and maturity status.
- `docs/docs/methodology.md`: evidence and classification process.
- `docs/sidebars.ts`: navigation label for the registry families.
- `docs/docs/**`: generated documentation output.
- `docs/static/llms.txt`: generated concise LLM index.
- `docs/static/llms-full.txt`: generated full LLM snapshot.

### Task 1: Rename the GitHub repository and align the branch

**Files:**
- Modify: GitHub repository `GuilhermeAlbert/awesome-ai-conventions`
- Modify: local Git remote `origin`
- Preserve: branch `docs-editorial-and-standards`

- [ ] **Step 1: Record the current branch and working tree**

Run:

```bash
git status --short --branch
git log -3 --oneline
```

Expected: branch `docs-editorial-and-standards`, no uncommitted files, and the design commit at `HEAD`.

- [ ] **Step 2: Rename the GitHub repository**

Run:

```bash
gh api --method PATCH repos/GuilhermeAlbert/awesome-ai-conventions \
  -f name=awesome-agent-standards \
  -f description='A curated index of standards, protocols, conventions, and emerging patterns for AI agents.'
```

Expected: JSON response contains `"full_name": "GuilhermeAlbert/awesome-agent-standards"`.

- [ ] **Step 3: Update GitHub topics and homepage**

Run:

```bash
gh repo edit GuilhermeAlbert/awesome-agent-standards \
  --description 'A curated index of standards, protocols, conventions, and emerging patterns for AI agents.' \
  --homepage 'https://guilhermealbert.github.io/awesome-agent-standards/' \
  --add-topic ai-agents \
  --add-topic agents \
  --add-topic standards \
  --add-topic protocols \
  --add-topic awesome-list
```

Expected: command exits with status 0.

- [ ] **Step 4: Point the local checkout at the new URL**

Run:

```bash
git remote set-url origin https://github.com/GuilhermeAlbert/awesome-agent-standards.git
git remote -v
```

Expected: fetch and push URLs use `awesome-agent-standards.git`.

- [ ] **Step 5: Confirm the rename and redirect**

Run:

```bash
gh repo view GuilhermeAlbert/awesome-agent-standards --json nameWithOwner,description,homepageUrl,url
curl -sI https://github.com/GuilhermeAlbert/awesome-ai-conventions
```

Expected: the repository view shows the new identity. The old URL returns a GitHub redirect or resolves to the renamed repository.

- [ ] **Step 6: Reconcile the feature branch with current `main`**

Run:

```bash
git fetch origin
git merge origin/main
```

Expected: the merge completes without losing the existing README and documentation commits. Resolve only genuine content conflicts and retain the newer factual wording from `docs-editorial-and-standards`.

### Task 2: Add identity regression tests

**Files:**
- Modify: `docs/scripts/generate-docs.mjs`
- Modify: `docs/scripts/generate-docs.test.mjs`

- [ ] **Step 1: Write a failing test for the new public identity**

Add this test to `docs/scripts/generate-docs.test.mjs`:

```js
test('renders the Awesome Agent Standards identity and canonical site URL', () => {
  const {concise, full} = renderLlmsDocuments();

  for (const document of [concise, full]) {
    assert.match(document, /Awesome Agent Standards/);
    assert.match(document, /https:\/\/guilhermealbert\.github\.io\/awesome-agent-standards\//);
    assert.doesNotMatch(document, /Awesome AI Conventions/);
    assert.doesNotMatch(document, /awesome-ai-conventions/);
  }
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run:

```bash
cd docs
npm test
```

Expected: the new test fails because generated strings still use `Awesome AI Conventions` and `/awesome-ai-conventions/`.

- [ ] **Step 3: Replace generator identity constants and prose**

In `docs/scripts/generate-docs.mjs`, use:

```js
const siteRootUrl = 'https://guilhermealbert.github.io/awesome-agent-standards';
const siteDocsUrl = `${siteRootUrl}/docs`;
const repositoryUrl = 'https://github.com/guilhermealbert/awesome-agent-standards';
```

Update `rewriteReadmeLinks()` to build `LICENSE` and `CONTRIBUTING.md` links from `repositoryUrl`. Replace generated headings with `Awesome Agent Standards`. Use this scope sentence in the full snapshot:

```text
Awesome Agent Standards tracks standards, protocols, conventions, and emerging patterns that help AI agents work across repositories, tools, clients, and services.
```

Use this description in the concise snapshot:

```text
A curated index of standards, protocols, conventions, and emerging patterns for AI agents.
```

- [ ] **Step 4: Run the tests to verify they pass**

Run:

```bash
npm test
```

Expected: all generator tests pass.

- [ ] **Step 5: Commit the generator contract**

Run:

```bash
git add docs/scripts/generate-docs.mjs docs/scripts/generate-docs.test.mjs
git commit -m "test: lock Awesome Agent Standards identity"
```

### Task 3: Update the registry position and classification model

**Files:**
- Modify: `README.md`
- Modify: `CONTRIBUTING.md`
- Modify: `.github/PULL_REQUEST_TEMPLATE.md`
- Modify: `.github/ISSUE_TEMPLATE/suggest.md`
- Modify: `docs/docs/status_taxonomy.md`
- Modify: `docs/docs/methodology.md`

- [ ] **Step 1: Replace the README identity**

Use this opening in `README.md`:

```markdown
# Awesome Agent Standards [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> A curated index of standards, protocols, conventions, and emerging patterns for AI agents.

This registry tracks the files, formats, and protocols that agents use to read project context, share capabilities, coordinate work, and interact with tools.
```

- [ ] **Step 2: Add the classification legend to the README**

Add `Classification` to the contents and place this section before the registry families:

```markdown
## Classification

Each entry has a kind and a maturity status.

| Kind | Meaning |
| --- | --- |
| Standard | A published specification with defined structure or behavior. |
| Protocol | A specification for communication or interoperability. |
| Convention | An adopted practice without a formal standards process. |
| Emerging | A recent proposal or pattern whose adoption is still developing. |

The documentation tracks maturity separately as accepted, candidate, watchlist, legacy, or deprecated. Inclusion records evidence and adoption. It is not an endorsement.
```

- [ ] **Step 3: Define contribution fields without overstating adoption**

Update `CONTRIBUTING.md` so a proposal identifies:

```markdown
## Classifying an entry

Choose the kind that describes the entry itself:

- `Standard` for a published specification with defined structure or behavior.
- `Protocol` for communication or interoperability rules.
- `Convention` for an adopted practice without a formal standards process.
- `Emerging` for a public proposal or pattern that still needs adoption evidence.

Kind and maturity are separate. The documentation uses `accepted`, `candidate`, `watchlist`, `legacy`, and `deprecated` to record maturity.
```

Allow emerging entries in the documentation when they have a public source and a concrete review question. Keep the main README bar for accepted entries.

- [ ] **Step 4: Add classification fields to contributor templates**

Add these fields to both the suggestion issue and pull request template:

```markdown
## Classification

- Kind: Standard / Protocol / Convention / Emerging
- Maturity: Accepted / Candidate / Watchlist / Legacy / Deprecated
```

Keep the existing evidence and primary-source questions.

- [ ] **Step 5: Separate kind from maturity in the methodology**

Add this wording to `docs/docs/status_taxonomy.md`:

```markdown
Kind and maturity answer different questions. `Standard`, `Protocol`, `Convention`, and `Emerging` describe what an entry is. The statuses on this page describe how much evidence and stability it has.
```

Add the same distinction to `docs/docs/methodology.md`, then update its entry shape so each proposal answers `What kind is it?` and `What is its maturity status?`.

- [ ] **Step 6: Check the edited prose**

Run:

```bash
rg -n '—|delve|leverage|robust|cutting-edge|game changer|rapidly adopted|industry standard' README.md CONTRIBUTING.md .github/PULL_REQUEST_TEMPLATE.md .github/ISSUE_TEMPLATE/suggest.md docs/docs/status_taxonomy.md docs/docs/methodology.md
```

Expected: no matches except quoted terms that are explicitly presented as wording to avoid.

- [ ] **Step 7: Commit the classification model**

Run:

```bash
git add README.md CONTRIBUTING.md .github/PULL_REQUEST_TEMPLATE.md .github/ISSUE_TEMPLATE/suggest.md docs/docs/status_taxonomy.md docs/docs/methodology.md
git commit -m "docs: position registry around agent standards"
```

### Task 4: Rename the documentation site

**Files:**
- Modify: `docs/package.json`
- Modify: `docs/package-lock.json`
- Modify: `docs/docusaurus.config.ts`
- Modify: `docs/src/pages/index.tsx`
- Modify: `docs/static/img/logo.svg`
- Modify: `docs/sidebars.ts`
- Modify: `docs/scripts/generate-docs.mjs`

- [ ] **Step 1: Update the package identity**

Set the `name` in `docs/package.json` and both matching fields in `docs/package-lock.json` to:

```json
"name": "awesome-agent-standards-docs"
```

- [ ] **Step 2: Update Docusaurus configuration**

Use these values in `docs/docusaurus.config.ts`:

```ts
title: 'Awesome Agent Standards',
tagline: 'Standards, protocols, conventions, and emerging patterns for AI agents.',
baseUrl: '/awesome-agent-standards/',
projectName: 'awesome-agent-standards',
```

Replace repository links with `https://github.com/guilhermealbert/awesome-agent-standards`, set navbar text and logo alt text to `Awesome Agent Standards`, and use the approved description for metadata.

- [ ] **Step 3: Update the landing page**

In `docs/src/pages/index.tsx`, use:

```tsx
<Layout
  title="Awesome Agent Standards"
  description="A curated index of standards, protocols, conventions, and emerging patterns for AI agents.">
```

Set the heading to `Awesome Agent Standards`, the eyebrow to `Curated index for AI agents`, and the lead to:

```text
Standards, protocols, conventions, and emerging patterns for building agents that work across tools and repositories.
```

Change the first metric label from `convention families` to `registry families`.

- [ ] **Step 4: Update visible navigation and accessible names**

Change the sidebar category label from `Conventions` to `Registry`. Change the SVG `aria-label` to `Awesome Agent Standards`.

- [ ] **Step 5: Update generated introductory prose**

In the `manualPages` definitions inside `docs/scripts/generate-docs.mjs`:

- Rename the introduction to `Awesome Agent Standards`.
- Replace `AI conventions` in the layers page with `Agent standards and conventions`.
- Keep generic uses of `convention` when they describe the technical category rather than the former project name.
- Replace the architecture page phrase `AI conventions` with `agent standards or conventions`.

- [ ] **Step 6: Run package and generator tests**

Run:

```bash
cd docs
npm test
```

Expected: all tests pass.

- [ ] **Step 7: Commit the site identity**

Run:

```bash
git add docs/package.json docs/package-lock.json docs/docusaurus.config.ts docs/src/pages/index.tsx docs/static/img/logo.svg docs/sidebars.ts docs/scripts/generate-docs.mjs
git commit -m "docs: rename site to Awesome Agent Standards"
```

### Task 5: Regenerate derived documentation

**Files:**
- Modify: `docs/docs/intro.md`
- Modify: `docs/docs/layers.md`
- Modify: `docs/docs/readme.md`
- Modify: `docs/docs/conventions/*.md`
- Modify: `docs/docs/examples/generated/**`
- Modify: `docs/static/llms.txt`
- Modify: `docs/static/llms-full.txt`

- [ ] **Step 1: Regenerate all derived files**

Run:

```bash
cd docs
npm run generate
```

Expected: command exits with status 0 and refreshes manual pages, the README mirror, example pages, and both LLM discovery files.

- [ ] **Step 2: Verify the old public identity is gone**

Run from the repository root:

```bash
rg --no-ignore -n 'Awesome AI Conventions|awesome-ai-conventions' . \
  --glob '!.git/**' \
  --glob '!docs/node_modules/**' \
  --glob '!docs/build/**' \
  --glob '!docs/.docusaurus/**' \
  --glob '!docs/superpowers/specs/**' \
  --glob '!docs/superpowers/plans/**'
```

Expected: no matches. The specification and implementation plan are excluded because they record the migration from the old name.

- [ ] **Step 3: Verify edited prose contains no em dashes**

Run:

```bash
rg --no-ignore -n '—' README.md CONTRIBUTING.md .github docs/docs docs/src docs/scripts docs/static \
  --glob '!docs/superpowers/**'
```

Expected: no matches.

- [ ] **Step 4: Review generated changes for accidental rewrites**

Run:

```bash
git diff --stat
git diff -- README.md CONTRIBUTING.md docs/docs/intro.md docs/docs/readme.md docs/static/llms.txt docs/static/llms-full.txt
```

Expected: changes reflect the approved identity, classification model, and generator output. Technical claims and primary-source links remain intact.

- [ ] **Step 5: Commit generated files**

Run:

```bash
git add docs/docs docs/static/llms.txt docs/static/llms-full.txt
git commit -m "docs: regenerate site for renamed registry"
```

### Task 6: Validate the complete repository

**Files:**
- Verify: all modified files

- [ ] **Step 1: Run documentation tests**

Run:

```bash
cd docs
npm test
```

Expected: all tests pass.

- [ ] **Step 2: Build the Docusaurus site**

Run:

```bash
npm run build
```

Expected: Docusaurus completes with no broken-link error and writes `docs/build`.

- [ ] **Step 3: Run the Awesome List linter**

Run from the repository root:

```bash
npx --yes awesome-lint
```

Expected: the linter exits with status 0. If the classification table violates Awesome List formatting rules, keep the content and adjust only the table placement or Markdown shape required by the linter.

- [ ] **Step 4: Run final textual checks**

Run:

```bash
git diff --check
rg --no-ignore -n 'Awesome AI Conventions|awesome-ai-conventions|—' . \
  --glob '!.git/**' \
  --glob '!docs/node_modules/**' \
  --glob '!docs/build/**' \
  --glob '!docs/.docusaurus/**' \
  --glob '!docs/superpowers/**'
```

Expected: `git diff --check` is clean and the search returns no matches.

- [ ] **Step 5: Confirm branch scope**

Run:

```bash
git status --short
git diff origin/main...HEAD --stat
git log --oneline origin/main..HEAD
```

Expected: no uncommitted changes. The diff contains the earlier documentation work, the rename, classification updates, generated files, and tests.

### Task 7: Publish the change for review

**Files:**
- Modify: remote branch `docs-editorial-and-standards`
- Create or update: GitHub pull request against `main`

- [ ] **Step 1: Push the branch to the renamed repository**

Run:

```bash
git push -u origin docs-editorial-and-standards
```

Expected: the branch is available on `GuilhermeAlbert/awesome-agent-standards`.

- [ ] **Step 2: Create or update the pull request**

If no open PR targets `main`, run:

```bash
gh pr create \
  --base main \
  --head docs-editorial-and-standards \
  --title 'Rename project to Awesome Agent Standards' \
  --body 'Renames the registry and repository, adds kind classification for standards, protocols, conventions, and emerging patterns, updates the documentation site, and regenerates derived files. Validation: npm test, npm run build, awesome-lint.'
```

If a PR already exists, update its title and body with `gh pr edit` using the same text.

Expected: GitHub returns the pull request URL.

- [ ] **Step 3: Confirm automated checks**

Run:

```bash
gh pr checks --watch
```

Expected: all required checks pass. Record any unavailable optional check without claiming it passed.
