import assert from 'node:assert/strict';
import test from 'node:test';

import {renderLlmsDocuments} from './generate-docs.mjs';

test('renders harness and observability routes in both LLM discovery files', () => {
  const {concise, full} = renderLlmsDocuments();

  for (const route of ['harness-engineering', 'conventions/observability-tracing']) {
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
