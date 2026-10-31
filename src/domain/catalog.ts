/**
 * Shared domain contracts for UNO products, services and activations.
 *
 * These types describe catalog state only. They do not grant access, confirm
 * a supplier relationship, execute a payment, or activate a real service.
 */

export type CatalogOrigin = 'uno' | 'third_party';
export type CatalogKind = 'product' | 'service';

export type CatalogStatus =
  | 'draft'
  | 'in_review'
  | 'approved'
  | 'published'
  | 'available'
  | 'suspended'
  | 'unavailable'
  | 'archived';

export interface CatalogResponsibility {
  /** Legal or operational entity that is accountable for the offer. */
  responsibleEntityId: string;
  /** Entity that owns the product or provides the service. */
  providerEntityId: string;
  /** Intermediary/seller, when different from the provider. */
  sellerEntityId?: string;
}

export interface CatalogBase {
  id: string;
  kind: CatalogKind;
  origin: CatalogOrigin;
  title: string;
  summary: string;
  status: CatalogStatus;
  responsibility: CatalogResponsibility;
  /** Version of the terms shown to the person at the time of publication. */
  termsVersion?: string;
  /** External integration/provider reference; never a credential. */
  externalProviderId?: string;
  regionIds?: string[];
  createdAt: string;
  updatedAt: string;
}

export interface ProductCatalogItem extends CatalogBase {
  kind: 'product';
  sku?: string;
  priceAmount?: number;
  currency?: string;
  inventoryStatus?: 'in_stock' | 'limited' | 'out_of_stock' | 'not_applicable';
  fulfillmentMode?: 'delivery' | 'pickup' | 'digital' | 'third_party_fulfillment';
}

export interface ServiceCatalogItem extends CatalogBase {
  kind: 'service';
  categoryId: string;
  deliveryMode: 'in_person' | 'remote' | 'hybrid' | 'self_service';
  qualificationRequired: boolean;
  bookingRequired: boolean;
  priceAmount?: number;
  currency?: string;
  institutionId?: string;
  professionalId?: string;
}

export type CatalogItem = ProductCatalogItem | ServiceCatalogItem;

export type ServiceActivationStatus =
  | 'requested'
  | 'eligibility_review'
  | 'awaiting_payment'
  | 'awaiting_provider'
  | 'active'
  | 'paused'
  | 'completed'
  | 'cancelled'
  | 'rejected'
  | 'expired';

export interface ServiceActivation {
  id: string;
  serviceId: string;
  beneficiaryIdu: string;
  providerEntityId: string;
  status: ServiceActivationStatus;
  requestedAt: string;
  activatedAt?: string;
  completedAt?: string;
  /** Reference to a payment/contract record; never store card data here. */
  agreementReference?: string;
}

const CATALOG_TRANSITIONS: Record<CatalogStatus, readonly CatalogStatus[]> = {
  draft: ['in_review', 'archived'],
  in_review: ['draft', 'approved', 'archived'],
  approved: ['in_review', 'published', 'suspended', 'archived'],
  published: ['available', 'suspended', 'unavailable', 'archived'],
  available: ['suspended', 'unavailable', 'archived'],
  suspended: ['in_review', 'published', 'available', 'archived'],
  unavailable: ['in_review', 'published', 'available', 'archived'],
  archived: []
};

/** Pure transition check; the server must enforce the same rule. */
export function canTransitionCatalogStatus(
  current: CatalogStatus,
  next: CatalogStatus
): boolean {
  return CATALOG_TRANSITIONS[current].includes(next);
}

/**
 * Returns disclosure/validation issues before a catalog item can be published.
 * The caller decides presentation; backend validation remains authoritative.
 */
export function getCatalogPublicationIssues(item: CatalogItem): string[] {
  const issues: string[] = [];

  if (!item.id.trim()) issues.push('Identificador do item ausente.');
  if (!item.title.trim()) issues.push('Título do item ausente.');
  if (!item.summary.trim()) issues.push('Descrição do item ausente.');
  if (!item.responsibility.responsibleEntityId.trim()) {
    issues.push('Entidade responsável não identificada.');
  }
  if (!item.responsibility.providerEntityId.trim()) {
    issues.push('Fornecedor ou prestador não identificado.');
  }

  if (item.origin === 'third_party') {
    if (!item.externalProviderId?.trim()) {
      issues.push('Fornecedor externo precisa estar identificado no catálogo.');
    }
    if (!item.termsVersion?.trim()) {
      issues.push('Versão dos termos do terceiro precisa estar registrada.');
    }
  }

  if (item.kind === 'service' && !item.categoryId.trim()) {
    issues.push('Categoria do serviço ausente.');
  }

  if (item.status !== 'approved' && item.status !== 'published' && item.status !== 'available') {
    issues.push('O item ainda não está aprovado para publicação.');
  }

  return issues;
}

/** A listing is not an activation; only confirmed active records are active. */
export function isServiceActivationActive(
  activation: Pick<ServiceActivation, 'status'>
): boolean {
  return activation.status === 'active';
}
