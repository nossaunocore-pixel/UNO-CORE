import { db, isRealFirebaseConnected } from './firebase';
import { 
  collection, 
  doc, 
  setDoc, 
  getDocs, 
  onSnapshot, 
  query, 
  orderBy, 
  where 
} from 'firebase/firestore';
import { AlertItem, ModuleId, UserProfile } from '../types';

export interface ModuleData {
  id: ModuleId;
  name: string;
  status: 'active' | 'maintenance' | 'optimal';
  lastUpdated: string;
  metrics: Record<string, string | number>;
}

class DatabaseService {
  // Collections names
  private COLLECTION_ALERTS = 'alertas';
  private COLLECTION_MODULES = 'modulos';
  private COLLECTION_USERS = 'usuarios';

  // Seed default module data
  private modulesStore: Record<ModuleId, ModuleData> = {
    centro: { id: 'centro', name: 'NÓS S.A. / UNO', status: 'optimal', lastUpdated: new Date().toISOString(), metrics: { consensus: '99.7%', activeAlerts: 1 } },
    habitacional: { id: 'habitacional', name: 'Habitacional', status: 'optimal', lastUpdated: new Date().toISOString(), metrics: { totalUnits: 140, powerEfficiency: '99.4%' } },
    producao: { id: 'producao', name: 'Produção / Trabalho', status: 'optimal', lastUpdated: new Date().toISOString(), metrics: { activeProjects: 8, cncOutput: '100%' } },
    recursos: { id: 'recursos', name: 'Recursos / Abastecimento', status: 'optimal', lastUpdated: new Date().toISOString(), metrics: { solarPower: '1.450 kW/h', waterLevel: '88.000 L' } },
    saude: { id: 'saude', name: 'Segurança & Saúde', status: 'optimal', lastUpdated: new Date().toISOString(), metrics: { healthScore: '99.2%', queueTime: '0 min' } },
    marketplace: { id: 'marketplace', name: 'Marketplace / Comércio', status: 'optimal', lastUpdated: new Date().toISOString(), metrics: { activeStalls: 18, tokenCredits: 1250 } },
    servicos: { id: 'servicos', name: 'Serviços Externos / Conexão', status: 'optimal', lastUpdated: new Date().toISOString(), metrics: { latencyMs: 12, meshCoverage: '100%' } },
  };

  async syncModuleToFirebase(moduleId: ModuleId, data: Partial<ModuleData>) {
    if (isRealFirebaseConnected && db) {
      try {
        const ref = doc(db, this.COLLECTION_MODULES, moduleId);
        await setDoc(ref, { ...data, updatedAt: new Date().toISOString() }, { merge: true });
        console.log(`🔥 Módulo ${moduleId} sincronizado no Firebase Firestore.`);
      } catch (e) {
        console.warn('Erro ao salvar no Firestore, usando fallback local:', e);
      }
    }
    if (this.modulesStore[moduleId]) {
      this.modulesStore[moduleId] = { ...this.modulesStore[moduleId], ...data };
    }
  }

  getModuleMetrics(moduleId: ModuleId): ModuleData {
    return this.modulesStore[moduleId];
  }
}

export const dbService = new DatabaseService();
