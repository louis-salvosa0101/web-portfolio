import { motion } from 'framer-motion';

const skills = [
    { category: 'Frontend', items: ['React', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS', 'Vite', 'Next.js'] },
    { category: 'Backend', items: ['Python','FastAPI', 'Express', 'REST APIs'] },
    { category: 'Tools & Platforms', items: ['Git & GitHub', 'Vercel', 'Render', 'Figma'] },
];

const Skills = () => {
    return (
        <section id="skills" className="py-24 relative overflow-hidden">
            {/* Subtle background accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/[0.03] rounded-full blur-[150px]" />

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-14 text-center"
                >
                    <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
                        Expertise
                    </p>
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-text-primary mb-4">
                        Tech Stack
                    </h2>
                    <p className="text-text-secondary max-w-xl mx-auto text-sm leading-relaxed">
                        Tools and technologies I use to build modern, scalable applications.
                    </p>
                </motion.div>

                {/* Skills Grid */}
                <div className="grid md:grid-cols-3 gap-6">
                    {skills.map((group, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08 }}
                            className="glass-card rounded-2xl p-7 hover:border-accent/20 transition-all duration-300"
                        >
                            <h3 className="text-base font-display font-semibold text-text-primary mb-5 pb-4 border-b border-white/[0.06]">
                                {group.category}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {group.items.map((item) => (
                                    <span
                                        key={item}
                                        className="px-3 py-1.5 bg-white/[0.04] rounded-lg text-sm text-text-secondary hover:text-text-primary hover:bg-accent/10 border border-transparent hover:border-accent/10 transition-all duration-200 cursor-default"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
