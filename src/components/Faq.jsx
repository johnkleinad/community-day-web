import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Title from './Title';
import BoxShadow from './BoxShadow';
import faqs from '../assets/faqs.json';

export default function Faq() {
  const mid = Math.ceil(faqs.length / 2);
  const [openFAQ, setOpenFAQ] = useState(null);
  const gradients = [
    'from-pink-cd-100 to-pink-cd-200',
    'from-orange-cd-100 to-orange-cd-200',
    'from-green-cd-100 to-green-cd-200',
    'from-cyan-cd-100 to-cyan-cd-200',
    'from-purple-cd-100 to-purple-cd-200',
    'from-blue-cd-100 to-blue-cd-200'
  ];
  const toggleFAQ = i => setOpenFAQ(prev => (prev === i ? null : i));
  const renderFAQ = (faq, idx) => (
    <div key={idx} className="px-4 mb-8">
      <div className="faq-card">
        <div className="main-gradient rounded-lg">
          <button onClick={() => toggleFAQ(idx)} className="flex justify-between items-center h-16 md:h-20 w-full cursor-pointer p-4">
            <span className="text-sm md:text-xl text-left">{faq.question}</span>
            <div className={`toggle-cross rounded-full bg-gradient-to-b ${gradients[idx % gradients.length]} p-5 ${openFAQ === idx ? 'is-active' : ''}`} />
          </button>
        </div>
        <AnimatePresence>
          {openFAQ === idx && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="p-4 bg-blue-cd-200 rounded-b-lg">
                <p className="font-light">{faq.answer}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
  return (
    <div>
      <BoxShadow>
        <div className="flex flex-col gap-8 md:gap-16 mx-auto container px-4 min-h-[850px]">
          <Title span="Consulta nuestras" title="Preguntas frecuentes" />
          <div className="flex flex-col md:flex-row md:gap-8">
            <div className="w-full md:w-1/2">{faqs.slice(0, mid).map((f, i) => renderFAQ(f, i))}</div>
            <div className="w-full md:w-1/2">{faqs.slice(mid).map((f, i) => renderFAQ(f, i + mid))}</div>
          </div>
        </div>
      </BoxShadow>
    </div>
  );
}