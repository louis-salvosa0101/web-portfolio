import { motion } from 'framer-motion';
import { ExternalLink, Sparkles, MessageSquare, Mail } from 'lucide-react';

const Contact = () => {
    // REPLACE THIS URL WITH YOUR ACTUAL n8n FORM URL
    const N8N_FORM_URL = 'http://localhost:5678/form-test/60137ca7-0803-4e19-9f14-7b72508f38b1';

    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-5xl mx-auto px-6 relative z-10">
                <div className="bg-secondary/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-16 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-bold mb-8"
                    >
                        <Sparkles size={16} />
                        <span>WORK WITH ME</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-display font-bold text-white mb-8"
                    >
                        Ready to Build Your <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-500">AI-Powered Future?</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-text-secondary mb-12 max-w-2xl mx-auto"
                    >
                        I've streamlined my inquiry process using AI. Click below to open my **n8n-powered** form. Your request goes directly into my workflow for a faster, more intelligent response.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col items-center gap-6"
                    >
                        <a
                            href={N8N_FORM_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative inline-flex items-center justify-center gap-3 px-10 py-6 bg-accent text-white rounded-2xl font-bold text-xl hover:bg-blue-600 transition-all hover:shadow-[0_0_40px_rgba(37,99,235,0.4)] hover:-translate-y-1"
                        >
                            <MessageSquare className="group-hover:rotate-12 transition-transform" size={24} />
                            Open Inquiry Form
                            <ExternalLink size={20} className="opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />

                            <div className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity blur-lg" />
                        </a>

                        <div className="flex flex-col items-center gap-4">
                            <div className="flex items-center gap-2 text-text-secondary text-sm">
                                <Mail size={16} />
                                <span>Or email me at:</span>
                                <a
                                    href="mailto:karllouis.salvosa@gmail.com"
                                    className="text-white hover:text-accent transition-colors underline decoration-accent/30 underline-offset-4 decoration-2 hover:decoration-accent transition-all font-medium"
                                >
                                    karllouis.salvosa@gmail.com
                                </a>
                            </div>

                            <button
                                onClick={() => {
                                    navigator.clipboard.writeText('karllouis.salvosa@gmail.com');
                                    alert('Email copied to clipboard!');
                                }}
                                className="text-[10px] uppercase tracking-widest text-text-secondary hover:text-white transition-colors bg-white/5 px-3 py-1 rounded-full border border-white/5 hover:border-white/10"
                            >
                                Click to copy email
                            </button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="mt-16 pt-8 border-t border-white/5 flex flex-wrap justify-center gap-8 opacity-40 grayscale"
                    >
                        {/* Subtle indicators of automation stack */}
                        <div className="flex items-center gap-2">
                            <img src="https://cdn.simpleicons.org/n8n/white" alt="n8n" className="h-5" />
                            <span className="text-xs font-bold uppercase tracking-widest text-white">Automated</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
