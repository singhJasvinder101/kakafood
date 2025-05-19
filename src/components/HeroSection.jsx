import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';

function HeroSection() {
    const controls = useAnimation();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            controls.start('visible');
        }
    }, [controls, isInView]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: 'easeOut',
            },
        },
    };

    return (
        <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-amber-100/80 to-amber-50/90 z-10" />
                <img
                    src="hero_image.jpeg"
                    alt="Spices background"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="container mx-auto px-4 z-10 py-20">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        ref={ref}
                        variants={containerVariants}
                        initial="hidden"
                        animate={controls}
                        className="text-center md:text-left"
                    >
                        <motion.h1
                            variants={itemVariants}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-amber-900 leading-tight mb-6"
                        >
                            Elevate Your Culinary Journey with Our <span className="text-red-600">Premium Spices</span>
                        </motion.h1>

                        <motion.p
                            variants={itemVariants}
                            className="text-lg md:text-xl text-amber-800 mb-8 max-w-xl mx-auto md:mx-0"
                        >
                            We invite you to embark on a remarkable culinary adventure filled with the finest, hand-selected spices
                            and seasonings from around the world.
                        </motion.p>

                        <motion.div
                            variants={itemVariants}
                            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                        >
                            <Link
                                to="/products"
                                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full transition-all transform hover:scale-105 font-medium text-lg"
                            >
                                Explore Products
                            </Link>
                            <a
                                href="#about"
                                className="bg-amber-100 hover:bg-amber-200 text-amber-900 px-8 py-3 rounded-full transition-all transform hover:scale-105 font-medium text-lg border border-amber-300"
                            >
                                Learn More
                            </a>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative"
                    >
                        <div className="relativ h-[400px] md:h-[500px] w-full">
                            <img
                                src="hero_image.jpeg"
                                alt="Premium spices collection"
                                className="w-fulle rounded-2xl h-full object-contain"
                            />
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.5 }}
                            className="absolute -bottom-10 -right-10 bg-white rounded-lg shadow-xl p-4 max-w-[200px]"
                        >
                            <p className="text-amber-900 font-medium">Premium Quality Guaranteed</p>
                            <div className="flex mt-2">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <svg key={star} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-amber-50 to-transparent z-10"
            />
        </section>
    );
}

export default HeroSection;
