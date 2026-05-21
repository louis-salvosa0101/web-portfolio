import { Github, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-secondary/50 border-t border-white/5 py-10 sm:py-12 pb-[max(2.5rem,env(safe-area-inset-bottom))]">
            <div className="max-w-7xl mx-auto container-padding flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
                <div>
                    <h3 className="text-lg sm:text-xl font-display font-bold text-white mb-2 uppercase tracking-tighter">LOUIS SALVOSA</h3>
                    <p className="text-text-secondary text-sm">Building modern, high-performance web applications.</p>
                </div>

                <div className="flex gap-6">
                    {[
                        { Icon: Github, href: 'https://github.com/louis-salvosa0101' },
                        { Icon: Linkedin, href: 'https://www.linkedin.com/in/louis-salvosa' },
                        { Icon: Instagram, href: 'https://www.instagram.com/louistingting_/' }
                    ].map(({ Icon, href }, i) => (
                        <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="touch-target text-text-secondary hover:text-accent transition-colors rounded-lg hover:bg-white/5">
                            <Icon size={22} />
                        </a>
                    ))}
                </div>

                <div className="text-text-secondary text-xs sm:text-sm max-w-xs md:max-w-none">
                    &copy; {new Date().getFullYear()} LOUIS SALVOSA. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
