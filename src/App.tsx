import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Router from './router';
import LoadingSplash from './components/LoadingSplash';
import ChatbotButton from './components/ChatbotButton';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1400);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
  <Navbar />
      <AnimatePresence>{loading && <LoadingSplash />}</AnimatePresence>
      <main className="flex-1 mt-16">
        <Router />
      </main>
      <Footer />
      <ChatbotButton />
    </div>
  );
}

export default App;
