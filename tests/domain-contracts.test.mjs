import test from 'node:test';
import assert from 'node:assert/strict';
import {
  canTransitionCatalogStatus,
  getCatalogPublicationIssues,
  isServiceActivationActive
} from '../src/domain/catalog.ts';
import { UNO_PANELS, PANEL_SCOPE_KEYS } from '../src/domain/panels.ts';
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
  assert.equal(UNO_PANELS.length, 6);
  assert.ok(UNO_PANELS.every((panel) => panel.defaultAccess === 'deny'));
  assert.ok(UNO_PANELS.every((panel) => panel.subAreas.length > 0));
  assert.ok(UNO_PANELS.find((panel) => panel.id === 'accounting_finance')?.subAreas.includes('Gestão operacional Stripe'));
  assert.deepEqual(UNO_PANELS.map((panel) => panel.requiredScope), [...PANEL_SCOPE_KEYS]);
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

import {
  EOU_VOLUMES,
  getVolumesRequiringFounderDecision
} from '../src/domain/volumes.ts';

test('EOU registry contains exactly 40 uniquely numbered volumes', () => {
  assert.equal(EOU_VOLUMES.length, 40);
  assert.deepEqual(
    EOU_VOLUMES.map((volume) => volume.number),
    Array.from({ length: 40 }, (_, index) => index + 1)
  );
  assert.equal(new Set(EOU_VOLUMES.map((volume) => volume.id)).size, 40);
});

test('EOU registry uses confirmed V05/V06 names and preserves historical aliases', () => {
  assert.deepEqual(getVolumesRequiringFounderDecision(), []);
  assert.equal(EOU_VOLUMES.find((volume) => volume.id === 'V05')?.name, 'Oficina Mestre');
  assert.equal(EOU_VOLUMES.find((volume) => volume.id === 'V05')?.legacyName, 'Ordem de Missão');
  assert.equal(EOU_VOLUMES.find((volume) => volume.id === 'V06')?.name, 'Centro de Operações');
  assert.equal(EOU_VOLUMES.find((volume) => volume.id === 'V06')?.legacyName, 'Conhecimento Organizacional');
});
