import React from 'react';
import { UnoChatCenter } from '../components/chat/UnoChatCenter';

export const ConversaView: React.FC = () => {
  return (
    <div style={{ height: 'calc(100vh - 120px)' }}>
      <UnoChatCenter />
    </div>
  );
};
