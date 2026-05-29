import { motion, useReducedMotion } from 'framer-motion';
import { ExternalLink, Sparkles, MessageSquare, Mail } from 'lucide-react';
import { fadeUp, staggerContainer, viewportConfig } from '../lib/motion';

const Contact = () => {
    // REPLACE THIS URL WITH YOUR ACTUAL n8n FORM URL
    const N8N_FORM_URL = 'http://localhost:5678/form-test/60137ca7-0803-4e19-9f14-7b72508f38b1';
    const shouldReduceMotion = useReducedMotion();

    return (
        <section id="contact" className="section-padding relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <motion.div
                    animate={shouldReduceMotion ? undefined : { scale: [1, 1.12, 1], opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(600px,100vw)] h-[min(600px,80vh)] bg-accent/10 rounded-full blur-[100px] sm:blur-[120px]"
                />
                <motion.div
                    animate={shouldReduceMotion ? undefined : { x: [0, -20, 0], y: [0, -16, 0] }}
                    transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute bottom-0 right-0 w-48 h-48 sm:w-[400px] sm:h-[400px] bg-purple-500/5 rounded-full blur-[80px] sm:blur-[100px]"
                />
            </div>

            <div className="max-w-5xl mx-auto container-padding relative z-10">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportConfig}
                    className="bg-secondary/40 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-16 text-center relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.16),transparent_55%)] pointer-events-none" />
                    <motion.div
                        variants={fadeUp}
                        className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs sm:text-sm font-bold mb-6 sm:mb-8"
                    >
                        <Sparkles size={16} className="shrink-0" />
                        <span>WORK WITH ME</span>
                    </motion.div>

                    <motion.h2
                        variants={fadeUp}
                        className="text-[clamp(1.75rem,6vw,3.75rem)] font-display font-bold text-white mb-6 sm:mb-8 leading-tight"
                    >
                        Let's Build Your <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-500">Next Web Project</span>
                    </motion.h2>

                    <motion.p
                        variants={fadeUp}
                        className="text-base sm:text-lg md:text-xl text-text-secondary mb-8 sm:mb-12 max-w-2xl mx-auto"
                    >
                        Interested in working together on a web development project? Click below to get in touch and let's create something amazing for the web!
                    </motion.p>

                    <motion.div
                        variants={fadeUp}
                        className="flex flex-col items-center gap-5 sm:gap-6 w-full"
                    >
                        <motion.a
                            href={N8N_FORM_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={shouldReduceMotion ? undefined : { y: -4, scale: 1.02 }}
                            whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                            animate={shouldReduceMotion ? undefined : { boxShadow: ['0 0 0 rgba(37,99,235,0)', '0 0 34px rgba(37,99,235,0.28)', '0 0 0 rgba(37,99,235,0)'] }}
                            transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
                            className="group relative inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-10 py-4 sm:py-6 bg-accent text-white rounded-xl sm:rounded-2xl font-bold text-base sm:text-xl hover:bg-blue-600 transition-colors hover:shadow-[0_0_40px_rgba(37,99,235,0.4)] w-full sm:w-auto max-w-md"
                        >
                            <MessageSquare className="group-hover:rotate-12 transition-transform shrink-0" size={22} />
                            <span>Open Inquiry Form</span>
                            <ExternalLink size={18} className="opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all shrink-0" />

                            <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity blur-lg" />
                        </motion.a>

                        <div className="flex flex-col items-center gap-3 sm:gap-4 w-full">
                            <div className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-2 text-text-secondary text-sm text-center px-2">
                                <div className="flex items-center gap-2">
                                    <Mail size={16} className="shrink-0" />
                                    <span>Or email me at:</span>
                                </div>
                                <a
                                    href="mailto:karllouis.salvosa@gmail.com"
                                    className="text-white hover:text-accent transition-colors underline decoration-accent/30 underline-offset-4 decoration-2 hover:decoration-accent font-medium break-all sm:break-normal"
                                >
                                    karllouis.salvosa@gmail.com
                                </a>
                            </div>

                            <button
                                onClick={() => {
                                    navigator.clipboard.writeText('karllouis.salvosa@gmail.com');
                                    alert('Email copied to clipboard!');
                                }}
                                className="text-[10px] uppercase tracking-widest text-text-secondary hover:text-white transition-all hover:-translate-y-0.5 bg-white/5 px-4 py-2 rounded-full border border-white/5 hover:border-white/10 min-h-11"
                            >
                                Click to copy email
                            </button>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={fadeUp}
                        className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-white/5 flex flex-wrap justify-center gap-6 sm:gap-8 opacity-40 grayscale"
                    >
                        <div className="flex items-center gap-2">
                            <img src="https://cdn.simpleicons.org/n8n/white" alt="n8n" className="h-5" />
                            <span className="text-xs font-bold uppercase tracking-widest text-white">Automated</span>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
