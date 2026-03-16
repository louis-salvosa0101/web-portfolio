import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import openaiIcon from '../assets/openai-colored.svg';

const techStack = [
    { name: 'React', icon: 'https://cdn.simpleicons.org/react/94A3B8' },
    { name: 'Next.js', icon: 'https://cdn.simpleicons.org/nextdotjs/94A3B8' },
    { name: 'Python', icon: 'https://cdn.simpleicons.org/python/94A3B8' },
    { name: '', icon: openaiIcon },
    { name: 'Node.js', icon: 'https://cdn.simpleicons.org/nodedotjs/94A3B8' },
    { name: 'PostgreSQL', icon: 'https://cdn.simpleicons.org/postgresql/94A3B8' },
];

const Hero = () => {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center pt-20 pb-24 md:pb-0 overflow-hidden"
        >
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent/[0.07] rounded-full blur-[150px]" />
                <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent-secondary/[0.05] rounded-full blur-[150px]" />
                <div className="absolute inset-0 noise-overlay" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-accent text-sm font-medium mb-8"
                >
                    <Sparkles size={14} />
                    <span>Building SaaS & AI Products</span>
                </motion.div>

                {/* Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.08 }}
                    className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-text-primary mb-6 leading-[1.1] tracking-tight"
                >
                    Hi, I'm{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-secondary">
                        Louis Salvosa
                    </span>
                    <br />
                    <span className="text-text-secondary text-3xl sm:text-4xl md:text-5xl font-semibold">
                        Full-Stack Developer
                    </span>
                </motion.h1>

                {/* Subheading */}
                <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.16 }}
                    className="text-base md:text-lg text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    I design and build full-stack web applications, SaaS platforms, and
                    AI-powered tools. Focused on clean architecture, great UX, and
                    shipping products that solve real problems.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.24 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center mb-20"
                >
                    <a
                        href="#projects"
                        className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-accent text-white rounded-full font-semibold text-sm hover:shadow-[0_0_24px_rgba(59,130,246,0.35)] transition-all duration-200 cursor-pointer"
                    >
                        View Projects
                        <ArrowRight
                            size={16}
                            className="group-hover:translate-x-0.5 transition-transform duration-200"
                        />
                    </a>
                    <a
                        href="#contact"
                        className="inline-flex items-center justify-center gap-2 px-7 py-3.5 glass hover:bg-white/[0.08] text-text-primary rounded-full font-semibold text-sm transition-all duration-200 cursor-pointer"
                    >
                        Get in Touch
                    </a>
                </motion.div>

                {/* Tech Stack Bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.32 }}
                    className="border-t border-white/[0.06] pt-8"
                >
                    <p className="text-text-secondary/60 text-xs mb-5 uppercase tracking-widest font-medium">
                        Technologies I Work With
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
                        {techStack.map((tech) => (
                            <div
                                key={tech.name}
                                className="flex items-center gap-2 opacity-50 hover:opacity-80 transition-opacity duration-200"
                                title={tech.name}
                            >
                                <img
                                    src={tech.icon}
                                    alt={tech.name}
                                    className="h-5 w-auto"
                                />
                                <span className="text-text-secondary text-xs font-medium hidden sm:inline">
                                    {tech.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
