import { motion } from 'framer-motion';

const skills = [
    { category: 'Frontend', items: ['React', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS', 'Vite'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'REST APIs'] },
    { category: 'Tools & Platforms', items: ['Git & GitHub', 'Vercel', 'Netlify', 'Figma'] },
];

const Skills = () => {
    return (
        <section id="skills" className="py-24 bg-secondary/30 relative overflow-hidden">
            {/* Decorative */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px]" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl font-display font-bold text-white mb-4">Web Development Tech Stack</h2>
                    <p className="text-text-secondary max-w-2xl mx-auto">
                        Tools and technologies I use to build modern, responsive, and high-performance web applications.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {skills.map((group, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-primary/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-accent/50 transition-colors"
                        >
                            <h3 className="text-xl font-display font-bold text-white mb-6 border-b border-white/5 pb-4">
                                {group.category}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {group.items.map((item) => (
                                    <span
                                        key={item}
                                        className="px-4 py-2 bg-white/5 rounded-lg text-sm text-text-secondary hover:text-white hover:bg-accent/20 hover:border-accent/20 border border-transparent transition-all cursor-default"
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
