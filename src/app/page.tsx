'use client';

import React, { useEffect, useState } from 'react';
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
        { name: 'Contato', href: '#contact' }
    ];

    return (
        <div
            className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-800'}`}
        >
            {/* Navbar */}
            <nav className={`fixed top-0 w-full shadow-md p-4 z-10 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <div className="container mx-auto flex justify-between items-center">
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                        <span className={`text-2xl font-bold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Vinicius Aguiar</span>
                    </motion.div>
                    <div className="flex items-center space-x-4">
                        <div className="hidden md:flex space-x-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className={`transition duration-200 ${darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'}`}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                        <button
                            onClick={toggleDarkMode}
                            className={`p-2 rounded-full transition ${darkMode ? 'bg-gray-700 text-gray-200 hover:bg-gray-600' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                            aria-label="Toggle theme"
                        >
                            {darkMode ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-gray-600" />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Hero Section - Refined Two-Column Layout */}
            <motion.header
                id="hero"
                className={`flex items-center justify-center min-h-screen text-center md:text-left p-4 pt-20 ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-800'}`}
                {...fadeIn}
            >
                <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
                    {/* Left Column: Text Introduction */}
                    <motion.div
                        className="md:w-3/5"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
                            Olá, eu sou <span className={darkMode ? 'text-blue-400' : 'text-blue-600'}>Vinicius Aguiar</span>
                        </h1>
                        <h2 className={`text-2xl mb-4 border-b pb-2 ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>
                            Frontend & UX Specialist
                        </h2>
                        <p className={`text-lg mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                            Elevando a experiência do usuário com soluções profissionais de alta performance. Formado em Análise e
                            Desenvolvimento de Sistemas e com MBA em Engenharia de Software com IA pela Full Cycle.
                        </p>
                        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition shadow-lg">
                            Download CV
                        </button>
                    </motion.div>

                    {/* Right Column: Placeholder Image/Avatar */}
                    <motion.div
                        className="md:w-2/5 flex justify-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <div className={`rounded-full w-64 h-64 flex items-center justify-center shadow-xl ${darkMode ? 'bg-gray-700' : 'bg-gray-300'}`}>
                            <span className={`text-8xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>👤</span>
                        </div>
                    </motion.div>
                </div>
            </motion.header>

            {/* Skills Section */}
            <motion.section
                id="skills"
                className={`p-10 md:p-20 shadow-lg ${darkMode ? 'bg-gray-900' : 'bg-white'}`}
                initial="initial"
                whileInView="animate"
                variants={stagger}
                viewport={{ once: true, amount: 0.3 }}
            >
                <h3 className="text-3xl font-bold mb-8 text-center border-b-2 border-blue-500 pb-2">
                    Tech Stack Profissional
                </h3>
                <motion.div className="flex flex-wrap justify-center gap-8 text-center">
                    <motion.div variants={listItem} className="flex flex-col items-center">
                        <FaReact className="text-6xl text-blue-500 mb-3" />
                        <span className="text-lg font-semibold">React/Next.js</span>
                    </motion.div>
                    <motion.div variants={listItem} className="flex flex-col items-center">
                        <FaNode className="text-6xl text-green-600 mb-3" />
                        <span className="text-lg font-semibold">Node.js</span>
                    </motion.div>
                    <motion.div variants={listItem} className="flex flex-col items-center">
                        <FaPython className="text-6xl text-yellow-600 mb-3" />
                        <span className="text-lg font-semibold">Python</span>
                    </motion.div>
                    <motion.div variants={listItem} className="flex flex-col items-center">
                        <FaAws className={`text-6xl mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`} />
                        <span className="text-lg font-semibold">AWS</span>
                    </motion.div>
                    <motion.div variants={listItem} className="flex flex-col items-center">
                        <FaFigma className="text-6xl text-purple-500 mb-3" />
                        <span className="text-lg font-semibold">Figma & UX</span>
                    </motion.div>
                </motion.div>
            </motion.section>

            {/* Experience Section */}
            <motion.section
                id="experience"
                className={`p-10 md:p-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}
                initial="initial"
                whileInView="animate"
                variants={stagger}
                viewport={{ once: true, amount: 0.3 }}
            >
                <h3 className="text-3xl font-bold mb-8 text-center border-b-2 border-blue-500 pb-2">
                    Experiência Profissional
                </h3>
                <div className="space-y-8">
                    {experiences.map((exp) => (
                        <motion.div
                            key={exp.id}
                            variants={listItem}
                            className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ${darkMode ? 'bg-gray-700' : 'bg-white'}`}
                        >
                            <h4 className={`text-2xl font-semibold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>{exp.role}</h4>
                            <p className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{exp.company}</p>
                            <p className={`text-sm mb-4 flex items-center ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                <FaCalendarAlt className="mr-2" />
                                {exp.duration}
                            </p>
                            <p className={darkMode ? 'text-gray-200' : 'text-gray-700'}>{exp.description}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* Education Section */}
            <motion.section
                id="education"
                className={`p-10 md:p-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}
                initial="initial"
                whileInView="animate"
                variants={stagger}
                viewport={{ once: true, amount: 0.3 }}
            >
                <h3 className="text-3xl font-bold mb-8 text-center border-b-2 border-blue-500 pb-2">
                    Formação Acadêmica
                </h3>
                <div className="space-y-8">
                    {educations.map((edu) => (
                        <motion.div
                            key={edu.id}
                            variants={listItem}
                            className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}
                        >
                            <h4 className={`text-2xl font-semibold flex items-center ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                                <FaGraduationCap className="mr-3" />
                                {edu.course}
                            </h4>
                            <p className={`font-medium mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{edu.institution}</p>
                            <p className={`text-sm mb-4 flex items-center ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                <FaCalendarAlt className="mr-2" />
                                {edu.duration}
                            </p>
                            <p className={darkMode ? 'text-gray-200' : 'text-gray-700'}>{edu.description}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* Contact Section */}
            <motion.section
                id="contact"
                className={`p-10 md:p-20 text-white text-center shadow-inner ${darkMode ? 'bg-gray-900' : 'bg-gray-800'}`}
                {...fadeIn}
            >
                <h3 className="text-3xl font-bold mb-4">Pronto para o próximo desafio.</h3>
                <p className="text-lg mb-6 text-gray-400">Entre em contato para colaborações ou oportunidades.</p>
                <div className="flex justify-center gap-6 mt-4 text-3xl">
                    <motion.a
                        href="#"
                        whileHover={{ scale: 1.1 }}
                        className="text-gray-400 hover:text-blue-400 transition duration-200"
                        aria-label="Email"
                    >
                        <FaEnvelope />
                    </motion.a>
                    <motion.a
                        href="#"
                        whileHover={{ scale: 1.1 }}
                        className="text-gray-400 hover:text-blue-400 transition duration-200"
                        aria-label="Phone"
                    >
                        <FaPhone />
                    </motion.a>
                    <motion.a
                        href="#"
                        whileHover={{ scale: 1.1 }}
                        className="text-gray-400 hover:text-blue-400 transition duration-200"
                        aria-label="Location"
                    >
                        <FaMapMarkerAlt />
                    </motion.a>
                </div>
            </motion.section>

            <footer
                className={`p-4 text-center border-t ${darkMode ? 'text-gray-400 bg-gray-800 border-gray-700' : 'text-gray-600 bg-white border-gray-200'}`}
            >
                <p>© {new Date().getFullYear()} Vinicius Aguiar. Desenvolvido com Next.js e Tailwind CSS.</p>
            </footer>
            <SupportButton />
        </div>
    );
};

export default Home;
