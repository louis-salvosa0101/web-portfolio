import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-primary text-text-primary overflow-x-hidden">
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
