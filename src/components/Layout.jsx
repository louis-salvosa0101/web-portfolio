import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen min-h-[100dvh] bg-primary text-text-primary overflow-x-hidden">
            <Navbar />
            <main className="w-full max-w-[100vw]">{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
