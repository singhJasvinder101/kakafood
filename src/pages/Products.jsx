"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ChevronLeft, Search } from "lucide-react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const categories = [
    { id: "indian-powder-spices", name: "Indian Powder Spices" },
    { id: "indian-vegetable-powder", name: "Indian Vegetable Powder Spices" },
    { id: "indian-raw-spices", name: "Indian Raw Spices" },
    { id: "dry-fruits", name: "Dry Fruits" },
    { id: "fresh-food-vegetables", name: "Fresh Food Vegetables" },
    { id: "dehydrated-fruits-vegetables", name: "Dehydrated Fruits & Vegetables" },
    { id: "snacks-food", name: "Snacks Food" },
    { id: "main-course", name: "Main Course" },
]

const products = {
    "indian-powder-spices": [
        {
            id: 1,
            name: "Coriander Powder",
            image: "https://source.unsplash.com/random/400x400/?coriander,powder",
            description: "Aromatic ground coriander seeds",
        },
        {
            id: 2,
            name: "Kasuri Methi Powder",
            image: "https://source.unsplash.com/random/400x400/?fenugreek,powder",
            description: "Dried fenugreek leaves powder",
        },
        {
            id: 3,
            name: "Turmeric Powder",
            image: "https://source.unsplash.com/random/400x400/?turmeric,powder",
            description: "Vibrant yellow turmeric powder",
        },
        {
            id: 4,
            name: "Black Pepper Powder",
            image: "https://source.unsplash.com/random/400x400/?black,pepper",
            description: "Spicy black pepper powder",
        },
        {
            id: 5,
            name: "Cumin Powder",
            image: "https://source.unsplash.com/random/400x400/?cumin,powder",
            description: "Aromatic ground cumin seeds",
        },
        {
            id: 6,
            name: "Red Chilli Powder",
            image: "https://source.unsplash.com/random/400x400/?chilli,powder",
            description: "Spicy red chilli powder",
        },
    ],
    "indian-vegetable-powder": [
        {
            id: 7,
            name: "Dehydrated Onion Powder",
            image: "https://source.unsplash.com/random/400x400/?onion,powder",
            description: "Concentrated onion flavor",
        },
        {
            id: 8,
            name: "Dehydrated Garlic Powder",
            image: "https://source.unsplash.com/random/400x400/?garlic,powder",
            description: "Aromatic garlic powder",
        },
        {
            id: 9,
            name: "Dehydrated Ginger Powder",
            image: "https://source.unsplash.com/random/400x400/?ginger,powder",
            description: "Spicy ginger powder",
        },
        {
            id: 10,
            name: "Dehydrated Beetroot Powder",
            image: "https://source.unsplash.com/random/400x400/?beetroot,powder",
            description: "Vibrant beetroot powder",
        },
        {
            id: 11,
            name: "Dehydrated Carrot Powder",
            image: "https://source.unsplash.com/random/400x400/?carrot,powder",
            description: "Nutritious carrot powder",
        },
        {
            id: 12,
            name: "Dehydrated Tomato Powder",
            image: "https://source.unsplash.com/random/400x400/?tomato,powder",
            description: "Tangy tomato powder",
        },
    ],
    "indian-raw-spices": [
        {
            id: 13,
            name: "Raw Black Pepper",
            image: "https://source.unsplash.com/random/400x400/?black,peppercorn",
            description: "Whole black peppercorns",
        },
        {
            id: 14,
            name: "Raw Coriander Seeds",
            image: "https://source.unsplash.com/random/400x400/?coriander,seeds",
            description: "Aromatic coriander seeds",
        },
        {
            id: 15,
            name: "Raw Cumin Seeds",
            image: "https://source.unsplash.com/random/400x400/?cumin,seeds",
            description: "Fragrant cumin seeds",
        },
        {
            id: 16,
            name: "Raw Red Chilli",
            image: "https://source.unsplash.com/random/400x400/?red,chilli",
            description: "Spicy whole red chilies",
        },
        {
            id: 17,
            name: "Raw Turmeric",
            image: "https://source.unsplash.com/random/400x400/?turmeric,root",
            description: "Fresh turmeric root",
        },
    ],
    "dry-fruits": [
        {
            id: 18,
            name: "Assorted Dry Fruits",
            image: "https://source.unsplash.com/random/400x400/?dry,fruits",
            description: "Premium quality dry fruits selection",
        },
    ],
    "fresh-food-vegetables": [
        {
            id: 19,
            name: "Fresh Vegetables",
            image: "https://source.unsplash.com/random/400x400/?fresh,vegetables",
            description: "Farm fresh vegetables",
        },
    ],
    "dehydrated-fruits-vegetables": [
        {
            id: 20,
            name: "Dehydrated Fruits & Vegetables",
            image: "https://source.unsplash.com/random/400x400/?dehydrated,fruits",
            description: "Long-lasting dehydrated produce",
        },
    ],
    "snacks-food": [
        {
            id: 21,
            name: "Snacks Food",
            image: "https://source.unsplash.com/random/400x400/?snacks,food",
            description: "Ready to eat snacks",
        },
    ],
    "main-course": [
        {
            id: 22,
            name: "Main Course",
            image: "https://source.unsplash.com/random/400x400/?indian,curry",
            description: "Ready to eat main course meals",
        },
    ],
}

const allProducts = Object.values(products).flat()

function Products() {
    const [activeCategory, setActiveCategory] = useState(categories[0].id)
    const [searchQuery, setSearchQuery] = useState("")
    const [filteredProducts, setFilteredProducts] = useState(products[categories[0].id])

    useEffect(() => {
        if (searchQuery) {
            const results = allProducts.filter(
                (product) =>
                    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    product.description.toLowerCase().includes(searchQuery.toLowerCase()),
            )
            setFilteredProducts(results)
        } else {
            setFilteredProducts(products[activeCategory])
        }
    }, [searchQuery, activeCategory])

    const handleCategoryChange = (categoryId) => {
        setActiveCategory(categoryId)
        setSearchQuery("")
    }

    return (
        <div className="min-h-screen bg-amber-50">
            <Navbar aboutRef={{ current: null }} productsRef={{ current: null }} reviewsRef={{ current: null }} />

            <div className="pt-24 pb-16">
                <div className="container mx-auto px-4">
                    <div className="flex items-center mb-8">
                        <Link to="/" className="text-amber-900 hover:text-red-600 transition-colors flex items-center">
                            <ChevronLeft className="w-5 h-5 mr-1" />
                            Back to Home
                        </Link>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-12"
                    >
                        <h1 className="text-4xl font-bold text-amber-900 mb-4">
                            Our <span className="text-red-600">Products</span>
                        </h1>
                        <div className="h-1 w-24 bg-red-600 mx-auto mb-8" />
                        <p className="max-w-2xl mx-auto text-amber-800">
                            Explore our wide range of premium quality spices, seasonings, and food products
                        </p>
                    </motion.div>

                    <div className="relative mb-8 max-w-md mx-auto">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Search className="h-5 w-5 text-amber-500" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="block w-full pl-10 pr-3 py-2 border border-amber-300 rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        />
                    </div>

                    {!searchQuery && (
                        <div className="flex overflow-x-auto pb-4 mb-8 scrollbar-hide">
                            <div className="flex space-x-2">
                                {categories.map((category) => (
                                    <button
                                        key={category.id}
                                        onClick={() => handleCategoryChange(category.id)}
                                        className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === category.id
                                                ? "bg-red-600 text-white"
                                                : "bg-white text-amber-900 hover:bg-amber-100"
                                            }`}
                                    >
                                        {category.name}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProducts.map((product, index) => (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                whileHover={{ y: -10 }}
                                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={product.image || "https://source.unsplash.com/random/400x400/?spice"}
                                        alt={product.name}
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-amber-900 mb-2">{product.name}</h3>
                                    <p className="text-amber-700 mb-4">{product.description}</p>
                                    <div className="flex justify-between items-center">
                                        <a
                                            href={`#${product.id}`}
                                            className="text-red-600 font-medium hover:text-red-700 transition-colors"
                                        >
                                            View Details
                                        </a>
                                        <div className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">Premium Quality</div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {filteredProducts.length === 0 && (
                        <div className="text-center py-12">
                            <p className="text-amber-800 text-lg">No products found matching your search.</p>
                            <button
                                onClick={() => setSearchQuery("")}
                                className="mt-4 bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full transition-colors"
                            >
                                Clear Search
                            </button>
                        </div>
                    )}
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Products
