import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Title from './Title';
import BoxShadow from './BoxShadow';
import faqs from '../assets/faqs.json';

export default function Faq() {
  // Dividimos las FAQs en dos columnas
  const mid = Math.ceil(faqs.length / 2);
  const column1FAQs = faqs.slice(0, mid);
  const column2FAQs = faqs.slice(mid);

  // Estado global para controlar la pregunta abierta (solo una a la vez)
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (globalIndex) => {
    setOpenFAQ((prevIndex) => (prevIndex === globalIndex ? null : globalIndex));
  };

  return (
    <div>
      <BoxShadow>
        <div className="flex flex-col gap-16 mx-auto container">
          <Title span={'Consulta nuestras'} title={'Preguntas frecuentes'} />
          <div className="flex flex-col md:flex-row gap-8">
            {/* Columna 1 */}
            <div className="w-full md:w-1/2">
              {column1FAQs.map((faq, index) => (
                <div key={index} className="px-4 mb-8">
                  <div className="faq-card">
                    <div className="main-gradient rounded-lg">
                      <button
                        onClick={() => toggleFAQ(index)}
                        className="flex justify-between gap-4 items-center h-20 w-full cursor-pointer p-4"
                      >
                        <h3 className="text-xl">{faq.question}</h3>
                        <div className={`toggle-cross ${openFAQ === index ? 'is-active' : ''}`} />
                      </button>
                    </div>
                    <AnimatePresence>
                      {openFAQ === index && (
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
              ))}
            </div>
            {/* Columna 2 */}
            <div className="w-full md:w-1/2">
              {column2FAQs.map((faq, index) => {
                // Calculate the global index for FAQs in column 2
                const globalIndex = mid + index;
                return (
                  <div key={index} className="px-4 mb-8">
                    <div className="faq-card">
                      <div className="main-gradient rounded-lg">
                        <button
                          onClick={() => toggleFAQ(globalIndex)}
                          className="flex justify-between gap-4 items-center h-20 w-full cursor-pointer p-4"
                        >
                          <h3 className="text-xl">{faq.question}</h3>
                          <div className={`toggle-cross ${openFAQ === globalIndex ? 'is-active' : ''}`} />
                        </button>
                      </div>
                      <AnimatePresence>
                        {openFAQ === globalIndex && (
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
              })}
            </div>
          </div>
        </div>
      </BoxShadow>
    </div>
  );
}