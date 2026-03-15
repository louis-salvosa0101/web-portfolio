import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        title: 'Personal Portfolio Website',
        category: 'Frontend',
        description: 'A modern, responsive portfolio website built with React and Tailwind CSS to showcase my web development skills and projects.',
        tags: ['React', 'Tailwind CSS', 'Vite'],
        image: 'src/assets/project-images/web-portfolio.png',
        github: 'https://github.com/louis-salvosa0101/web-portfolio',
        demo: 'https://louis-salvosa0101.github.io/web-portfolio/',
    },
    // {
    //     title: 'Blog Platform',
    //     category: 'Full Stack',
    //     description: 'A full-featured blog platform with user authentication, post creation, and comments, built using the MERN stack.',
    //     tags: ['MongoDB', 'Express', 'React', 'Node.js'],
    //     image: 'https://via.placeholder.com/400x225?text=Blog+Platform',
    //     github: 'https://github.com/yourusername/blog-platform',
    //     demo: 'https://yourblog.com',
    // },
    // {
    //     title: 'E-commerce Store',
    //     category: 'Frontend',
    //     description: 'A sleek e-commerce storefront with product listings, shopping cart, and checkout flow, built with React and integrated with Stripe for payments.',
    //     tags: ['React', 'Stripe', 'JavaScript'],
    //     image: 'https://via.placeholder.com/400x225?text=E-commerce+Store',
    //     github: 'https://github.com/yourusername/ecommerce-store',
    //     demo: 'https://yourstore.com',
    // },
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
                    <h2 className="text-4xl font-display font-bold text-white mb-4">Web Development Projects</h2>
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
                                    <div className="flex gap-2 relative z-10">
                                        <a href={project.github || '#'} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-white/10 hover:text-accent transition-colors text-white"><Github size={18} /></a>
                                        <a href={project.demo || '#'} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-white/10 hover:text-accent transition-colors text-white"><ExternalLink size={18} /></a>
                                    </div>
                                </div>

                                <p className="text-text-secondary text-sm mb-6 line-clamp-3">{project.description}</p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="px-3 py-1 bg-white/20 rounded-full text-xs font-medium text-white border border-white/30">
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
