import { AlertItem, AlertSeverity, AlertScope, ModuleId } from '../types';
import { audioService } from './audioService';

type AlertListener = (alerts: AlertItem[]) => void;

class AlertService {
  private alerts: AlertItem[] = [
    {
      id: 'alert-001',
      title: '🚨 URGENTE: Flutuação de Pressão no Reservatório Hídrico',
      message: 'Detectada variação de pressão nas estufas do Módulo Recursos. Ação imediata solicitada para manutenção preventivo-corretiva.',
      severity: 'urgent',
      scope: 'central',
      targetModule: 'recursos',
      timestamp: new Date(Date.now() - 5 * 60000).toISOString(),
      requiresConfirmation: true,
      confirmed: false,
      createdBy: 'Sistema Central NÓS S.A.'
    },
    {
      id: 'alert-002',
      title: '🟡 Atenção: Manutenção Programada na Rede Solar',
      message: 'Painéis da ala Leste passarão por calibração óptica às 18:00. O suprimento permanecerá estável via baterias centrais.',
      severity: 'warning',
      scope: 'central',
      targetModule: 'recursos',
      timestamp: new Date(Date.now() - 25 * 60000).toISOString(),
      requiresConfirmation: false,
      confirmed: true,
      createdBy: 'Engenharia Energética'
    },
    {
      id: 'alert-003',
      title: '🔵 Importante: Atualização do Protocolo de Triagem',
      message: 'O Módulo Segurança & Saúde implementou novos procedimentos de bem-estar comunitário com resposta expressa.',
      severity: 'important',
      scope: 'central',
      targetModule: 'saude',
      timestamp: new Date(Date.now() - 60 * 60000).toISOString(),
      requiresConfirmation: false,
      confirmed: true,
      createdBy: 'Diretoria de Saúde'
    },
    {
      id: 'alert-004',
      title: '🟢 Geral: Feira Agroecológica na Praça do Marketplace',
      message: 'Expositores locais apresentarão novas colheitas hidropônicas nesta tarde. Venha prestigiar os produtores da comunidade.',
      severity: 'general',
      scope: 'central',
      targetModule: 'marketplace',
      timestamp: new Date(Date.now() - 120 * 60000).toISOString(),
      requiresConfirmation: false,
      confirmed: true,
      createdBy: 'Conselho de Convivência'
    },
    {
      id: 'alert-005',
      title: '📱 Holograma Pessoal: Diagnóstico Residencial OK',
      message: 'Sua unidade habitacional apresenta 99.4% de eficiência energética e excelente qualidade do ar interno.',
      severity: 'general',
      scope: 'personal',
      targetModule: 'habitacional',
      timestamp: new Date(Date.now() - 15 * 60000).toISOString(),
      requiresConfirmation: false,
      confirmed: true,
      createdBy: 'Assistente Habitacional UNO'
    }
  ];

  private listeners: AlertListener[] = [];

  getAlerts(): AlertItem[] {
    return [...this.alerts];
  }

  getUnconfirmedUrgentAlert(): AlertItem | undefined {
    return this.alerts.find(a => a.severity === 'urgent' && !a.confirmed);
  }

  subscribe(listener: AlertListener): () => void {
    this.listeners.push(listener);
    listener([...this.alerts]);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  private notify() {
    this.listeners.forEach(l => l([...this.alerts]));
  }

  createAlert(data: {
    title: string;
    message: string;
    severity: AlertSeverity;
    scope?: AlertScope;
    targetModule?: ModuleId;
    createdBy?: string;
  }): AlertItem {
    const newAlert: AlertItem = {
      id: 'alert-' + Date.now(),
      title: data.title,
      message: data.message,
      severity: data.severity,
      scope: data.scope || 'central',
      targetModule: data.targetModule,
      timestamp: new Date().toISOString(),
      requiresConfirmation: data.severity === 'urgent',
      confirmed: false,
      createdBy: data.createdBy || 'Operador NÓS S.A.'
    };

    this.alerts.unshift(newAlert);
    audioService.playNotificationSound(newAlert.severity);
    this.notify();
    return newAlert;
  }

  confirmAlert(alertId: string, confirmedBy: string = 'Usuário Atual') {
    const alert = this.alerts.find(a => a.id === alertId);
    if (alert) {
      alert.confirmed = true;
      alert.confirmedAt = new Date().toISOString();
      if (!alert.confirmedBy) alert.confirmedBy = [];
      alert.confirmedBy.push(confirmedBy);
      this.notify();
    }
  }
}

export const alertService = new AlertService();
