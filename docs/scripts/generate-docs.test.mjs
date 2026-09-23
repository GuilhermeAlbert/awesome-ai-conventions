import assert from 'node:assert/strict';
import test from 'node:test';

import {renderLlmsDocuments} from './generate-docs.mjs';

test('renders core and emerging routes in both LLM discovery files', () => {
  const {concise, full} = renderLlmsDocuments();

  for (const route of [
    'harness-engineering',
    'emerging_patterns',
    'conventions/observability-tracing',
  ]) {
    assert.match(concise, new RegExp(route));
    assert.match(full, new RegExp(route));
  }
});

test('renders each LLM discovery file with exactly one trailing newline', () => {
  const {concise, full} = renderLlmsDocuments();

  assert.match(concise, /[^\n]\n$/);
  assert.doesNotMatch(concise, /\n\n$/);
  assert.match(full, /[^\n]\n$/);
  assert.doesNotMatch(full, /\n\n$/);
});

test('renders the Awesome Agent Standards identity and canonical site URL', () => {
  const {concise, full} = renderLlmsDocuments();

  for (const document of [concise, full]) {
    assert.match(document, /Awesome Agent Standards/);
    assert.match(document, /https:\/\/guilhermealbert\.github\.io\/awesome-agent-standards\//);
    assert.doesNotMatch(document, /Awesome AI Conventions/);
    assert.doesNotMatch(document, /awesome-ai-conventions/);
  }
});
