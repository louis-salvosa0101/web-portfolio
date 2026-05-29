import { motion, useReducedMotion } from 'framer-motion';
import { cardReveal, fadeUp, pillReveal, staggerContainer, viewportConfig } from '../lib/motion';

const skills = [
    { category: 'Frontend', items: ['React', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS', 'Vite', 'Next.js'] },
    { category: 'Backend', items: ['Python','FastAPI', 'Express', 'REST APIs'] },
    { category: 'Tools & Platforms', items: ['Git & GitHub', 'Vercel', 'Render', 'Figma'] },
];

const Skills = () => {
    const shouldReduceMotion = useReducedMotion();

    return (
        <section id="skills" className="section-padding bg-secondary/30 relative overflow-hidden">
            {/* Decorative */}
            <motion.div
                animate={shouldReduceMotion ? undefined : { x: [0, -24, 0], y: [0, 18, 0], scale: [1, 1.08, 1] }}
                transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-accent/5 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none"
            />

            <div className="max-w-7xl mx-auto container-padding relative z-10">
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportConfig}
                    className="mb-10 sm:mb-16 text-center"
                >
                    <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-3 sm:mb-4">Tech Stack</h2>
                    <p className="text-text-secondary max-w-2xl mx-auto">
                        Tools and technologies I use to build modern, responsive, and high-performance web applications.
                    </p>
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportConfig}
                    className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
                >
                    {skills.map((group, index) => (
                        <motion.div
                            key={index}
                            variants={cardReveal}
                            whileHover={shouldReduceMotion ? undefined : {
                                y: -6,
                                scale: 1.015,
                                boxShadow: '0 20px 50px rgba(37, 99, 235, 0.12)',
                            }}
                            className="group bg-primary/50 backdrop-blur-sm border border-white/10 rounded-2xl p-5 sm:p-8 hover:border-accent/50 transition-colors relative overflow-hidden"
                        >
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.16),transparent_58%)] pointer-events-none" />
                            <h3 className="text-xl font-display font-bold text-white mb-6 border-b border-white/5 pb-4">
                                {group.category}
                            </h3>
                            <motion.div
                                variants={staggerContainer}
                                className="flex flex-wrap gap-3 relative z-10"
                            >
                                {group.items.map((item) => (
                                    <motion.span
                                        key={item}
                                        variants={pillReveal}
                                        whileHover={shouldReduceMotion ? undefined : { y: -3, scale: 1.06 }}
                                        whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
                                        className="px-4 py-2 bg-white/5 rounded-lg text-sm text-text-secondary hover:text-white hover:bg-accent/20 hover:border-accent/20 border border-transparent transition-all cursor-default"
                                    >
                                        {item}
                                    </motion.span>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
