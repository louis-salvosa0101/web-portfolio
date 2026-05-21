import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, ChevronLeft, ChevronRight, AlertTriangle } from 'lucide-react';

const projects = [
    {
        title: 'SignaFlow',
        category: 'Full Stack',
        description: 'A full-stack document approval and digital signatory management system built for organizations that need a structured, auditable way to route letters and documents through multiple approvers. It features a sequential approval workflow where each signatory reviews, signs, and either approves, rejects, or requests revisions — with every action tracked in real time. Approved documents are generated as signed PDFs embedded with a QR code, allowing anyone to verify authenticity instantly through a public endpoint without logging in.',
        tags: ['Next.js', 'FastAPI', 'PostgreSQL', 'Supabase Storage', 'JWT'],
        images: [
            '/projects/signaflow/signaflow.png',
            '/projects/signaflow/signaflow1.png',
            '/projects/signaflow/signaflow2.png',
            '/projects/signaflow/signaflow3.png'
        ],
        features: [
            'Sequential approval workflow with real-time status tracking.',
            'Signed PDF generation embedded with secure verification QR codes.',
            'Public verification endpoint that requires no login.',
            'JWT session management stored securely in HttpOnly cookies.'
        ],
        role: 'Designed PostgreSQL schema and FastAPI database routers. Engineered the sequential document routing queue workflow. Configured Supabase Storage buckets integration.',
        github: 'https://github.com/louis-salvosa0101/signaflow',
        demo: 'https://signaflow.example.com',
    },
    {
        title: 'QR Attendance System',
        category: 'Web App',
        description: 'A web-based attendance tracking tool built for school events, replacing the traditional pen-and-paper logbook where students manually write their name and time in and out. Officers create time-limited sessions per event and scan student QR codes via a browser webcam to instantly record attendance — no handwriting or manual entry needed. Student identity data is protected using AES-256-CBC encryption, so QR cards cannot be forged or replicated without the server key. The system handles late detection, absent marking, and partial attendance on session close, and automatically calculates fines in Philippine Pesos. Officers can import students in bulk via Excel, export attendance reports, and track each student\'s fine balance and payment history.',
        tags: ['Flask', 'PostgreSQL', 'Supabase', 'AES-256', 'Render'],
        images: [
            '/projects/qr-attendance/qr-attendance.png',
            '/projects/qr-attendance/qr-attendance1.png',
            '/projects/qr-attendance/qr-attendance2.png',
            '/projects/qr-attendance/qr-attendance3.png'
        ],
        features: [
            'Browser webcam scanner for student QR attendance logging.',
            'AES-256-CBC cryptographic encryption protecting student ID credentials.',
            'Automatic late, absent, and Philippine Peso fine detection logic.',
            'Bulk student list uploads via Excel and CSV exports.'
        ],
        role: 'Created client webcam QR scanner overlay with HTML5 canvas. Implemented AES-256 student data encryption routines. Configured Render deployments and Supabase Postgres backend.',
        github: 'https://github.com/louis-salvosa0101/qr-attendance',
        demo: 'https://qr-attendance.example.com',
    }
];


// Carousel slide transition variants
const slideVariants = {
    enter: (direction) => ({
        x: direction > 0 ? '100%' : '-100%',
        opacity: 0
    }),
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1
    },
    exit: (direction) => ({
        zIndex: 0,
        x: direction < 0 ? '100%' : '-100%',
        opacity: 0
    })
};

// Modal transition variants
const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};

const modalVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: { 
        scale: 1, 
        opacity: 1,
        transition: { type: 'spring', damping: 25, stiffness: 350 }
    },
    exit: { 
        scale: 0.95, 
        opacity: 0,
        transition: { duration: 0.2 }
    }
};

const resolvePath = (path) => {
    if (!path) return '';
    if (path.startsWith('http') || path.startsWith('data:') || path.startsWith('blob:')) {
        return path;
    }
    const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    return `${base}${cleanPath}`;
};

const SafeImage = ({ src, alt, className, ...props }) => {
    const [hasError, setHasError] = useState(false);

    if (hasError) {
        return (
            <div className="w-full h-full flex flex-col items-center justify-center bg-zinc-900 text-zinc-600 p-4 text-center select-none">
                <AlertTriangle size={32} className="mb-1 text-zinc-500" />
                <span className="text-xs font-display">Image Missing</span>
            </div>
        );
    }

    return (
        <img
            src={resolvePath(src)}
            alt={alt}
            className={className}
            onError={() => setHasError(true)}
            {...props}
        />
    );
};

const Carousel = ({ images, title, imageFit = 'cover' }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);
    const [imageErrors, setImageErrors] = useState({});

    const handleNext = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const handlePrev = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const handleDotClick = (index) => {
        setDirection(index > currentIndex ? 1 : -1);
        setCurrentIndex(index);
    };

    const handleTouchStart = (e) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > 50;
        const isRightSwipe = distance < -50;

        if (isLeftSwipe) {
            handleNext();
        } else if (isRightSwipe) {
            handlePrev();
        }

        setTouchStart(null);
        setTouchEnd(null);
    };

    const currentImage = images[currentIndex];
    const isError = imageErrors[currentIndex];

    return (
        <div 
            className={`relative w-full h-full flex flex-col justify-between overflow-hidden group/carousel ${imageFit === 'contain' ? 'bg-zinc-950' : 'bg-black/40'}`}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            {/* Viewport */}
            <div className="relative flex-1 flex items-center justify-center overflow-hidden">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                    {isError ? (
                        <motion.div
                            key="error"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="w-full h-full flex flex-col items-center justify-center bg-zinc-900/80 text-zinc-500 p-8 text-center"
                        >
                            <AlertTriangle size={48} className="text-accent mb-2 animate-pulse" />
                            <p className="font-display font-medium text-sm text-zinc-300">Screenshot Unavailable</p>
                            <p className="text-xs mt-1 text-zinc-500">Asset could not be loaded</p>
                        </motion.div>
                    ) : (
                        <motion.img
                            key={currentIndex}
                            src={resolvePath(currentImage)}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.25 }
                            }}
                            onError={() => setImageErrors(prev => ({ ...prev, [currentIndex]: true }))}
                            alt={`${title} screenshot ${currentIndex + 1}`}
                            className={`w-full h-full select-none ${imageFit === 'contain' ? 'object-contain' : 'object-cover'}`}
                            loading={currentIndex === 0 ? "eager" : "lazy"}
                        />
                    )}
                </AnimatePresence>

                {/* Left/Right Controls */}
                {images.length > 1 && (
                    <>
                        <button
                            onClick={handlePrev}
                            className="absolute left-2 sm:left-4 touch-target p-2 rounded-full bg-black/50 hover:bg-black/70 active:bg-black/80 text-white transition-all border border-white/10 opacity-100 sm:opacity-0 sm:group-hover/carousel:opacity-100 focus-visible:opacity-100 focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none z-10"
                            aria-label="Previous screenshot"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            onClick={handleNext}
                            className="absolute right-2 sm:right-4 touch-target p-2 rounded-full bg-black/50 hover:bg-black/70 active:bg-black/80 text-white transition-all border border-white/10 opacity-100 sm:opacity-0 sm:group-hover/carousel:opacity-100 focus-visible:opacity-100 focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none z-10"
                            aria-label="Next screenshot"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </>
                )}
            </div>

            {/* Thumbnail Indicators */}
            {images.length > 1 && (
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
                    {images.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => handleDotClick(idx)}
                            className={`h-2 rounded-full transition-all duration-300 focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none ${
                                idx === currentIndex 
                                ? 'bg-accent w-6' 
                                : 'bg-white/30 hover:bg-white/50 w-2'
                            }`}
                            aria-label={`Go to screenshot ${idx + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const modalRef = useRef(null);

    // Lock body scroll when modal is open
    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [selectedProject]);

    // Handle ESC and Arrow keys for Carousel control when modal is active
    useEffect(() => {
        if (!selectedProject) return;

        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                setSelectedProject(null);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedProject]);

    // Focus Trapping Effect
    useEffect(() => {
        if (!selectedProject) return;

        const modalElement = modalRef.current;
        if (!modalElement) return;

        // Interactive focusable selectors
        const focusableSelectors = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';
        
        // Save previously focused element to return focus later
        const previousActiveElement = document.activeElement;

        // Auto-focus first element
        const focusableElements = Array.from(modalElement.querySelectorAll(focusableSelectors));
        if (focusableElements.length > 0) {
            focusableElements[0].focus();
        }

        const handleTabTrap = (e) => {
            if (e.key !== 'Tab') return;

            const currentElements = Array.from(modalElement.querySelectorAll(focusableSelectors));
            if (currentElements.length === 0) return;

            const first = currentElements[0];
            const last = currentElements[currentElements.length - 1];

            if (e.shiftKey) {
                if (document.activeElement === first) {
                    last.focus();
                    e.preventDefault();
                }
            } else {
                if (document.activeElement === last) {
                    first.focus();
                    e.preventDefault();
                }
            }
        };

        window.addEventListener('keydown', handleTabTrap);

        return () => {
            window.removeEventListener('keydown', handleTabTrap);
            if (previousActiveElement && typeof previousActiveElement.focus === 'function') {
                previousActiveElement.focus();
            }
        };
    }, [selectedProject]);

    return (
        <section id="projects" className="section-padding relative overflow-hidden">
            <div className="max-w-7xl mx-auto container-padding">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-10 sm:mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-3 sm:mb-4">Web Development Projects</h2>
                    <div className="h-1 w-20 bg-accent rounded-full" />
                </motion.div>

                {/* Grid Layout — auto-fit + justify-center keeps cards centered when fewer than 3 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(min(100%,320px),380px))] justify-center gap-4 sm:gap-6 md:gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -6, transition: { duration: 0.2 } }}
                            onClick={() => setSelectedProject(project)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    e.preventDefault();
                                    setSelectedProject(project);
                                }
                            }}
                            tabIndex={0}
                            role="button"
                            aria-label={`View details for ${project.title}`}
                            className="group relative bg-secondary rounded-xl overflow-hidden border border-white/5 hover:border-accent/40 transition-colors w-full cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                        >
                            <div className="aspect-video overflow-hidden relative bg-black">
                                <SafeImage
                                    src={project.images[0]}
                                    alt={project.title}
                                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent opacity-60 pointer-events-none" />
                            </div>

                            <div className="p-4 sm:p-6">
                                <div className="mb-3">
                                    <span className="text-accent text-xs font-bold tracking-wider uppercase">{project.category}</span>
                                    <h3 className="text-xl font-bold text-white mt-1 group-hover:text-accent transition-colors font-display">{project.title}</h3>
                                </div>

                                <p className="text-text-secondary text-sm mb-6 line-clamp-2">{project.description}</p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="px-2.5 py-1 bg-white/5 rounded-md text-[11px] font-medium text-white border border-white/10">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Expansion Detailed View Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 md:p-6">
                        {/* Backdrop overlay */}
                        <motion.div
                            variants={backdropVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            onClick={() => setSelectedProject(null)}
                            className="fixed inset-0 bg-primary/90 backdrop-blur-md cursor-pointer"
                        />

                        {/* Modal Body — carousel top, details bottom */}
                        <motion.div
                            ref={modalRef}
                            variants={modalVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby="modal-title"
                            className="relative bg-secondary w-full max-w-4xl rounded-t-2xl sm:rounded-2xl overflow-hidden border border-white/10 shadow-2xl z-10 flex flex-col max-h-[92dvh] sm:max-h-[min(92vh,880px)] text-left"
                        >
                            {/* Top: Image carousel */}
                            <div className="relative shrink-0 bg-black border-b border-white/10">
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 touch-target p-2 rounded-full bg-black/50 hover:bg-black/75 active:bg-black/90 text-white transition-colors border border-white/10 focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none"
                                    aria-label="Close modal"
                                >
                                    <X size={20} />
                                </button>
                                <div className="aspect-video w-full max-h-[38vh] min-[480px]:max-h-[42vh] sm:max-h-[48vh] relative overflow-hidden">
                                    <Carousel
                                        images={selectedProject.images}
                                        title={selectedProject.title}
                                        imageFit="contain"
                                    />
                                </div>
                            </div>

                            {/* Bottom: Scrollable description & details */}
                            <div className="flex flex-col flex-1 min-h-0">
                                <div className="flex-1 overflow-y-auto overscroll-contain p-4 sm:p-6 md:p-8 space-y-5 sm:space-y-6">
                                    <div>
                                        <span className="text-accent text-xs font-bold tracking-wider uppercase">{selectedProject.category}</span>
                                        <h3 id="modal-title" className="text-xl sm:text-2xl md:text-3xl font-bold font-display text-white mt-1 pr-10">
                                            {selectedProject.title}
                                        </h3>
                                    </div>

                                    <div>
                                        <h4 className="text-white font-bold font-display text-[11px] uppercase tracking-wider mb-2">About</h4>
                                        <p className="text-text-secondary text-sm md:text-[15px] leading-relaxed">
                                            {selectedProject.description}
                                        </p>
                                    </div>

                                    <div className="grid sm:grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="text-white font-bold font-display text-[11px] uppercase tracking-wider mb-2">Key Features</h4>
                                            <ul className="space-y-2 text-text-secondary text-sm">
                                                {selectedProject.features.map((feat, idx) => (
                                                    <li key={idx} className="flex items-start gap-2">
                                                        <span className="text-accent mt-1 shrink-0">•</span>
                                                        <span>{feat}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div>
                                            <h4 className="text-white font-bold font-display text-[11px] uppercase tracking-wider mb-2">My Role / Contributions</h4>
                                            <p className="text-text-secondary text-sm leading-relaxed">
                                                {selectedProject.role}
                                            </p>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="text-white font-bold font-display text-[11px] uppercase tracking-wider mb-3">Technologies Used</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedProject.tags.map((tag) => (
                                                <span key={tag} className="px-2.5 py-1 bg-white/5 hover:bg-white/10 rounded-md text-xs font-semibold text-white border border-white/5 transition-colors">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="shrink-0 flex flex-col sm:flex-row gap-3 p-4 sm:p-6 md:px-8 md:pb-8 pb-[max(1rem,env(safe-area-inset-bottom))] border-t border-white/5 bg-secondary">
                                    <a
                                        href={selectedProject.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3.5 min-h-11 bg-white/5 hover:bg-white/10 text-white rounded-lg text-sm font-semibold transition-colors border border-white/10 focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none"
                                    >
                                        <Github size={16} />
                                        Code Repository
                                    </a>
                                    {selectedProject.demo && (
                                        <a
                                            href={selectedProject.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 flex items-center justify-center gap-2 px-4 py-3.5 min-h-11 bg-accent hover:bg-blue-600 text-white rounded-lg text-sm font-semibold transition-colors shadow-lg shadow-blue-500/10 focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none"
                                        >
                                            <ExternalLink size={16} />
                                            Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;
