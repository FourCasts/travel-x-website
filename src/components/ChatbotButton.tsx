import { useEffect } from 'react';
import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';

export default function ChatbotButton() {
  useEffect(() => {
    createChat({
      webhookUrl: 'https://n8n.app.gnod.space/webhook/a889d2ae-2159-402f-b326-5f61e90f602e/chat',
      mode: 'window',
      initialMessages: [
        'Hi! I\'m Xie, your Travel Assistant. 👋',
        'I can help you with information about our destinations, trips, and services. How can I assist you today?'
      ],
      loadPreviousSession: true,
      showWelcomeScreen: false,
      showWindowCloseButton: true,
    });
  }, []);

  return null;
}
