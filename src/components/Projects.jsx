import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        title: 'Enterprise Lead Scoring System',
        category: 'HighLevel + Make',
        description: 'Automated lead capture, qualification, and routing system using HighLevel forms and Make.com complex logic scenarios.',
        tags: ['HighLevel', 'Make', 'OpenAI'],
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800', // Dashboard/Data
    },
    {
        title: 'Multi-Channel Support Bot',
        category: 'n8n Automation',
        description: 'Self-hosted n8n workflow that orchestrates support tickets between Slack, Email, and Jira using AI for sentiment analysis.',
        tags: ['n8n', 'Slack API', 'Jira'],
        image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=800', // Communication/Tech
    },
    {
        title: 'E-commerce Order Sync',
        category: 'Zapier Integration',
        description: 'Robust sync pipeline ensuring 100% data accuracy between Shopify, QuickBooks, and inventory management systems.',
        tags: ['Zapier', 'Shopify', 'Webhooks'],
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=800', // E-commerce
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
