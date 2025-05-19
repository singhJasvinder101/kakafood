import React, { forwardRef, useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const AboutSection = forwardRef((props, ref) => {
    const controls = useAnimation();
    const viewRef = useRef(null);
    const isInView = useInView(viewRef, { once: true, threshold: 0.2 });

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
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
            },
        },
    };

    return (
        <section ref={ref} className="py-10 bg-white relative overflow-hidden" id="about">
            <div className="container mx-auto px-4">
                <motion.div
                    ref={viewRef}
                    variants={containerVariants}
                    initial="hidden"
                    animate={controls}
                    className="max-w-4xl mx-auto text-center mb-16"
                >
                    <motion.h2 variants={itemVariants} className="text-4xl font-bold text-amber-900 mb-4">
                        About <span className="text-red-600">Us</span>
                    </motion.h2>
                    <motion.div variants={itemVariants} className="h-1 w-24 bg-red-600 mx-auto mb-8" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl">
                            <video
                                autoPlay
                                loop
                                muted
                                src="video.mp4"
                                alt="Our spice production"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-6 -right-6 bg-red-600 text-white p-6 rounded-lg shadow-lg max-w-[200px]">
                            <p className="font-semibold">Established 2022</p>
                            <p className="text-sm mt-1">Haryana, India</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-semibold text-amber-900 mb-6">Premium Quality Food Products</h3>
                        <p className="text-amber-800 mb-6 leading-relaxed">
                            We are exporters and retailers of products in which we deal with raw and grinded spices, fresh fruits &
                            vegetables, dehydrated fruits & vegetables, powder form fruits & vegetables, dry fruits, ready to eat
                            snacks food, and ready to serve main course food.
                        </p>
                        <p className="text-amber-800 mb-6 leading-relaxed">
                            Quality is at the very forefront of our pursuits. We are committed to providing superior quality products
                            through an efficient quality management system to satisfy & fulfill the stated & unstated needs of our
                            customers.
                        </p>
                        <div className="grid grid-cols-2 gap-4 mt-8">
                            <div className="bg-amber-50 p-4 rounded-lg">
                                <h4 className="font-semibold text-amber-900">Premium Sourcing</h4>
                                <p className="text-sm text-amber-700 mt-2">Carefully selected ingredients from the best sources</p>
                            </div>
                            <div className="bg-amber-50 p-4 rounded-lg">
                                <h4 className="font-semibold text-amber-900">Quality Testing</h4>
                                <p className="text-sm text-amber-700 mt-2">Rigorous quality assurance for every product</p>
                            </div>
                            <div className="bg-amber-50 p-4 rounded-lg">
                                <h4 className="font-semibold text-amber-900">Modern Processing</h4>
                                <p className="text-sm text-amber-700 mt-2">State-of-the-art facilities for processing</p>
                            </div>
                            <div className="bg-amber-50 p-4 rounded-lg">
                                <h4 className="font-semibold text-amber-900">Global Standards</h4>
                                <p className="text-sm text-amber-700 mt-2">Meeting international quality standards</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
});

AboutSection.displayName = 'AboutSection';
export default AboutSection;
