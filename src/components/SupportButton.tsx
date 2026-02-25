'use client';

import React, { useState } from 'react';
import { FaComments, FaTimes, FaEnvelope, FaPhone } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const SupportButton: React.FC = () => {
    const [showChat, setShowChat] = useState(false);

    const miniChatVariants = {
        hidden: { opacity: 0, scale: 0.8, y: 20 },
        visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.3 } },
        exit: { opacity: 0, scale: 0.8, y: 20, transition: { duration: 0.2 } }
    };

    return (
        <>
            <button
                onClick={() => setShowChat(!showChat)}
                className="fixed bottom-4 right-4 z-50 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition duration-150 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                aria-label="Botão de Suporte"
                title="Suporte"
            >
                <FaComments className="text-2xl" />
            </button>
            
            <AnimatePresence>
                {showChat && (
                    <motion.div
                        className="fixed bottom-20 right-4 z-50 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl w-80 border border-gray-200 dark:border-gray-700"
                        variants={miniChatVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-bold text-gray-800 dark:text-white">Central de Suporte</h3>
                            <button
                                onClick={() => setShowChat(false)}
                                className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition"
                                aria-label="Fechar"
                            >
                                <FaTimes className="text-xl" />
                            </button>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">Clique abaixo para entrar em contato:</p>
                        
                        <div className="space-y-3">
                            <a href="mailto:suporte@exemplo.com" className="flex items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-600 transition duration-150">
                                <FaEnvelope className="text-blue-600 mr-3" />
                                <span className="text-sm text-gray-800 dark:text-gray-200">suporte@exemplo.com</span>
                            </a>
                            <a href="tel:+5511999999999" className="flex items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-600 transition duration-150">
                                <FaPhone className="text-blue-600 mr-3" />
                                <span className="text-sm text-gray-800 dark:text-gray-200">(11) 99999-9999</span>
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default SupportButton;
