import React from 'react';
import UnoMvpApp from './mvp-v1/UnoMvpApp';

// Preservando referência para a arquitetura anterior sem apagá-la:
// import { UNOGlobalShell } from './components/shell/UNOGlobalShell';
// import { LandingPage } from './pages/p01/LandingPage';

export const App: React.FC = () => {
  return <UnoMvpApp />;
};

export default App;
