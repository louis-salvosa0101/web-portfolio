import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Bot, Sparkles } from 'lucide-react';
import { fadeUp, staggerContainer, viewportConfig } from '../lib/motion';

const technologies = [
    { name: 'FastAPI', icon: 'https://cdn.simpleicons.org/fastapi/white' },
    { name: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript/white' },
    { name: 'HTML5', icon: 'https://cdn.simpleicons.org/html5/white' },
    { name: 'CSS3', icon: 'https://cdn.simpleicons.org/css/white' },
    { name: 'Python', icon: 'https://cdn.simpleicons.org/python/white' },
    { name: 'Claude Code', icon: 'https://cdn.simpleicons.org/claude/white' },
    { name: 'Codex', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/openai.svg', invert: true },
];

const Hero = () => {
    const shouldReduceMotion = useReducedMotion();
    const carouselItems = [...technologies, ...technologies];

    return (
        <section id="hero" className="relative min-h-screen min-h-[100dvh] flex items-center justify-center pt-24 sm:pt-20 pb-20 sm:pb-24 md:pb-0 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <motion.div
                    animate={shouldReduceMotion ? undefined : { x: [0, 28, 0], y: [0, -18, 0], scale: [1, 1.08, 1] }}
                    transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute top-10 left-1/2 -translate-x-1/2 sm:top-20 sm:left-20 sm:translate-x-0 w-48 h-48 sm:w-72 sm:h-72 bg-accent/20 rounded-full blur-[80px] sm:blur-[100px]"
                />
                <motion.div
                    animate={shouldReduceMotion ? undefined : { x: [0, -24, 0], y: [0, 22, 0], scale: [1, 1.12, 1] }}
                    transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute bottom-10 right-0 sm:bottom-20 sm:right-20 w-56 h-56 sm:w-96 sm:h-96 bg-purple-500/10 rounded-full blur-[80px] sm:blur-[100px]"
                />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
            </div>

            <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="relative z-10 max-w-7xl mx-auto container-padding w-full text-center"
            >
                <motion.div
                    variants={fadeUp}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-accent text-xs sm:text-sm font-medium mb-4 sm:mb-6 max-w-full"
                >
                    <Sparkles size={16} className="shrink-0" />
                    <span className="truncate">Web Development Portfolio</span>
                </motion.div>

                <motion.h1
                    variants={fadeUp}
                    className="text-[clamp(2rem,8vw,4.5rem)] md:text-7xl font-display font-bold text-white mb-4 sm:mb-6 leading-[1.1] sm:leading-tight px-1"
                >
                    I'm{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-500">
                        LOUIS SALVOSA
                    </span>
                    <br />
                    Web Developer
                </motion.h1>

                <motion.p
                    variants={fadeUp}
                    className="text-base sm:text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-8 sm:mb-10 px-1"
                >
                    I specialize in building modern, responsive, and high-performance web applications using the latest technologies. Let's bring your ideas to life on the web!
                </motion.p>

                <motion.div
                    variants={fadeUp}
                    className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12 sm:mb-16 w-full max-w-md sm:max-w-none mx-auto sm:mx-0"
                >
                    <motion.a
                        href="#projects"
                        whileHover={shouldReduceMotion ? undefined : { y: -3, scale: 1.02 }}
                        whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                        className="group flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-accent text-white rounded-lg font-bold text-base sm:text-lg hover:bg-blue-600 transition-all hover:shadow-[0_0_20px_rgba(37,99,235,0.5)] w-full sm:w-auto"
                    >
                        View Projects
                        <ArrowRight className="group-hover:translate-x-1 transition-transform shrink-0" size={20} />
                    </motion.a>
                    <motion.a
                        href="#contact"
                        whileHover={shouldReduceMotion ? undefined : { y: -3, scale: 1.02 }}
                        whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                        className="flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-white/5 text-white border border-white/10 rounded-lg font-bold text-base sm:text-lg hover:bg-white/10 transition-all w-full sm:w-auto"
                    >
                        <Bot className="shrink-0" size={20} />
                        Contact Me
                    </motion.a>
                </motion.div>

                <motion.div
                    variants={fadeUp}
                    viewport={viewportConfig}
                    className="border-t border-white/5 pt-6 sm:pt-8"
                >
                    <p className="text-text-secondary text-xs sm:text-sm mb-4 sm:mb-6 uppercase tracking-wider">
                        Web Development Technologies
                    </p>
                    <div className="relative mx-auto max-w-5xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
                        <motion.div
                            className={`flex w-max items-center gap-3 sm:gap-5 py-2 ${shouldReduceMotion ? '' : 'animate-tech-carousel hover:[animation-play-state:paused]'}`}
                        >
                            {carouselItems.map(({ name, icon, invert }, index) => (
                                <motion.div
                                    key={`${name}-${index}`}
                                    whileHover={shouldReduceMotion ? undefined : { y: -4, scale: 1.05 }}
                                    className="group flex min-w-max items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 shadow-lg shadow-black/10 backdrop-blur-sm transition-colors hover:border-accent/40 hover:bg-accent/10"
                                    title={name}
                                    aria-hidden={index >= technologies.length}
                                >
                                    <img
                                        src={icon}
                                        alt={index >= technologies.length ? '' : name}
                                        className={`h-6 sm:h-8 w-auto shrink-0 opacity-80 transition-all duration-300 group-hover:opacity-100 ${invert ? 'invert' : ''}`}
                                    />
                                    <span className="font-display font-bold text-white text-sm sm:text-lg">
                                        {name}
                                    </span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
