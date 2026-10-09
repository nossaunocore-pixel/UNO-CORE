import React from 'react';
import V6App from './v6/V6App';

// Preservando referência para a arquitetura anterior sem apagá-la:
// import { UNOGlobalShell } from './components/shell/UNOGlobalShell';
// import { LandingPage } from './pages/p01/LandingPage';

export const App: React.FC = () => {
  return <V6App />;
};

export default App;
