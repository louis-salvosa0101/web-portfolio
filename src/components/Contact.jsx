import { motion } from 'framer-motion';
import { ExternalLink, MessageSquare, Mail, Copy } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
    // REPLACE THIS URL WITH YOUR ACTUAL n8n FORM URL
    const N8N_FORM_URL = 'http://localhost:5678/form-test/60137ca7-0803-4e19-9f14-7b72508f38b1';
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText('karllouis.salvosa@gmail.com');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/[0.06] rounded-full blur-[150px]" />
            </div>

            <div className="max-w-3xl mx-auto px-6 relative z-10">
                <div className="glass-panel rounded-3xl p-8 md:p-14 text-center">
                    {/* Badge */}
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-accent text-sm font-semibold uppercase tracking-widest mb-6"
                    >
                        Get in Touch
                    </motion.p>

                    {/* Heading */}
                    <motion.h2
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.08 }}
                        className="text-3xl md:text-5xl font-display font-bold text-text-primary mb-6 leading-tight"
                    >
                        Let's Build Your{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-secondary">
                            Next Project
                        </span>
                    </motion.h2>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.16 }}
                        className="text-text-secondary mb-10 max-w-lg mx-auto text-sm leading-relaxed"
                    >
                        Have a SaaS idea, need an AI integration, or want to collaborate
                        on a full-stack project? I'd love to hear about it.
                    </motion.p>

                    {/* CTA Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.24 }}
                        className="flex flex-col items-center gap-6"
                    >
                        <a
                            href={N8N_FORM_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-accent text-white rounded-full font-semibold text-sm hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
                        >
                            <MessageSquare
                                size={18}
                                className="group-hover:rotate-6 transition-transform duration-200"
                            />
                            Open Inquiry Form
                            <ExternalLink size={14} className="opacity-50 group-hover:opacity-100 transition-opacity duration-200" />
                        </a>

                        {/* Email */}
                        <div className="flex flex-col items-center gap-3">
                            <div className="flex items-center gap-2 text-text-secondary text-sm">
                                <Mail size={14} />
                                <span>Or reach me at</span>
                                <a
                                    href="mailto:karllouis.salvosa@gmail.com"
                                    className="text-text-primary hover:text-accent transition-colors duration-200 font-medium cursor-pointer"
                                >
                                    karllouis.salvosa@gmail.com
                                </a>
                            </div>

                            <button
                                onClick={handleCopy}
                                className="inline-flex items-center gap-1.5 text-xs text-text-secondary hover:text-text-primary transition-colors duration-200 bg-white/[0.04] px-3 py-1 rounded-full border border-white/[0.06] hover:border-white/[0.1] cursor-pointer"
                            >
                                <Copy size={10} />
                                {copied ? 'Copied!' : 'Copy email'}
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
