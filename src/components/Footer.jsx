import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer id="contact" className="bg-amber-900 text-amber-100">
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-xl font-semibold mb-6 text-white">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <Phone className="w-5 h-5 mr-3 mt-1 text-red-400" />
                                <span>+91-9312631334</span>
                            </li>
                            <li className="flex items-start">
                                <Mail className="w-5 h-5 mr-3 mt-1 text-red-400" />
                                <span>kakainet124@gmail.com</span>
                            </li>
                            <li className="flex items-start">
                                <MapPin className="w-5 h-5 mr-3 mt-1 text-red-400" />
                                <span>2,5D/117, Railway Road, New Industrial Township-5, Faridabad, India - 121001</span>
                            </li>
                        </ul>
                        <div className="mt-6 flex space-x-4">
                            <a href="#" className="text-amber-100 hover:text-white transition-colors">
                                <Facebook className="w-5 h-5" />
                                <span className="sr-only">Facebook</span>
                            </a>
                            <a href="#" className="text-amber-100 hover:text-white transition-colors">
                                <Instagram className="w-5 h-5" />
                                <span className="sr-only">Instagram</span>
                            </a>
                            <a href="#" className="text-amber-100 hover:text-white transition-colors">
                                <Twitter className="w-5 h-5" />
                                <span className="sr-only">Twitter</span>
                            </a>
                            <a href="#" className="text-amber-100 hover:text-white transition-colors">
                                <Linkedin className="w-5 h-5" />
                                <span className="sr-only">LinkedIn</span>
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-xl font-semibold mb-6 text-white">Quick Links</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link to="/" className="hover:text-white transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/products" className="hover:text-white transition-colors">
                                    Products
                                </Link>
                            </li>
                            <li>
                                <a href="#about" className="hover:text-white transition-colors">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition-colors">
                                    Terms & Conditions
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition-colors">
                                    Privacy Policy
                                </a>
                            </li>
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center md:items-end"
                    >
                        <div className="relative w-40 h-40 mb-6">
                            <img
                                src="/logo1.png"
                                alt="Kaka Foods & Caterers Logo"
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <p className="text-sm text-center md:text-right">
                            Premium quality spices and food products for the discerning chef. Elevate your culinary creations with our
                            authentic flavors.
                        </p>
                    </motion.div>
                </div>

                <div className="border-t border-amber-800 mt-12 pt-6 text-center">
                    <p className="text-sm">&copy; {currentYear} Kaka Foods & Caterers. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
