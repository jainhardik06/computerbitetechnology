import React, { useState, useEffect } from 'react';
import Footer from '../components/FooterNew';
import './Home.css';

const Home = () => {
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const products = [
    {
      name: "Smart CCTV",
      title: "AI-Powered Surveillance",
      description: "Next-gen security cameras with intelligent monitoring and real-time alerts",
      image: "cctv.png",
      features: ["4K Resolution", "Night Vision", "Motion Detection", "Mobile Access"]
    },
    {
      name: "Biometric Systems", 
      title: "Seamless Attendance",
      description: "Advanced fingerprint and face recognition for accurate time tracking",
      image: "attendence.png",
      features: ["Face Recognition", "Fingerprint Scan", "Real-time Sync", "Cloud Reports"]
    },
    {
      name: "Currency Detectors",
      title: "Fraud Prevention",
      description: "Professional-grade fake note detection with multi-currency support",
      image: "note counting.png",
      features: ["UV Detection", "Magnetic Scan", "Size Check", "Sound Alert"]
    },
    {
      name: "Access Control",
      title: "Smart Barriers",
      description: "Automated boom barriers with RFID and license plate recognition",
      image: "boom.png",
      features: ["RFID Support", "Auto Recognition", "Remote Control", "Traffic Analytics"]
    }
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "TechCorp Industries",
      role: "IT Manager",
      text: "Computer Bite Technologies transformed our security infrastructure. Their CCTV systems are incredibly reliable and the team's support is outstanding.",
      rating: 5
    },
    {
      name: "Priya Sharma",
      company: "Global Manufacturing Ltd",
      role: "Operations Director",
      text: "The biometric attendance system has streamlined our workforce management. Real-time reporting and accuracy are exceptional.",
      rating: 5
    },
    {
      name: "Amit Patel",
      company: "SecureBank",
      role: "Security Head",
      text: "Their fake note detectors have significantly reduced fraud attempts. The technology is cutting-edge and very user-friendly.",
      rating: 5
    }
  ];

  const stats = [
    { number: "500+", label: "Happy Clients" },
    { number: "50+", label: "Cities Covered" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "24/7", label: "Support Available" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProductIndex((prev) => (prev + 1) % products.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(testimonialInterval);
  }, []);

  return (
    <div className="home-page">
      {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <div className="content-left">
              <div className="main-content">
                <h1 className="hero-title">
                  <span className="title-main">Advanced Security</span>
                  <span className="title-accent">Solutions</span>
                </h1>
                <p className="hero-description">
                  Transform your business security with cutting-edge CCTV systems, biometric attendance, 
                  currency detectors, and access control solutions. Trusted by enterprises across India.
                </p>
                
                <div className="email-capture">
                  <h3 className="capture-title">Get Free Security Consultation</h3>
                  <div className="email-form">
                    <div className="input-group">
                      <input 
                        type="email" 
                        placeholder="Enter your business email"
                        className="email-input"
                      />
                      <button className="submit-btn">
                        <span>Start Free Consultation</span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                  
                  <div className="action-buttons">
                    <button className="btn btn-primary">Get Started</button>
                    <button className="btn btn-secondary">Explore Products</button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="content-right">
              <div className="product-showcase">
                <div className="hero-product-bg"></div>
                <div className="product-carousel">
                  <div className="product-display" key={currentProductIndex}>
                    <img 
                      src={`/home/${products[currentProductIndex].image}`}
                      alt={products[currentProductIndex].name}
                      className="showcase-image"
                    />
                    <div className="product-label">
                      <span className="product-name">{products[currentProductIndex].name}</span>
                      <span className="product-brief">{products[currentProductIndex].title}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="content-bottom">
              <div className="email-capture">
                <h3 className="capture-title">Get Free Security Consultation</h3>
                <div className="email-form">
                  <div className="input-group">
                    <input 
                      type="email" 
                      placeholder="Enter your business email"
                      className="email-input"
                    />
                    <button className="submit-btn">
                      <span>Start Free Consultation</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                </div>
                
                <div className="action-buttons">
                  <button className="btn btn-primary">Get Started</button>
                  <button className="btn btn-secondary">Explore Products</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Visual Statistics Section */}
        <section className="stats-section">
          <div className="stats-content">
            <div className="stats-header">
              <h2>Trusted by Businesses Nationwide</h2>
              <p>Our cutting-edge security solutions have transformed operations for companies across diverse industries</p>
            </div>
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat-card">
                  <span className="stat-number">{stat.number}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Segments We Serve Section */}
        <section className="segments-section">
          <div className="segments-content">
            <h2 className="section-title">Industries We Serve</h2>
            <div className="segments-grid">
              <div className="segment-card residential">
                <img 
                  src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&h=240&fit=crop&crop=center" 
                  alt="Residential Security" 
                  className="segment-image"
                />
                <div className="segment-content">
                  <h3>Residential Complexes</h3>
                  <p>Comprehensive security solutions for residential communities and gated societies</p>
                </div>
              </div>
              
              <div className="segment-card corporate">
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=240&fit=crop&crop=center" 
                  alt="Corporate Security" 
                  className="segment-image"
                />
                <div className="segment-content">
                  <h3>Corporate Offices</h3>
                  <p>Advanced access control and surveillance systems for business environments</p>
                </div>
              </div>
              
              <div className="segment-card industrial">
                <img 
                  src="https://images.unsplash.com/photo-1565043666747-69f6646db940?w=400&h=240&fit=crop&crop=center" 
                  alt="Industrial Security Systems" 
                  className="segment-image"
                />
                <div className="segment-content">
                  <h3>Manufacturing</h3>
                  <p>Robust security infrastructure for industrial facilities and warehouses</p>
                </div>
              </div>
              
              <div className="segment-card healthcare">
                <img 
                  src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=400&h=240&fit=crop&crop=center" 
                  alt="Healthcare Security Cameras" 
                  className="segment-image"
                />
                <div className="segment-content">
                  <h3>Healthcare</h3>
                  <p>Specialized security solutions for hospitals and medical facilities</p>
                </div>
              </div>
              
              <div className="segment-card retail">
                <img 
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=240&fit=crop&crop=center" 
                  alt="Retail Security" 
                  className="segment-image"
                />
                <div className="segment-content">
                  <h3>Retail & Shopping</h3>
                  <p>Comprehensive security systems for retail stores and shopping centers</p>
                </div>
              </div>
              
              <div className="segment-card education">
                <img 
                  src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400&h=240&fit=crop&crop=center" 
                  alt="School Security System" 
                  className="segment-image"
                />
                <div className="segment-content">
                  <h3>Educational Institutions</h3>
                  <p>Safe and secure environments for schools, colleges, and universities</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid Section */}
        <section className="products-grid-section">
          <div className="products-grid-content">
            <div className="section-header">
              <h2 className="section-title">Our Security Solutions</h2>
              <p className="section-description">
                Comprehensive security technology solutions designed for modern businesses
              </p>
            </div>
            
            <div className="products-grid">
              {products.map((product, index) => (
                <div key={index} className="product-card">
                  <div className="product-image-container">
                    <img 
                      src={`/home/${product.image}`}
                      alt={product.name}
                      className="product-card-image"
                    />
                  </div>
                  <div className="product-card-content">
                    <h3 className="product-card-title">{product.name}</h3>
                    <p className="product-card-subtitle">{product.title}</p>
                    <p className="product-card-description">{product.description}</p>
                    <div className="product-features">
                      {product.features.map((feature, idx) => (
                        <span key={idx} className="feature-tag">{feature}</span>
                      ))}
                    </div>
                    <button className="product-cta-btn">Learn More</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="why-choose-section">
          <div className="why-choose-content-wrapper">
            <div className="section-header">
              <h2 className="section-title">Why Choose Computer Bite Technologies?</h2>
              <p className="section-description">
                Your trusted partner for comprehensive security solutions with proven expertise and unwavering commitment to excellence
              </p>
            </div>
            
            <div className="why-choose-grid">
              <div className="benefit-card">
                <div className="benefit-image-container">
                  <img 
                    src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=300&fit=crop&crop=center" 
                    alt="Expert Team" 
                    className="benefit-image"
                  />
                  <div className="benefit-overlay">
                    <div className="benefit-icon">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="benefit-content">
                  <h3>Proven Expertise</h3>
                  <p>15+ years of experience delivering cutting-edge security technology solutions across diverse industries with a track record of 500+ successful installations</p>
                  <div className="benefit-stats">
                    <span className="stat-item">500+ Projects</span>
                    <span className="stat-item">15+ Years</span>
                  </div>
                </div>
              </div>
              
              <div className="benefit-card">
                <div className="benefit-image-container">
                  <img 
                    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop&crop=center" 
                    alt="24/7 Support" 
                    className="benefit-image"
                  />
                  <div className="benefit-overlay">
                    <div className="benefit-icon">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                        <path d="M13 10V3L4 14h7v7l9-11h-7z" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="benefit-content">
                  <h3>24/7 Premium Support</h3>
                  <p>Round-the-clock technical support with dedicated account managers, instant remote assistance, and comprehensive maintenance services ensuring 99.9% uptime</p>
                  <div className="benefit-stats">
                    <span className="stat-item">99.9% Uptime</span>
                    <span className="stat-item">24/7 Available</span>
                  </div>
                </div>
              </div>
              
              <div className="benefit-card">
                <div className="benefit-image-container">
                  <img 
                    src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop&crop=center" 
                    alt="Advanced Technology" 
                    className="benefit-image"
                  />
                  <div className="benefit-overlay">
                    <div className="benefit-icon">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="benefit-content">
                  <h3>Cutting-Edge Technology</h3>
                  <p>Latest AI-powered security solutions featuring machine learning, facial recognition, advanced analytics, and IoT integration for next-generation protection</p>
                  <div className="benefit-stats">
                    <span className="stat-item">AI-Powered</span>
                    <span className="stat-item">Cloud-Ready</span>
                  </div>
                </div>
              </div>
              
              <div className="benefit-card">
                <div className="benefit-image-container">
                  <img 
                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop&crop=center" 
                    alt="Security Compliance" 
                    className="benefit-image"
                  />
                  <div className="benefit-overlay">
                    <div className="benefit-icon">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="benefit-content">
                  <h3>Enterprise-Grade Security</h3>
                  <p>Bank-level security protocols with ISO 27001 certification, GDPR compliance, encrypted data transmission, and comprehensive cybersecurity measures</p>
                  <div className="benefit-stats">
                    <span className="stat-item">ISO Certified</span>
                    <span className="stat-item">GDPR Compliant</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="why-choose-bottom">
              <div className="trust-indicators">
                <div className="trust-item">
                  <div className="trust-number">98%</div>
                  <div className="trust-label">Customer Satisfaction</div>
                </div>
                <div className="trust-item">
                  <div className="trust-number">500+</div>
                  <div className="trust-label">Happy Clients</div>
                </div>
                <div className="trust-item">
                  <div className="trust-number">15+</div>
                  <div className="trust-label">Years Experience</div>
                </div>
                <div className="trust-item">
                  <div className="trust-number">24/7</div>
                  <div className="trust-label">Support Available</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="testimonial-section-main">
          <div className="testimonial-content-wrapper">
            <div className="section-header">
              <h2 className="section-title">What Our Clients Say</h2>
              <p className="section-description">
                Real feedback from businesses who trust Computer Bite Technologies for their security needs
              </p>
            </div>
            
            <div className="testimonial-showcase">
              <div className="testimonial-main">
                <div className="testimonial-card-modern">
                  <div className="testimonial-header">
                    <div className="client-image">
                      <img 
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face" 
                        alt="Client" 
                        className="client-photo"
                      />
                    </div>
                    <div className="client-info">
                      <div className="client-name">{testimonials[currentTestimonial].name}</div>
                      <div className="client-role">{testimonials[currentTestimonial].role}</div>
                      <div className="client-company">{testimonials[currentTestimonial].company}</div>
                    </div>
                    <div className="rating-stars">
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                        <span key={i} className="star-rating">⭐</span>
                      ))}
                    </div>
                  </div>
                  <div className="testimonial-quote">
                    <div className="quote-icon">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                        <path d="M14 9c0-3-3-6-6-6S2 6 2 9c0 2 3 4 3 6 0 1-1 2-1 2h6s-1-1-1-2c0-2 3-4 3-6zM22 9c0-3-3-6-6-6s-6 3-6 6c0 2 3 4 3 6 0 1-1 2-1 2h6s-1-1-1-2c0-2 3-4 3-6z" fill="currentColor" opacity="0.2"/>
                      </svg>
                    </div>
                    <p className="quote-text">"{testimonials[currentTestimonial].text}"</p>
                  </div>
                </div>
              </div>
              
              <div className="client-success-stats">
                <div className="success-header">
                  <h3>Our Track Record</h3>
                </div>
                
                <div className="success-metrics-compact">
                  <div className="metric-item-compact">
                    <div className="metric-number">500+</div>
                    <div className="metric-label">Projects</div>
                  </div>
                  
                  <div className="metric-item-compact">
                    <div className="metric-number">98%</div>
                    <div className="metric-label">Satisfaction</div>
                  </div>
                  
                  <div className="metric-item-compact">
                    <div className="metric-number">24/7</div>
                    <div className="metric-label">Support</div>
                  </div>
                </div>
              </div>
            </div>
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

export default Home;
