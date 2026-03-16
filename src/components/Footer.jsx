import { Github, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="border-t border-white/[0.06] py-10">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                    <h3 className="text-base font-display font-semibold text-text-primary mb-1 tracking-tight">
                        louis.salvosa
                    </h3>
                    <p className="text-text-secondary text-xs">
                        Full-Stack Developer &middot; SaaS &middot; AI
                    </p>
                </div>

                <div className="flex gap-5">
                    {[
                        { Icon: Github, href: 'https://github.com/louis-salvosa0101' },
                        { Icon: Linkedin, href: 'https://www.linkedin.com/in/louis-salvosa' },
                        { Icon: Instagram, href: 'https://www.instagram.com/louistingting_/' },
                    ].map(({ Icon, href }, i) => (
                        <a
                            key={i}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-text-secondary hover:text-text-primary transition-colors duration-200 cursor-pointer"
                        >
                            <Icon size={18} />
                        </a>
                    ))}
                </div>

                <p className="text-text-secondary/60 text-xs">
                    &copy; {new Date().getFullYear()} Louis Salvosa
                </p>
            </div>
        </footer>
    );
};

export default Footer;
