import { motion } from 'framer-motion';
import { ArrowRight, Bot, Sparkles } from 'lucide-react';

const Hero = () => {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-20 left-20 w-72 h-72 bg-accent/20 rounded-full blur-[100px]" />
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-accent text-sm font-medium mb-6"
                >
                    <Sparkles size={16} />
                    <span>AI Automation Workflow</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight"
                >
                    I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-500">LOUIS SALVOSA</span> <br />
                    AI Automation Workflow Specialist
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10"
                >
                    I specialize in building powerful, custom automation solutions using leading platforms to streamline your operations and drive growth.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col md:flex-row gap-4 justify-center mb-16"
                >
                    <a
                        href="#projects"
                        className="group flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white rounded-lg font-bold text-lg hover:bg-blue-600 transition-all hover:shadow-[0_0_20px_rgba(37,99,235,0.5)]"
                    >
                        View Projects
                        <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                        href="#contact"
                        className="flex items-center justify-center gap-2 px-8 py-4 bg-white/5 text-white border border-white/10 rounded-lg font-bold text-lg hover:bg-white/10 transition-all"
                    >
                        <Bot />
                        Contact Me
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="border-t border-white/5 pt-8"
                >
                    <p className="text-text-secondary text-sm mb-6 uppercase tracking-wider">Powering Enterprise Growth With</p>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-80">
                        {/* n8n */}
                        <div className="flex items-center gap-2" title="n8n">
                            <img src="https://cdn.simpleicons.org/n8n/white" alt="n8n" className="h-8 w-auto hover:opacity-80 transition-all duration-300" />
                            <span className="font-display font-bold text-white text-lg">n8n</span>
                        </div>

                        {/* Zapier */}
                        <div className="flex items-center gap-2" title="Zapier">
                            <img src="https://cdn.simpleicons.org/zapier/white" alt="Zapier" className="h-8 w-auto hover:opacity-80 transition-all duration-300" />
                            <span className="font-display font-bold text-white text-lg">Zapier</span>
                        </div>

                        {/* Make */}
                        <div className="flex items-center gap-2" title="Make">
                            <img src="https://cdn.simpleicons.org/make/white" alt="Make" className="h-8 w-auto hover:opacity-80 transition-all duration-300" />
                            <span className="font-display font-bold text-white text-lg">Make</span>
                        </div>

                        {/* HighLevel */}
                        <div className="flex items-center gap-2" title="GoHighLevel">
                            <div className="flex items-center gap-1 text-white font-display font-bold text-lg tracking-tight">
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-accent">
                                    <path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z" />
                                </svg>
                                HighLevel
                            </div>
                        </div>

                        {/* OpenAI */}
                        <div className="flex items-center gap-2" title="OpenAI">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg"
                                alt="OpenAI"
                                className="h-8 w-auto brightness-0 invert hover:opacity-80 transition-all duration-300"
                            />

                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
