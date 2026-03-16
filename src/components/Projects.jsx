import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import webPortfolioImg from '../assets/project-images/web-portfolio.png';

const projects = [
    {
        title: 'Personal Portfolio Website',
        category: 'Frontend',
        description:
            'A modern, responsive portfolio website built with React and Tailwind CSS to showcase my web development skills and projects.',
        tags: ['React', 'Tailwind CSS', 'Vite'],
        image: webPortfolioImg,
        github: 'https://github.com/louis-salvosa0101/web-portfolio',
        demo: 'https://louis-salvosa0101.github.io/web-portfolio/',
    },
    // {
    //     title: 'AI Analytics Dashboard',
    //     category: 'SaaS',
    //     description:
    //         'A SaaS analytics platform with AI-driven insights, real-time data visualization, and automated reporting for business metrics.',
    //     tags: ['Next.js', 'OpenAI API', 'Supabase', 'Stripe'],
    //     image: null,
    //     github: '#',
    //     demo: '#',
    // },
    // {
    //     title: 'Smart Chat Assistant',
    //     category: 'AI / ML',
    //     description:
    //         'An intelligent conversational assistant powered by large language models, with context-aware responses and multi-turn memory.',
    //     tags: ['Python', 'FastAPI', 'LangChain', 'React'],
    //     image: null,
    //     github: '#',
    //     demo: '#',
    // },
];

const PlaceholderImage = ({ category }) => (
    <div className="w-full h-full bg-gradient-to-br from-secondary via-secondary to-accent/[0.08] flex items-center justify-center">
        <span className="text-text-secondary/30 text-xs font-medium uppercase tracking-widest">
            {category}
        </span>
    </div>
);

const Projects = () => {
    return (
        <section id="projects" className="py-24 relative">
            <div className="max-w-6xl mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-14"
                >
                    <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
                        Portfolio
                    </p>
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-text-primary">
                        Featured Projects
                    </h2>
                </motion.div>

                {/* Project Grid */}
                <div className={`gap-6 ${projects.length <= 2 ? 'flex flex-col md:flex-row justify-center items-start' : 'grid md:grid-cols-2 lg:grid-cols-3'}`}>
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08 }}
                            className={`group glass-card rounded-2xl overflow-hidden hover:border-accent/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.06)] transition-all duration-300 w-full ${projects.length <= 2 ? 'max-w-lg' : ''}`}
                        >
                            {/* Image */}
                            <div className="aspect-video overflow-hidden relative">
                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                ) : (
                                    <PlaceholderImage category={project.category} />
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent" />
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-3">
                                    <div>
                                        <span className="text-accent text-xs font-semibold tracking-wider uppercase">
                                            {project.category}
                                        </span>
                                        <h3 className="text-lg font-display font-semibold text-text-primary mt-1 group-hover:text-accent transition-colors duration-200">
                                            {project.title}
                                        </h3>
                                    </div>
                                    <div className="flex gap-1.5">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-text-secondary hover:text-text-primary transition-colors duration-200 cursor-pointer"
                                        >
                                            <Github size={16} />
                                        </a>
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-text-secondary hover:text-text-primary transition-colors duration-200 cursor-pointer"
                                        >
                                            <ArrowUpRight size={16} />
                                        </a>
                                    </div>
                                </div>

                                <p className="text-text-secondary text-sm mb-5 line-clamp-2 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-1.5">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2.5 py-1 bg-white/[0.04] rounded-md text-xs font-medium text-text-secondary"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
