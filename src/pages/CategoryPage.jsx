import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Footer from '../components/FooterNew';
import './CategoryPage.css'; // New CSS file for this page

// A single, comprehensive data structure for all products
const allProducts = [
    { id: 'timewatch-trueface', categoryId: 'attendance-access', name: 'TrueFace Series', brand: 'TimeWatch', image: 'https://placehold.co/600x450/F0F9FF/1E40AF?text=TrueFace', description: 'AI-Based face and palm access control devices for secure entry.' },
    { id: 'realtime-longrange-ai', categoryId: 'attendance-access', name: 'Long Range AI Face Recognition', brand: 'Realtime', image: 'https://placehold.co/600x450/DBEAFE/3B82F6?text=Realtime+AI+Face', description: 'Advanced facial recognition that provides seamless, touchless access from a distance.' },
    { id: 'mantra-mfstab', categoryId: 'attendance-access', name: 'MFSTAB Integrated Fingerprint Device', brand: 'MantraTec', image: 'https://placehold.co/600x450/E0F2FE/2563EB?text=Mantra+MFSTAB', description: 'An all-in-one Android-based terminal with integrated fingerprint scanning.' },
    { id: 'mivanta-biometric', categoryId: 'attendance-access', name: 'Mivanta Biometric Scanner', brand: 'Mivanta', image: 'https://placehold.co/600x450/C3DAFE/1D4ED8?text=Mivanta+Scanner', description: 'High-accuracy biometric scanners for secure attendance and access management.' },
    { id: 'wbox-dvr', categoryId: 'cctv', name: 'WBOX DVR (UD/TD/MD Series)', brand: 'WBOX Tech', image: 'https://placehold.co/600x450/FEE2E2/DC2626?text=WBOX+DVR', description: 'Reliable digital video recorders in 4, 8, and 16-channel variants for every need.' },
    { id: 'wbox-ipcamera', categoryId: 'cctv', name: 'WBOX IP Camera', brand: 'WBOX Tech', image: 'https://placehold.co/600x450/FDE68A/B45309?text=WBOX+IP+Camera', description: 'High-quality IP cameras with secure activation procedures for advanced monitoring.' },
    { id: 'realtime-camera', categoryId: 'cctv', name: 'Realtime Smart Wi-Fi Camera', brand: 'Realtime', image: 'https://placehold.co/600x450/D1FAE5/065F46?text=Realtime+Camera', description: 'Smart Wi-Fi and 4G/5G cameras offering flexible and remote surveillance.' },
    { id: 'mivanta-cctv', categoryId: 'cctv', name: 'Mivanta CCTV Camera', brand: 'Mivanta', image: 'https://placehold.co/600x450/F0FDF4/166534?text=Mivanta+CCTV', description: 'A wide selection of CCTV cameras designed for robust security systems.' },
    { id: 'zektra-loose', categoryId: 'currency', name: 'Zektra Loose Note Counting Machines', brand: 'Zektra', image: 'https://placehold.co/600x450/E0E7FF/1E40AF?text=Zektra+Counter', description: 'High-speed and accurate machines for counting loose currency notes.' },
    { id: 'zektra-fake', categoryId: 'currency', name: 'Zektra Fake Note Detector', brand: 'Zektra', image: 'https://placehold.co/600x450/BFDBFE/60A5FA?text=Zektra+Detector', description: 'Specialized devices for quickly and reliably detecting counterfeit currency.' },
    { id: 'mantra-pos', categoryId: 'currency', name: 'Mantra POS / MicroATM mTerminal', brand: 'MantraTec', image: 'https://placehold.co/600x450/FEE2E2/DC2626?text=Mantra+POS', description: 'Mobile biometric terminals certified for Aadhaar, ideal for financial services.' },
    { id: 'np-tech-billing', categoryId: 'currency', name: 'NP-Tech NP150 Billing Machine', brand: 'NP-Tech', image: 'https://placehold.co/600x450/D1FAE5/065F46?text=NP-Tech+Billing', description: 'A reliable billing machine for various business and retail applications.' },
    { id: 'realtime-boom', categoryId: 'entrance', name: 'Realtime DC Boom Barrier', brand: 'Realtime', image: 'https://placehold.co/600x450/FDE68A/B45309?text=Realtime+Boom', description: 'Durable and efficient DC Boom Barriers for heavy-duty parking and traffic control.' },
    { id: 'timewatch-boom', categoryId: 'entrance', name: 'TimeWatch Boom Barrier', brand: 'TimeWatch', image: 'https://placehold.co/600x450/FEE2E2/DC2626?text=TimeWatch+Boom', description: 'Automated boom barriers for a secure and controlled entry point.' },
    { id: 'mivanta-access', categoryId: 'entrance', name: 'Mivanta Standalone Access Control', brand: 'Mivanta', image: 'https://placehold.co/600x450/C3DAFE/1D4ED8?text=Mivanta+Access', description: 'Standalone access control systems designed for simplicity and security.' },
    { id: 'realtime-dfmd', categoryId: 'inspection', name: 'Realtime Door Frame Metal Detector', brand: 'Realtime', image: 'https://placehold.co/600x450/FDE68A/B45309?text=Realtime+DFMD', description: 'High-sensitivity door frame metal detectors for robust inspection control.' },
    { id: 'timewatch-xray', categoryId: 'inspection', name: 'TimeWatch X-Ray Baggage Scanner', brand: 'TimeWatch', image: 'https://placehold.co/600x450/BFDBFE/60A5FA?text=TimeWatch+X-Ray', description: 'Advanced X-Ray systems for inspecting baggage and parcels.' },
    { id: 'vibranium-threat', categoryId: 'software', name: 'Vibranium Threat Security', brand: 'Vibranium', image: 'https://placehold.co/600x450/E0E7FF/1E40AF?text=Vibranium+Threat', description: 'On-demand scans, realtime protection, and cloud-based threat detection for consumers.' },
    { id: 'timewatch-software', categoryId: 'software', name: 'TimeWatch Web Based Software', brand: 'TimeWatch', image: 'https://placehold.co/600x450/D1FAE5/065F46?text=TimeWatch+Software', description: 'Web-based software for managing attendance, payroll, visitors, and more.' },
];

const getCategoryName = (id) => {
    switch (id) {
        case 'attendance-access': return 'Attendance & Access Control';
        case 'cctv': return 'CCTV & Surveillance';
        case 'currency': return 'Currency & Billing Solutions';
        case 'entrance': return 'Entrance & Parking Control';
        case 'inspection': return 'Inspection Control';
        case 'software': return 'Software Solutions';
        default: return 'Products';
    }
};

const CategoryPage = () => {
    const { categoryId } = useParams();
    const categoryName = getCategoryName(categoryId);
    const filteredProducts = allProducts.filter(product => product.categoryId === categoryId);

    return (
        <div className="category-page">
            {/* Header Section */}
            <section className="category-header-section">
                <div className="products-container category-header-content">
                    <h1 className="category-title">{categoryName}</h1>
                    <p className="category-description">
                        Explore our full range of {categoryName.toLowerCase()} solutions from our trusted partners.
                    </p>
                </div>
            </section>

            {/* Product Grid */}
            <section className="product-grid-section">
                <div className="products-container">
                    <div className="product-grid">
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map(product => (
                                <Link to={`/products/details/${product.id}`} key={product.id} className="product-card">
                                    <div className="product-image-wrapper">
                                        <img src={product.image} alt={product.name} className="product-image" />
                                        <span className="product-brand">{product.brand}</span>
                                    </div>
                                    <div className="product-info">
                                        <h3 className="product-title">{product.name}</h3>
                                        <p className="product-description">{product.description}</p>
                                        <span className="view-details">View Details &rarr;</span>
                                    </div>
                                </Link>
                            ))
                        ) : (
                            <div className="no-products">
                                <p>No products found in this category.</p>
                                <Link to="/products" className="btn btn-primary">Back to Categories</Link>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default CategoryPage;