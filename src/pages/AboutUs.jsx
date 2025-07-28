import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import Footer from '../components/FooterNew';
import './About.css';

const About = () => {
  // Photos for the main unique gallery section (keep these separate)
  const photos = [
    { id: 1, src: 'https://placehold.co/600x400/E0E7FF/1E40AF?text=Gallery+Photo+1', alt: 'Our Team Working' },
    { id: 2, src: 'https://placehold.co/400x600/DBEAFE/3B82F6?text=Gallery+Photo+2', alt: 'Security Camera Installation' },
    { id: 3, src: 'https://placehold.co/800x500/BFDBFE/60A5FA?text=Gallery+Photo+3', alt: 'Biometric System Demo' },
    { id: 4, src: 'https://placehold.co/500x700/EFF6FF/2563EB?text=Gallery+Photo+4', alt: 'Client Meeting' },
    { id: 5, src: 'https://placehold.co/700x450/C3DAFE/1D4ED8?text=Gallery+Photo+5', alt: 'Office Interior' },
    { id: 6, src: 'https://placehold.co/450x550/EBF8FF/1E3A8A?text=Gallery+Photo+6', alt: 'Product Showcase' },
  ];

  // Certification images (keep these separate)
  const certifications = [
    { id: 1, src: 'https://placehold.co/200x150/FEE2E2/DC2626?text=ISO+Cert', alt: 'ISO Certification' },
    { id: 2, src: 'https://placehold.co/200x150/FEF3C7/F59E0B?text=Quality+Award', alt: 'Quality Award' },
    { id: 3, src: 'https://placehold.co/200x150/D1FAE5/059669?text=Security+Standard', alt: 'Security Standard' },
    { id: 4, src: 'https://placehold.co/200x150/E0E7FF/1E40AF?text=Innovation+Prize', alt: 'Innovation Prize' },
  ];

  // --- NEW: Images for "Our Story" Carousel ---
  const storyCarouselImages = [
    { id: 1, src: 'https://thekccgroup.com/wp-content/uploads/2022/07/Facial-recognition-biometric-access-control-system-at-building-entrance-685x457.jpeg', alt: 'Early team collaboration', fallback: 'https://placehold.co/800x600/0F172A/94A3B8?text=Story+Img+1' },
    { id: 2, src: 'https://safeguardsystems.co.uk/wp-content/uploads/2023/09/best-surveillance-systems.jpg', alt: 'Innovation and R&D process', fallback: 'https://placehold.co/800x600/1E293B/C2D8F2?text=Story+Img+2' },
    { id: 3, src: 'https://butterflymx.com/wp-content/uploads/2021/07/commercial-access-control-system.jpg', alt: 'Client site installation', fallback: 'https://placehold.co/800x600/334155/E2E8F0?text=Story+Img+3' },
    { id: 4, src: 'https://www.shutterstock.com/image-photo/female-bank-manager-using-cash-600nw-2499715255.jpg', alt: 'Modern security operations', fallback: 'https://placehold.co/800x600/475569/F8FAFC?text=Story+Img+4' },
  ];

  const [currentStoryImageIndex, setCurrentStoryImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStoryImageIndex(prevIndex => 
        (prevIndex + 1) % storyCarouselImages.length
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [storyCarouselImages.length]); // Re-run effect if image count changes

  return (
    <div className="about-page">
      {/* Header Section - Revamped Intro */}
      <section className="about-intro-section">
        <div className="about-container intro-content">
          <h1 className="intro-title">
            <span className="intro-title-main">Innovating Security.</span>
            <span className="intro-title-accent">Building Trust.</span>
          </h1>
          <p className="intro-description">
            For over 15 years, we've been at the forefront of advanced security solutions, committed to protecting what matters most.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="our-story-section">
        <div className="about-container story-grid">
          <div className="story-content">
            <h2 className="section-heading">Our Story</h2>
            <p className="section-subheading">
              From humble beginnings to a leader in security technology.
            </p>
            <p>
              Founded in 2008, Computer Bite Technologies began with a vision to revolutionize security infrastructure across India. What started as a small team passionate about technology and safety has grown into a trusted enterprise, serving hundreds of clients across diverse industries. Our journey has been defined by continuous innovation, unwavering commitment to quality, and a deep understanding of our clients' evolving security needs.
            </p>
            <p>
              We believe in building long-term partnerships, providing not just products, but comprehensive solutions backed by 24/7 support. Our dedication to excellence has enabled us to expand our reach, covering over 50 cities and achieving a 98% customer satisfaction rate. We are proud to be at the forefront of AI-powered surveillance, biometric systems, and advanced access control, making businesses safer and more efficient.
            </p>
          </div>
          
          {/* --- UPDATED: Carousel for Our Story Image --- */}
          <div className="story-carousel-container">
            {storyCarouselImages.map((image, index) => (
              <img 
                key={image.id}
                src={image.src}
                alt={image.alt}
                className={`story-carousel-image ${index === currentStoryImageIndex ? 'active' : ''}`}
                onError={(e) => { e.target.onerror = null; e.target.src = image.fallback; }}
              />
            ))}
            <div className="carousel-dots">
              {storyCarouselImages.map((_, index) => (
                <span 
                  key={index}
                  className={`dot ${index === currentStoryImageIndex ? 'active' : ''}`}
                  onClick={() => setCurrentStoryImageIndex(index)}
                ></span>
              ))}
            </div>
          </div>
          {/* --- END UPDATED CAROUSEL --- */}

        </div>
      </section>

      {/* Our Values Section */}
      <section className="our-values-section">
        <div className="about-container">
          <h2 className="section-heading">Our Core Values</h2>
          <p className="section-subheading">
            Principles that guide our every action and decision.
          </p>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-shield">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h3>Integrity</h3>
              <p>Upholding the highest ethical standards in all our operations and client interactions.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-lightbulb">
                  <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"></path>
                  <path d="M12 22v-4"></path>
                  <path d="M17.5 17.5l-2.12-2.12"></path>
                  <path d="M22 12h-4"></path>
                  <path d="M17.5 6.5l2.12 2.12"></path>
                  <path d="M12 2v4"></path>
                  <path d="M6.5 6.5l2.12 2.12"></path>
                  <path d="M2 12h4"></path>
                  <path d="M6.5 17.5l2.12-2.12"></path>
                </svg>
              </div>
              <h3>Innovation</h3>
              <p>Continuously exploring new technologies to provide advanced and future-proof solutions.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-users">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3>Client-Centricity</h3>
              <p>Placing our clients' needs at the heart of every decision, ensuring their success and satisfaction.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-award">
                  <circle cx="12" cy="8" r="7"></circle>
                  <polyline points="8.21 13.89 7 22 12 18 17 22 15.79 13.89"></polyline>
                </svg>
              </div>
              <h3>Excellence</h3>
              <p>Striving for the highest standards in product quality, service delivery, and operational efficiency.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Unique Photo Gallery Section */}
      <section className="photo-gallery-section">
        <div className="about-container">
          <h2 className="section-heading">Our Journey in Pictures</h2>
          <p className="section-subheading">
            A visual timeline of our growth, projects, and team moments.
          </p>
          <div className="gallery-grid">
            {photos.map((photo) => (
              <div key={photo.id} className={`gallery-item item-${photo.id}`}>
                <img 
                  src={`/photos/${photo.id}.png`} // Link to public/photos folder
                  alt={photo.alt} 
                  className="gallery-image" 
                  onError={(e) => { e.target.onerror = null; e.target.src = photo.src; }} // Fallback to placeholder if local fails
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Achievements Section */}
      <section className="certifications-section">
        <div className="about-container">
          <h2 className="section-heading">Certifications & Achievements</h2>
          <p className="section-subheading">
            Recognitions that validate our commitment to quality and security.
          </p>
          <div className="certifications-grid">
            {certifications.map((cert) => (
              <div key={cert.id} className="certification-card">
                <img 
                  src={`/certificates/${cert.id}.png`} // Link to public/certificates folder
                  alt={cert.alt} 
                  className="certification-image" 
                  onError={(e) => { e.target.onerror = null; e.target.src = cert.src; }} // Fallback to placeholder if local fails
                />
                <p className="certification-title">{cert.alt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section (Reused from Home) */}
      <section className="cta-section">
        <div className="about-container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Secure Your Business?</h2>
            <p className="cta-description">
              Get a personalized security consultation and discover how our solutions can protect your business
            </p>
            <div className="cta-buttons">
              <button className="btn btn-white">Schedule Free Consultation</button>
              <button className="btn btn-outline">View Our Portfolio</button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
