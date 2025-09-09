import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/FooterNew';
import './Support.css';

const Support = () => {
  // State to manage active FAQ item
  const [activeFaq, setActiveFaq] = useState(null);

  const faqData = [
    {
      id: 1,
      question: "How do I troubleshoot my Smart CCTV system?",
      answer: "Most issues can be resolved by checking your internet connection, ensuring the camera has power, and restarting the device. Refer to your product manual for detailed troubleshooting steps or contact our 24/7 support team."
    },
    {
      id: 2,
      question: "What is the warranty period for your biometric systems?",
      answer: "All our biometric systems come with a standard 1-year manufacturer warranty. Extended warranty options and annual maintenance contracts (AMCs) are also available. Please contact sales for more details."
    },
    {
      id: 3,
      question: "How do I request a demo for a new product?",
      answer: "You can request a demo by filling out the 'Schedule Free Consultation' form on our homepage or by calling our sales team directly. We will arrange a personalized demonstration at your convenience."
    },
    {
      id: 4,
      question: "Can I get remote assistance for my access control system?",
      answer: "Yes, we offer remote assistance for most of our access control systems. Our support technicians can securely connect to your system to diagnose and resolve issues. Please call our support line to initiate a remote session."
    },
    {
      id: 5,
      question: "What support is available after installation?",
      answer: "After installation, you receive comprehensive training on your new system. Our 24/7 support team is available for any technical queries, and we offer various AMC packages for ongoing maintenance and priority support."
    }
  ];

  const toggleFaq = (id) => {
    setActiveFaq(activeFaq === id ? null : id);
  };

  return (
    <div className="support-page">
      {/* Header Section - Text updated to "Get in Touch" style */}
      <section className="support-header-section">
        <div className="support-container">
          <h1 className="support-title">Get in Touch</h1> {/* Updated title text */}
          <p className="support-description">We're ready to help. Choose how you'd like to connect.</p> {/* Updated description text */}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="support-container">
          <h2 className="section-heading">Frequently Asked Questions</h2>
          <p className="section-subheading">
            Find quick answers to common questions about our products and services.
          </p>
          <div className="faq-list">
            {faqData.map((item) => (
              <div key={item.id} className={`faq-item ${activeFaq === item.id ? 'active' : ''}`}>
                <div className="faq-question" onClick={() => toggleFaq(item.id)}>
                  <h3>{item.question}</h3>
                  <span className="faq-toggle-icon">
                    {activeFaq === item.id ? (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
                    ) : (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    )}
                  </span>
                </div>
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Direct Support Options Section */}
      <section className="direct-support-section">
        <div className="support-container">
          <h2 className="section-heading">Need Direct Assistance?</h2>
          <p className="section-subheading">
            Our support team is ready to help you with any issue or query.
          </p>
          <div className="support-options-grid">
            <div className="support-option-card">
              <div className="option-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-phone-call">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2.05L16 22a2 2 0 0 1-2-2v-3.82a2 2 0 0 1 .57-1.43L19.23 10a2 2 0 0 1 2.54.43z"></path>
                  <path d="M14.5 2H9a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h5.5l.5-4a2 2 0 0 1-2-2V4a2 2 0 0 0-2-2z"></path>
                  <path d="M18 9l-6 6"></path>
                  <path d="M12 9l6 6"></path>
                </svg>
              </div>
              <h3>Call Our Support Line</h3>
              <p>For immediate technical assistance.</p>
              <p className="support-number">Sales: <a href="tel:+918619429514">+9186 194 29514</a></p>
              <p className="support-number">Support: <a href="tel:+918619429514">+9186 194 29514</a></p>
              <p className="timing-text">Available 24/7 for critical issues.</p>
              <a href="tel:+918619429514" className="btn btn-primary-support">Call Now</a>
            </div>

            <div className="support-option-card">
              <div className="option-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <h3>Email Support</h3>
              <p>For non-urgent inquiries or detailed requests.</p>
              <p className="support-email"><a href="mailto:computerbitejpr@gmail.com">computerbitejpr@gmail.com</a></p>
              <p className="timing-text">We aim to respond within 24 business hours.</p>
              <a href="mailto:computerbitejpr@gmail.com" className="btn btn-secondary-support">Send Email</a>
            </div>
          </div>
        </div>
      </section>

      {/* Resources & Guides Section */}
      <section className="resources-section">
        <div className="support-container">
          <h2 className="section-heading">Helpful Resources & Guides</h2>
          <p className="section-subheading">
            Access our comprehensive documentation, manuals, and video tutorials.
          </p>
          <div className="resources-grid">
            <a href="/guides/troubleshooting.pdf" target="_blank" className="resource-card">
              <div className="resource-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
              </div>
              <h3>Troubleshooting Guides</h3>
              <p>Step-by-step solutions for common issues.</p>
            </a>
            <a href="/guides/product-manuals.pdf" target="_blank" className="resource-card">
              <div className="resource-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V6.5A2.5 2.5 0 0 0 17.5 4h-11A2.5 2.5 0 0 0 4 6.5v13z"></path></svg>
              </div>
              <h3>Product Manuals</h3>
              <p>Download detailed guides for all our systems.</p>
            </a>
            <a href="/guides/video-tutorials" className="resource-card">
              <div className="resource-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>
              </div>
              <h3>Video Tutorials</h3>
              <p>Visual walkthroughs for setup and features.</p>
            </a>
            <a href="/faq" className="resource-card">
              <div className="resource-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.09 3.55l-2.05 4.54L2 8.5l4.54 2.05L5.5 16l4.54-2.05L12 18.5l2.05-4.54L19 13.5l-4.54-2.05L13.5 6l-4.54 2.05z"></path><path d="M21 12l-2.05 4.54L14 17.5l4.54 2.05L17.5 24l4.54-2.05L24 18.5l-2.05-4.54L22.5 7l-4.54 2.05z"></path></svg>
              </div>
              <h3>Knowledge Base</h3>
              <p>Extensive articles and detailed information.</p>
            </a>
          </div>
        </div>
      </section>

      {/* Emergency Support Section */}
      <section className="emergency-support-section">
        <div className="support-container emergency-content">
          <h2 className="emergency-title">Critical Issue? 24/7 Emergency Support</h2>
          <p className="emergency-description">
            For system outages, security breaches, or other critical incidents, our dedicated emergency team is available around the clock.
          </p>
          <div className="emergency-contact-info">
            <p>Call our Emergency Hotline:</p>
            <a href="tel:+918619429514" className="emergency-phone-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2.05L16 22a2 2 0 0 1-2-2v-3.82a2 2 0 0 1 .57-1.43L19.23 10a2 2 0 0 1 2.54.43z"></path><path d="M10.5 2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h5.5l.5-4a2 2 0 0 1-2-2V4a2 2 0 0 0-2-2z"></path></svg>
              +9186 194 29514
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section (Reused from Home) */}
      <section className="cta-section">
        <div className="support-container">
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

export default Support;
