import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

function Navbar({ aboutRef, productsRef, reviewsRef }) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (ref) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
            setMobileMenuOpen(false);
        }
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
                }`}
        >
            <div className="container mx-auto px-4 flex justify-between items-center">
                <Link to="/" className="flex items-center gap-2">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="text-2xl font-bold text-red-600">Kaka</span>
                        <span className="text-2xl font-semibold text-amber-800"> Foods & Caterers</span>
                    </motion.div>
                </Link>

                <nav className="hidden md:flex items-center gap-8">
                    <button
                        onClick={() => scrollToSection(aboutRef)}
                        className="text-amber-900 hover:text-red-600 transition-colors font-medium"
                    >
                        About Us
                    </button>
                    <button
                        onClick={() => scrollToSection(productsRef)}
                        className="text-amber-900 hover:text-red-600 transition-colors font-medium"
                    >
                        Products
                    </button>
                    <button
                        onClick={() => scrollToSection(reviewsRef)}
                        className="text-amber-900 hover:text-red-600 transition-colors font-medium"
                    >
                        Reviews
                    </button>
                    <Link to="/products" className="text-amber-900 hover:text-red-600 transition-colors font-medium">
                        All Products
                    </Link>
                    <a
                        href="#contact"
                        className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full transition-colors font-medium"
                    >
                        Contact Us
                    </a>
                </nav>

                <button className="md:hidden text-amber-900" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-white border-t"
                    >
                        <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
                            <button
                                onClick={() => scrollToSection(aboutRef)}
                                className="text-amber-900 hover:text-red-600 transition-colors py-2 font-medium text-left"
                            >
                                About Us
                            </button>
                            <button
                                onClick={() => scrollToSection(productsRef)}
                                className="text-amber-900 hover:text-red-600 transition-colors py-2 font-medium text-left"
                            >
                                Products
                            </button>
                            <button
                                onClick={() => scrollToSection(reviewsRef)}
                                className="text-amber-900 hover:text-red-600 transition-colors py-2 font-medium text-left"
                            >
                                Reviews
                            </button>
                            <Link to="/products" className="text-amber-900 hover:text-red-600 transition-colors py-2 font-medium">
                                All Products
                            </Link>
                            <a
                                href="#contact"
                                className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full transition-colors font-medium text-center"
                            >
                                Contact Us
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}

export default Navbar;
