import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        title: 'Project Title', // Edit this
        category: 'Category', // Edit this
        description: 'Short project description goes here.', // Edit this
        tags: ['Tag1', 'Tag2'], // Edit or add tags
        image: 'https://via.placeholder.com/400x225?text=Project+Image', // Replace with your image URL
    },
];

const Projects = () => {
    return (
        <section id="projects" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-4xl font-display font-bold text-white mb-4">Selected Works</h2>
                    <div className="h-1 w-20 bg-accent rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative bg-secondary rounded-xl overflow-hidden border border-white/5 hover:border-accent/50 transition-colors"
                        >
                            <div className="aspect-video overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent opacity-80" />
                            </div>

                            <div className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <span className="text-accent text-xs font-bold tracking-wider uppercase">{project.category}</span>
                                        <h3 className="text-xl font-bold text-white mt-1 group-hover:text-accent transition-colors">{project.title}</h3>
                                    </div>
                                    <div className="flex gap-2">
                                        <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors text-white"><Github size={18} /></a>
                                        <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors text-white"><ExternalLink size={18} /></a>
                                    </div>
                                </div>

                                <p className="text-text-secondary text-sm mb-6 line-clamp-3">{project.description}</p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="px-3 py-1 bg-white/5 rounded-full text-xs text-text-secondary border border-white/5">
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
