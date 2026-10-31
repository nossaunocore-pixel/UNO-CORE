import test from 'node:test';
import assert from 'node:assert/strict';
import {
  canTransitionCatalogStatus,
  getCatalogPublicationIssues,
  isServiceActivationActive
} from '../src/domain/catalog.ts';
import { UNO_PANELS } from '../src/domain/panels.ts';
import { UNO_EXPERIENCE_AREAS } from '../src/domain/experiences.ts';

test('catalog transitions allow review and prevent restoring archived records', () => {
  assert.equal(canTransitionCatalogStatus('draft', 'in_review'), true);
  assert.equal(canTransitionCatalogStatus('approved', 'published'), true);
  assert.equal(canTransitionCatalogStatus('archived', 'published'), false);
});

test('third-party offers require provider and terms disclosure', () => {
  const item = {
    id: 'offer-1',
    kind: 'product',
    origin: 'third_party',
    title: 'Produto de terceiro',
    summary: 'Descrição pública',
    status: 'approved',
    responsibility: {
      responsibleEntityId: 'entity-uno',
      providerEntityId: 'provider-1'
    },
    createdAt: '2026-10-31T00:00:00.000Z',
    updatedAt: '2026-10-31T00:00:00.000Z'
  };

  const issues = getCatalogPublicationIssues(item);
  assert.ok(issues.some((issue) => issue.includes('Fornecedor externo')));
  assert.ok(issues.some((issue) => issue.includes('termos')));
});

test('own offers with complete responsibility can be published', () => {
  const item = {
    id: 'offer-2',
    kind: 'product',
    origin: 'uno',
    title: 'Produto UNO',
    summary: 'Descrição',
    status: 'approved',
    responsibility: {
      responsibleEntityId: 'uno',
      providerEntityId: 'uno'
    },
    createdAt: '2026-10-31T00:00:00.000Z',
    updatedAt: '2026-10-31T00:00:00.000Z'
  };

  assert.deepEqual(getCatalogPublicationIssues(item), []);
});

test('only confirmed active service activations count as active', () => {
  assert.equal(isServiceActivationActive({ status: 'active' }), true);
  assert.equal(isServiceActivationActive({ status: 'requested' }), false);
});

test('all UNO panels default to deny and declare independent scopes', () => {
  assert.equal(UNO_PANELS.length, 7);
  assert.ok(UNO_PANELS.every((panel) => panel.defaultAccess === 'deny'));
  assert.equal(new Set(UNO_PANELS.map((panel) => panel.requiredScope)).size, UNO_PANELS.length);
});

test('experience registry contains the founder-defined areas', () => {
  const ids = UNO_EXPERIENCE_AREAS.map((area) => area.id);
  for (const id of [
    'profile', 'home', 'work_income', 'institutions', 'community',
    'participation', 'leisure', 'showcase', 'services', 'active_services'
  ]) {
    assert.ok(ids.includes(id), `Missing experience area: ${id}`);
  }
});
