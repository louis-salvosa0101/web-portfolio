import { Github, Linkedin, Instagram } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { fadeUp, staggerContainer, viewportConfig } from '../lib/motion';

const Footer = () => {
    const shouldReduceMotion = useReducedMotion();

    return (
        <footer className="bg-secondary/50 border-t border-white/5 py-10 sm:py-12 pb-[max(2.5rem,env(safe-area-inset-bottom))]">
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
                className="max-w-7xl mx-auto container-padding flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left"
            >
                <motion.div variants={fadeUp}>
                    <h3 className="text-lg sm:text-xl font-display font-bold text-white mb-2 uppercase tracking-tighter">LOUIS SALVOSA</h3>
                    <p className="text-text-secondary text-sm">Building modern, high-performance web applications.</p>
                </motion.div>

                <motion.div variants={fadeUp} className="flex gap-6">
                    {[
                        { Icon: Github, href: 'https://github.com/louis-salvosa0101' },
                        { Icon: Linkedin, href: 'https://www.linkedin.com/in/louis-salvosa' },
                        { Icon: Instagram, href: 'https://www.instagram.com/louistingting_/' }
                    ].map(({ Icon, href }, i) => (
                        <motion.a
                            key={i}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={shouldReduceMotion ? undefined : { y: -4, scale: 1.08, rotate: i === 1 ? 0 : -3 }}
                            whileTap={shouldReduceMotion ? undefined : { scale: 0.95 }}
                            className="touch-target text-text-secondary hover:text-accent transition-colors rounded-lg hover:bg-white/5"
                        >
                            <Icon size={22} />
                        </motion.a>
                    ))}
                </motion.div>

                <motion.div variants={fadeUp} className="text-text-secondary text-xs sm:text-sm max-w-xs md:max-w-none">
                    &copy; {new Date().getFullYear()} LOUIS SALVOSA. All rights reserved.
                </motion.div>
            </motion.div>
        </footer>
    );
};

export default Footer;
