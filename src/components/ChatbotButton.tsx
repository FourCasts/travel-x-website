import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ChatbotButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        aria-label="Open chat assistant"
        onClick={() => setOpen(o => !o)}
        className="rounded-full p-4 bg-brand-gold text-brand-black shadow-lg hover:shadow-glow transition-shadow"
      >
        <MessageCircle />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="mt-4 w-72 md:w-80 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-xl shadow-xl overflow-hidden"
          >
            <div className="p-4 border-b border-neutral-200 dark:border-neutral-700 flex items-center justify-between">
              <h4 className="font-medium">Xie Assistant</h4>
              <button onClick={() => setOpen(false)} aria-label="Close chat" className="text-sm opacity-60 hover:opacity-100">×</button>
            </div>
            <div className="p-4 text-sm space-y-3 max-h-72 overflow-y-auto">
              <div className="bg-brand-gold/10 dark:bg-brand-gold/20 p-3 rounded-md">
                <p className="text-sm"><strong>Xie:</strong> Hi! I'm your Travel Assistant. Ask me about our destinations!</p>
              </div>
              <p className="text-xs opacity-50">(Phase 2 will add real AI chat capabilities.)</p>
            </div>
            <div className="p-3 border-t border-neutral-200 dark:border-neutral-700">
              <input
                type="text"
                placeholder="Type a message..."
                disabled
                className="w-full text-xs px-3 py-2 rounded-md bg-neutral-100 dark:bg-neutral-800 opacity-70"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
