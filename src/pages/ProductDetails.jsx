import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Footer from '../components/FooterNew';
import './ProductDetail.css';


// Placeholder product data - you will replace this with your actual data
const allProducts = {
 'timewatch-trueface': {
 name: 'TrueFace 1000E',
 brand: 'TimeWatch',
 image: 'https://placehold.co/800x600/F0F9FF/1E40AF?text=TrueFace+1000E',
 gallery: [
 'https://placehold.co/800x600/E0E7FF/1E40AF?text=TrueFace+Side',
 'https://placehold.co/800x600/D1FAE5/065F46?text=TrueFace+Angle',
 'https://placehold.co/800x600/BFDBFE/60A5FA?text=TrueFace+Interface',
 ],
 description: 'The TrueFace 1000E is an AI-based speed face recognition terminal with a robust design and high accuracy. It supports multiple verification methods including face, palm, and card.',
 features: [
 'AI-powered face recognition',
 'Palm vein recognition',
 'Contactless operation for hygiene',
 'Large capacity for users and logs',
 'Multiple communication interfaces (TCP/IP, Wi-Fi)',
 'Integration with access control systems',
 'Anti-spoofing algorithm for enhanced security',
 ],
 specifications: {
 'Display': '5-inch Touch Screen',
 'Face Capacity': '3,000',
 'Palm Capacity': '3,000',
 'Card Capacity': '10,000',
 'Transaction Capacity': '100,000',
 'Verification Speed': '< 0.3 seconds',
 'Operating System': 'Linux',
 'Power Supply': 'DC 12V/2A',
 },
 },
 'zektra-loose': {
 name: 'ZEKTRA 2000',
 brand: 'Zektra',
 image: 'https://placehold.co/800x600/BFDBFE/60A5FA?text=ZEKTRA+2000',
 gallery: [
 'https://placehold.co/800x600/E0E7FF/1E40AF?text=ZEKTRA+2000+Back',
 'https://placehold.co/800x600/D1FAE5/065F46?text=ZEKTRA+2000+Top',
 ],
 description: 'The ZEKTRA 2000 is a high-speed loose note counting machine designed for accuracy and efficiency. It features counterfeit detection and a user-friendly interface.',
 features: [
 'High-speed counting up to 1000 notes/min',
 'Automatic counterfeit detection (UV, MG)',
 'Batching and adding functions',
 'Large hopper and stacker capacity',
 'User-friendly LCD display',
 'Self-diagnostic system',
 ],
 specifications: {
 'Counting Speed': '1000 notes/min',
 'Hopper Capacity': '300 notes',
 'Stacker Capacity': '200 notes',
 'Note Size': '50 x 110 mm to 90 x 190 mm',
 'Power Consumption': '≤ 80W',
 'Dimensions': '248 x 298 x 175 mm',
 },
 },
 // Add other product details here following the same structure
};


const ProductDetail = () => {
 const { productId } = useParams();
 const product = allProducts?.[productId];


 const gallerySettings = {
 dots: true,
 infinite: true,
 speed: 500,
 slidesToShow: 1,
 slidesToScroll: 1,
 autoplay: true,
 autoplaySpeed: 3000,
 };


 if (!product) {
 return (
 <div className="product-detail-page">
 <div className="products-container">
 <h2>Product Not Found</h2>
 <p>The requested product could not be found.</p>
 <Link to="/products" className="btn btn-primary">Back to Products</Link>
 </div>
 <Footer />
 </div>
 );
 }


 return (
 <div className="product-detail-page">
 <section className="product-overview">
 <div className="products-container">
 <div className="overview-grid">
 <div className="image-gallery">
 <img src={product.image} alt={product.name} className="main-image" />
 {product.gallery && product.gallery.length > 0 && (
 <div className="thumbnail-slider">
 <Slider {...gallerySettings}>
 {product.gallery.map((img, index) => (
 <div key={index} className="thumbnail-slide">
 <img src={img} alt={`${product.name} - Gallery ${index + 1}`} />
 </div>
 ))}
 </Slider>
 </div>
 )}
 </div>
 <div className="product-details">
 <h1 className="product-title">{product.name}</h1>
 <p className="product-brand">Brand: {product.brand}</p>
 <p className="product-description">{product.description}</p>


 <h2 className="section-subtitle">Key Features</h2>
 <ul className="feature-list">
 {product.features.map((feature, index) => (
 <li key={index}>{feature}</li>
 ))}
 </ul>


 <h2 className="section-subtitle">Specifications</h2>
 <ul className="specification-list">
 {Object.entries(product.specifications).map(([key, value]) => (
 <li key={key}><strong>{key}:</strong> {value}</li>
 ))}
 </ul>


 <Link to="/contact" className="btn btn-primary">Contact Us for a Quote</Link>
 </div>
 </div>
 </div>
 </section>


 <Footer />
 </div>
 );
};


export default ProductDetail;