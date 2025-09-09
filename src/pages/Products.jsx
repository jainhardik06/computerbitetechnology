import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Footer from '../components/FooterNew';
import './Products.css';

const brandLogos = [
    { name: 'TimeWatch', src: '/brands/timewatch.png', alt: 'TimeWatch Logo' },
    { name: 'Realtime Biometrics', src: '/brands/realtime.png', alt: 'Realtime Biometrics Logo' },
    { name: 'MantraTec', src: '/brands/mantra.svg', alt: 'MantraTec Logo' }, // Corrected extension
    { name: 'Vibranium', src: '/brands/vibranium.svg', alt: 'Vibranium Logo' }, // Corrected extension
    { name: 'WBOX Tech', src: '/brands/wbox.jpg', alt: 'WBOX Tech Logo' },
    { name: 'Mivanta', src: '/brands/mivanta.png', alt: 'Mivanta Logo' },
    { name: 'NP-Tech', src: '/brands/np-tech.png', alt: 'NP-Tech Logo' },
    { name: 'Zektra', src: '/brands/zektra.png', alt: 'Zektra Logo' }
];
const featuredProducts = [
  { id: 'timewatch-trueface', name: 'TimeWatch TrueFace Series', image: 'https://www.timewatchindia.com/static/media/trueface-6000.577aacf1a9ba5f4b3ec9.jpg', description: 'AI-Based face and palm access control for secure entry.' },
  { id: 'zektra-loose', name: 'Zektra Note Counter', image: 'https://zektra.in/wp-content/uploads/2025/07/4002-600x600.jpg', description: 'High-speed and accurate machines for counting currency notes.' },
  { id: 'wbox-dvr', name: 'WBOX Tech DVR', image: 'https://cdn.shopaccino.com/startech/products/wbox-dvr-323673_s.jpg?v=499', description: 'Reliable digital video recorders in 4, 8, and 16-channel variants.' },
  { id: 'vibranium-threat', name: 'Vibranium Threat Security', image: 'https://vibranium.co.in/wp-content/uploads/2025/02/Detection-to-Identify-Cybersecurity-Threats-On-Time.png', description: 'On-demand scans, realtime protection, and cloud-based threat detection.' },
];

const mainCategories = [
    { name: 'Attendance & Access Control', id: 'attendance-access', image: 'https://techser.com/networking/wp-content/uploads/2019/07/sol11.jpg' },
    { name: 'CCTV & Surveillance', id: 'cctv', image: 'https://www.shutterstock.com/image-photo/surveillance-camera-face-recognition-system-600nw-2306132609.jpg' },
    { name: 'Currency & Billing Solutions', id: 'currency', image: 'https://m.media-amazon.com/images/I/81mvnm20JYL._UF1000,1000_QL80_.jpg' },
    { name: 'Entrance & Parking Control', id: 'entrance', image: 'https://www.conurets.com/wp-content/uploads/2025/03/Entrance-Barrier.webp' },
    { name: 'Home Security', id: 'inspection', image: 'https://www.security.org/app/uploads/2024/09/best-systems-1.jpg' },
    { name: 'Software Solutions', id: 'software', image: 'https://vibranium.co.in/wp-content/uploads/2025/02/Detection-to-Identify-Cybersecurity-Threats-On-Time.png' }
];

const Products = () => {
    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 5000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        pauseOnHover: true,
        arrows: false,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 3 } },
            { breakpoint: 768, settings: { slidesToShow: 2 } },
            { breakpoint: 480, settings: { slidesToShow: 1 } }
        ]
    };

    const featuredSliderSettings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 768, settings: { slidesToShow: 1 } }
        ]
    };

    return (
        <div className="products-page">
            {/* Immersive Hero Section */}
            <section className="products-hero-section">
                <div className="products-container hero-grid">
                    <div className="hero-text-content">
                        <h1 className="hero-title">
                            <span className="title-main">Advanced Security,</span>
                            <span className="title-accent">Simplified</span>
                        </h1>
                        <p className="hero-description">
                            Explore our comprehensive range of products categorized for your convenience.
                        </p>
                    </div>
                    <div className="hero-image-container">
                        <img 
                            src="https://computerbitetechnology.in/images/resource/image-1.jpg" 
                            alt="Advanced Security" 
                            className="hero-image"
                        />
                    </div>
                </div>
            </section>

            {/* Featured Products Section */}
            <section className="featured-products-section">
                <div className="products-container">
                    <h2 className="section-heading">Featured Products</h2>
                    <Slider {...featuredSliderSettings} className="featured-slider">
                        {featuredProducts.map((product, index) => (
                            <div key={index} className="featured-slide">
                                <Link to={`/products/details/${product.id}`} className="featured-card">
                                    <img src={product.image} alt={product.name} className="featured-image" />
                                    <div className="featured-info">
                                        <h3 className="featured-title">{product.name}</h3>
                                        <p className="featured-description">{product.description}</p>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </Slider>
                </div>
            </section>

            {/* Main Category Grid */}
            <section className="category-grid-section">
                <div className="products-container">
                    <h2 className="section-heading">Product Categories</h2>
                    <div className="category-grid">
                        {mainCategories.map((category) => (
                            <Link to={`/products/category/${category.id}`} key={category.id} className="category-card">
                                <img src={category.image} alt={category.name} className="category-image" />
                                <div className="category-overlay">
                                    <h3 className="category-title">{category.name}</h3>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
            
            {/* Brands We Deal In Section - Functional Slider */}
            <section className="brands-slider-section">
                <div className="products-container">
                    <h2 className="section-heading brands-heading">Trusted Brands</h2>
                    <Slider {...sliderSettings} className="brand-slider">
                        {brandLogos.map((brand, index) => (
                            <div key={index} className="brand-logo-slide">
                                <img src={brand.src} alt={brand.alt} className="brand-logo" />
                            </div>
                        ))}
                    </Slider>
                </div>
            </section>

                        {/* CTA Section */}
                        <section className="cta-section">
                            <div className="container">
                                <div className="cta-content">
                                    <h2 className="cta-title">Ready to Secure Your Business?</h2>
                                    <p className="cta-description">
                                        Get a personalized security consultation and discover how our solutions can protect your business
                                    </p>
                                    <div className="cta-buttons">
                                        <Link to="/contact#contact-form" className="btn btn-white">Schedule Free Consultation</Link>
                                        <Link to="/products" className="btn btn-outline">View Our Portfolio</Link>
                                    </div>
                                </div>
                            </div>
                        </section>

            <Footer />
        </div>
    );
};

export default Products;