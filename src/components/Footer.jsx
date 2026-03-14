import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-secondary/50 border-t border-white/5 py-12">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                    <h3 className="text-xl font-display font-bold text-white mb-2 uppercase tracking-tighter">LOUIS SALVOSA</h3>
                    <p className="text-text-secondary text-sm">Crafting intelligent AI automation workflows.</p>
                </div>

                <div className="flex gap-6">
                    {[
                        { Icon: Github, href: 'https://github.com/yourusername' },
                        { Icon: Linkedin, href: 'https://linkedin.com/in/yourusername' },
                        { Icon: Twitter, href: 'https://twitter.com/yourusername' }
                    ].map(({ Icon, href }, i) => (
                        <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transition-colors">
                            <Icon size={20} />
                        </a>
                    ))}
                </div>

                <div className="text-text-secondary text-sm">
                    &copy; {new Date().getFullYear()} LOUIS SALVOSA. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
