import React, { useRef } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProductsSection from '../components/ProductsSection';
import ReviewsSection from '../components/ReviewsSection';
import Footer from '../components/Footer';

function Home() {
    const aboutRef = useRef(null);
    const productsRef = useRef(null);
    const reviewsRef = useRef(null);

    return (
        <div className="min-h-screen bg-amber-50">
            <Navbar aboutRef={aboutRef} productsRef={productsRef} reviewsRef={reviewsRef} />
            <HeroSection />
            <AboutSection ref={aboutRef} />
            <ProductsSection ref={productsRef} />
            <ReviewsSection ref={reviewsRef} />
            <Footer />
        </div>
    );
}

export default Home;
