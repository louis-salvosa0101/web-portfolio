import { useState, useEffect } from 'react';
import { Menu, X, Cpu } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const shouldReduceMotion = useReducedMotion();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    const navLinks = [
        { name: 'Home', href: '#hero' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 pt-[env(safe-area-inset-top)] ${scrolled ? 'bg-primary/80 backdrop-blur-md border-b border-white/5 py-3 sm:py-4' : 'bg-transparent py-4 sm:py-6'}`}>
            <div className="max-w-7xl mx-auto container-padding flex items-center justify-between gap-4">
                <motion.a
                    href="#hero"
                    whileHover={shouldReduceMotion ? undefined : { scale: 1.03 }}
                    whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                    className="group flex items-center gap-1.5 sm:gap-2 text-lg sm:text-2xl font-display font-bold text-white uppercase tracking-tighter shrink-0"
                >
                    <Cpu className="text-accent w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:rotate-12" />
                    <span>LOUIS<span className="text-accent">.</span>S</span>
                </motion.a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            whileHover={shouldReduceMotion ? undefined : { y: -2 }}
                            className="relative text-text-secondary hover:text-accent transition-colors text-sm font-medium tracking-wide uppercase after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-accent after:transition-all hover:after:w-full"
                        >
                            {link.name}
                        </motion.a>
                    ))}
                    <motion.a
                        href="#contact"
                        whileHover={shouldReduceMotion ? undefined : { y: -2, scale: 1.03 }}
                        whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                        className="px-5 py-2 bg-accent text-white rounded-lg font-medium hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/20"
                    >
                        Let's Talk
                    </motion.a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden touch-target text-white rounded-lg hover:bg-white/10 transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label={isOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={isOpen}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
                        animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, height: 'auto' }}
                        exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
                        className="md:hidden bg-secondary border-b border-white/5 overflow-hidden"
                    >
                        <div className="flex flex-col p-4 sm:p-6 gap-1 pb-[max(1rem,env(safe-area-inset-bottom))]">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-text-secondary hover:text-accent text-lg font-medium py-3 px-2 rounded-lg hover:bg-white/5 transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="#contact"
                                className="mt-2 px-5 py-3 bg-accent text-white rounded-lg font-medium text-center hover:bg-blue-600 transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                Let's Talk
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
