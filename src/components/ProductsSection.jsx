import React, { forwardRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const categories = [
    { name: "DEHYDRATED GARLIC POWDER", image: '13.jpg' },
    { name: "CARROT POWDER", image: '18.png' },
    { name: "ONION POWDER", image: '14.png' },
    { name: "READY TO EAT MAIN COURSE", image: '26.jpg' },
    { name: "DRY FRUITS", image: '32.jpg' },
    { name: "FRESH FRUITS & VEGETABLES", image: '33.jpg' },
    { name: "DEHYDRATED FRUITS & VEGETABLES", image: '34.jpg' },
    { name: "CORIANDER POWDER", image: '1.jpg' },
    { name: "READY TO EAT PACKED SNACKS", image: '35.jpg' },
];

const ProductCard = ({ category, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            whileHover={{ y: -10 }}
            className="group"
        >
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                    <img
                        src={'/images/products/'+category.image || "https://source.unsplash.com/random/400x400/?spice"}
                        alt={category.name}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                </div>
                <div className="p-6 relative">
                    <h3 className="text-lg font-semibold text-amber-900 mb-2">{category.name}</h3>
                    <div className="h-0.5 w-12 bg-red-600 mb-3" />
                    <Link
                        // to={`/products#${category.name.toLowerCase().replace(/\s+/g, "-")}`}
                        to={`/`}
                        className="inline-block text-red-600 font-medium hover:text-red-700 transition-colors"
                    >
                        View Products →
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

const ProductsSection = forwardRef((props, ref) => {
    const [visibleCategories, setVisibleCategories] = useState(6);

    const showMoreCategories = () => {
        setVisibleCategories(categories.length);
    };

    return (
        <section ref={ref} className="py-20 bg-amber-50">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-amber-900 mb-4">
                        Our <span className="text-red-600">Products</span>
                    </h2>
                    <div className="h-1 w-24 bg-red-600 mx-auto mb-8" />
                    <p className="max-w-2xl mx-auto text-amber-800">
                        Discover our wide range of premium quality spices, seasonings, and food products that will transform your
                        culinary creations.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.slice(0, visibleCategories).map((category, index) => (
                        <ProductCard key={category.name} category={category} index={index} />
                    ))}
                </div>

                {visibleCategories < categories.length && (
                    <div className="text-center mt-12">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={showMoreCategories}
                            className="bg-amber-100 hover:bg-amber-200 text-amber-900 px-8 py-3 rounded-full transition-colors font-medium border border-amber-300"
                        >
                            Show More Products
                        </motion.button>
                    </div>
                )}
            </div>
        </section>
    );
});

ProductsSection.displayName = 'ProductsSection';
export default ProductsSection;
