'use client';

import React, { useEffect, useState } => from 'react';
import { motion } from 'framer-motion';
import {
    FaReact,
    FaNode,
    FaPython,
    FaAws,
    FaFigma,
    FaCalendarAlt,
    FaMapMarkerAlt,
    FaEnvelope,
    FaPhone,
    FaGraduationCap,
    FaSun,
    FaMoon
} from 'react-icons/fa';
import SupportButton from '@/components/SupportButton';

const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: 'easeOut' }
};

const stagger = {
    animate: { transition: { staggerChildren: 0.1 } }
};

const listItem = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 }
};

const experiences = [
    {
        id: 1,
        role: 'Frontend & UX Specialist',
        company: 'Holly Solutions',
        duration: 'Novembro de 2025 - Presente',
        description:
            'Liderança técnica e desenvolvimento de interfaces de usuário avançadas, focando em performance e integração de novas tecnologias como LLMs.'
    },
    {
        id: 2,
        role: 'Desenvolvedor Lead',
        company: 'MoviePro',
        duration: 'Maio de 2025 - Novembro de 2025',
        description:
            'Desenvolvimento e manutenção de plataformas de streaming, otimização de performance e implementação de pipelines de CI/CD.'
    },
    {
        id: 3,
        role: 'Desenvolvedor Júnior/Pleno',
        company: 'Easy to go.',
        duration: 'Maio de 2024 - Maio de 2025',
        description:
            'Criação de soluções de e-commerce escaláveis e responsivas, trabalhando com Next.js e React Native.'
    }
];

const educations = [
    {
        id: 1,
        course: 'MBA em Engenharia de Software com IA',
        institution: 'Full Cycle',
        duration: '2025 - 2026',
        description:
            'Especialização focada em arquitetura de software avançada e implementação de soluções de Inteligência Artificial.'
    },
    {
        id: 2,
        course: 'Análise e Desenvolvimento de Sistemas',
        institution: 'Universidade Nove de Julho (Uni9)',
        duration: '2021 - 2023',
        description:
            'Formação tecnológica focada em desenvolvimento de software, análise de requisitos e arquitetura de sistemas.'
    }
];

const Home: React.FC = () => {
    const [darkMode, setDarkMode] = useState<boolean>(() => {
        if (typeof window === 'undefined') return false;
        return localStorage.getItem('darkMode') === 'true';
    });

    useEffect(() => {
        document.documentElement.classList.toggle('dark', darkMode);
        localStorage.setItem('darkMode', String(darkMode));
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode((current) => !current);
    };

    const navLinks = [
        { name: 'Sobre', href: '#hero' },
        { name: 'Skills', href: '#skills' },
        { name: 'Experiência', href: '#experience' },
        { name: 'Formação', href: '#education' },
    ];

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">
            <header className="sticky top-0 z-10 bg-white dark:bg-gray-800 shadow-md">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Portfólio</h1>
                    </motion.div>
                    <nav>
                        <ul className="flex space-x-4">
                            {navLinks.map((link) => (
                                <motion.li key={link.name} variants={listItem}>
                                    <a
                                        href={link.href}
                                        className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300"
                                    >
                                        {link.name}
                                    </a>
                                </motion.li>
                            ))}
                            <button
                                onClick={toggleDarkMode}
                                className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition duration-300"
                                aria-label="Toggle dark mode"
                            >
                                {darkMode ? <FaSun className="w-6 h-6" /> : <FaMoon className="w-6 h-6" />}
                            </button>
                        </ul>
                    </nav>
                </div>
            </header>

            <main className="container mx-auto px-4 py-8">
                {/* Hero Section */}
                <motion.section id="hero" variants={fadeIn} initial="initial" animate="animate" className="text-center py-16">
                    <h2 className="text-4xl font-extrabold mb-4">Olá, eu sou um Desenvolvedor.</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400">Especialista em Frontend e UX, com foco em performance e novas tecnologias.</p>
                </motion.section>

                {/* Skills Section */}
                <motion.section id="skills" variants={fadeIn} initial="initial" animate="animate" className="py-8">
                    <h2 className="text-3xl font-bold mb-6 border-b pb-2">Skills</h2>
                    <div className="flex justify-center space-x-6 text-4xl">
                        <FaReact className="text-blue-500" />
                        <FaNode className="text-green-600" />
                        <FaPython className="text-yellow-600" />
                        <FaAws className="text-orange-500" />
                        <FaFigma className="text-purple-500" />
                    </div>
                </motion.section>

                {/* Experience Section */}
                <motion.section id="experience" variants={stagger} initial="initial" animate="animate" className="py-8">
                    <h2 className="text-3xl font-bold mb-6 border-b pb-2">Experiência Profissional</h2>
                    <div className="space-y-6">
                        {experiences.map((exp) => (
                            <motion.div key={exp.id} variants={listItem} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition duration-300">
                                <h3 className="text-xl font-semibold">{exp.role}</h3>
                                <p className="text-gray-600 dark:text-gray-400">{exp.company}</p>
                                <p className="text-sm text-gray-500 dark:text-gray-500 flex items-center">
                                    <FaCalendarAlt className="mr-2" /> {exp.duration}
                                </p>
                                <p className="mt-2">{exp.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Education Section */}
                <motion.section id="education" variants={stagger} initial="initial" animate="animate" className="py-8">
                    <h2 className="text-3xl font-bold mb-6 border-b pb-2">Formação</h2>
                    <div className="space-y-6">
                        {educations.map((edu) => (
                             <motion.div key={edu.id} variants={listItem} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition duration-300">
                                <h3 className="text-xl font-semibold">{edu.course}</h3>
                                <p className="text-gray-600 dark:text-gray-400">{edu.institution}</p>
                                <p className="text-sm text-gray-500 dark:text-gray-500 flex items-center">
                                    <FaGraduationCap className="mr-2" /> {edu.duration}
                                </p>
                                <p className="mt-2">{edu.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

            </main>

            <footer className="bg-white dark:bg-gray-800 shadow-md mt-8">
                <div className="container mx-auto px-4 py-6 text-center text-gray-600 dark:text-gray-400">
                    <div className="flex justify-center space-x-4 mb-4">
                        <span className="flex items-center"><FaEnvelope className="mr-2" /> contato@email.com</span>
                        <span className="flex items-center"><FaPhone className="mr-2" /> (11) 98765-4321</span>
                        <span className="flex items-center"><FaMapMarkerAlt className="mr-2" /> São Paulo, Brasil</span>
                    </div>
                    <p>&copy; 2025 Portfólio. Todos os direitos reservados.</p>
                </div>
            </footer>
            <SupportButton />
        </div>
    );
};

export default Home;
