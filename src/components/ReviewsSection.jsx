import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const reviews = [
    {
        id: 1,
        name: "Priya Sharma",
        role: "Home Chef",
        content:
            "Kaka foods & caterers is ideal for any Indian dishes. It has good taste and aroma. Their spices enhance the flavor of my dishes and have many health benefits too.",
        rating: 5,
        avatar: "https://randomuser.me/api/portraits/women/12.jpg",
    },
    {
        id: 2,
        name: "Rajesh Kumar",
        role: "Restaurant Owner",
        content:
            "The quality of spices from Kaka Foods is exceptional. My customers always compliment the authentic flavors in our dishes. Highly recommended for professional kitchens.",
        rating: 5,
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
        id: 3,
        name: "Anita Patel",
        role: "Food Blogger",
        content:
            "I've tried many spice brands, but Kaka Foods stands out for their freshness and potency. Their packaging is also very attractive and keeps the spices fresh longer.",
        rating: 4,
        avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    },
];

const ReviewsSection = forwardRef((props, ref) => {
    return (
        <section ref={ref} className="py-20 bg-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://source.unsplash.com/random/200x200/?pattern')] bg-repeat opacity-10" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-amber-900 mb-4">
                        Customer <span className="text-red-600">Reviews</span>
                    </h2>
                    <div className="h-1 w-24 bg-red-600 mx-auto mb-8" />
                    <p className="max-w-2xl mx-auto text-amber-800">
                        See what our customers have to say about our premium quality products
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <motion.div
                            key={review.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-amber-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                        >
                            <div className="flex items-center mb-4">
                                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                                    <img src={review.avatar || "/placeholder.svg"} alt={review.name} className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-amber-900">{review.name}</h4>
                                    <p className="text-sm text-amber-700">{review.role}</p>
                                </div>
                            </div>

                            <div className="flex mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`w-4 h-4 ${i < review.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
                                    />
                                ))}
                            </div>

                            <p className="text-amber-800 italic">"{review.content}"</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="mt-16 bg-gradient-to-r from-amber-100 to-amber-200 rounded-2xl p-8 md:p-12 shadow-lg"
                >
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h3 className="text-2xl font-bold text-amber-900 mb-4">Experience the Difference</h3>
                            <p className="text-amber-800 mb-6">
                                Join thousands of satisfied customers who have elevated their culinary experiences with our premium
                                spices and food products.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <div className="bg-white rounded-lg px-4 py-2 shadow-md">
                                    <p className="text-2xl font-bold text-red-600">1000+</p>
                                    <p className="text-sm text-amber-700">Happy Customers</p>
                                </div>
                                <div className="bg-white rounded-lg px-4 py-2 shadow-md">
                                    <p className="text-2xl font-bold text-red-600">50+</p>
                                    <p className="text-sm text-amber-700">Products</p>
                                </div>
                                <div className="bg-white rounded-lg px-4 py-2 shadow-md">
                                    <p className="text-2xl font-bold text-red-600">100%</p>
                                    <p className="text-sm text-amber-700">Quality Assured</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-64 md:h-80">
                            <img
                                src="footer.jpeg"
                                alt="Happy customers with our products"
                                className="w-full h-full object-cover rounded-xl"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
});

ReviewsSection.displayName = 'ReviewsSection';
export default ReviewsSection;
