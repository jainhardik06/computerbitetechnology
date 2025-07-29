import React from 'react';
import Footer from '../components/FooterNew';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      {/* Header Section */}
      <section className="contact-header-section">
        <div className="contact-container">
          <h1 className="contact-title">Get in Touch</h1>
          <p className="contact-description">We're ready to help. Choose how you'd like to connect.</p>
        </div>
      </section>

      {/* Main Content: Info Cards & Form */}
      <section className="main-contact-content">
        <div className="contact-container main-grid-container">
          {/* Left Column: Contact Information Cards */}
          <div className="contact-info-column">
            <h2 className="column-heading">Contact Details</h2>
            <p className="column-subheading">Our team is available to assist you via phone, email, or in person.</p>

            {/* Grouped Contact Info Cards */}
            <div className="info-card-group">
                {/* Contact Info Card 1: Location */}
                <div className="info-card">
                    <div className="info-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-map-pin">
                            <path d="M12 19.5c-3.866 0-7-3.134-7-7s7-12 7-12 7 8.134 7 12-3.134 7-7 7z" />
                            <circle cx="12" cy="12" r="3" />
                        </svg>
                    </div>
                    <div className="info-text">
                        <h3>Visit Us</h3>
                        <p>123 Security Avenue, Tech City, Alwar, Rajasthan, India 301001</p>
                        <a href="https://www.google.com/maps/dir/?api=1&destination=123+Security+Avenue,+Tech+City,+Alwar,+Rajasthan,+India+301001" target="_blank" rel="noopener noreferrer" className="info-cta">Get Directions</a>
                    </div>
                </div>

                {/* Contact Info Card 2: Phone */}
                <div className="info-card">
                    <div className="info-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-phone">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2.05L16 22a2 2 0 0 1-2-2v-3.82a2 2 0 0 1 .57-1.43L19.23 10a2 2 0 0 1 2.54.43zM10.5 2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h5.5l.5-4a2 2 0 0 1-2-2V4a2 2 0 0 0-2-2z" />
                        </svg>
                    </div>
                    <div className="info-text">
                        <h3>Call Us</h3>
                        <p>Sales: <a href="tel:+919876543210">+91 98765 43210</a></p>
                        <p>Support: <a href="tel:+919988776655">+91 99887 76655</a></p>
                        <p className="timing-text">Mon-Fri, 9 AM - 6 PM IST</p>
                    </div>
                </div>

                {/* Contact Info Card 3: Email */}
                <div className="info-card">
                    <div className="info-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                            <polyline points="22,6 12,13 2,6" />
                        </svg>
                    </div>
                    <div className="info-text">
                        <h3>Email Us</h3>
                        <p><a href="mailto:info@computerbite.com">info@computerbite.com</a></p>
                        <p className="timing-text">We respond within 24 hours.</p>
                    </div>
                </div>
            </div> {/* End info-card-group */}

            {/* Service Reach - Now a subtle summary */}
            <div className="service-reach-summary">
                <p>Delivery available across India</p>
                <p>Installation available in Rajasthan</p>
            </div>

          </div> {/* End contact-info-column */}

          {/* Right Column: Contact Form */}
          <div className="contact-form-column">
            <h2 className="column-heading">Send Us a Message</h2>
            <p className="column-subheading">Fill out the form below, and we'll get back to you promptly.</p>
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" name="name" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Business Email</label>
                <input type="email" id="email" name="email" placeholder="you@example.com" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number (Optional)</label>
                <input type="tel" id="phone" name="phone" placeholder="+91 XXXXXXXXXX" />
              </div>
              <div className="form-group">
                <label htmlFor="company">Company Name (Optional)</label>
                <input type="text" id="company" name="company" placeholder="Your Company" />
              </div>
              <div className="form-group full-width">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" placeholder="e.g., Security Consultation Request" required />
              </div>
              <div className="form-group full-width">
                <label htmlFor="message">Your Message</label>
                <textarea id="message" name="message" rows="6" placeholder="Tell us more about your needs or questions..." required></textarea>
              </div>
              <button type="submit" className="submit-form-btn">
                <span>Send Message</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </form>
          </div> {/* End contact-form-column */}
        </div> {/* End main-grid-container */}
      </section>

<section className="map-section">
        <div className="contact-container">
          <h2 className="section-heading map-heading">Our Location</h2>
          <p className="section-subheading map-subheading">Find our office on the map for easy navigation.</p>
          <div className="map-container-inner">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3381.973791265414!2d75.74423017522402!3d26.90280507665311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5533b5a8829%3A0xc3e85e18b69fdc10!2sComputer%20Bite%20Technology%20Pvt%20Ltd!5e1!3m2!1sen!2sin!4v1753748157589!5m2!1sen!2sin" // Updated src from user input
              width="100%" // Retaining responsive width
              height="450" // Retaining responsive height consistent with CSS
              style={{ border: 0 }} // Corrected JSX style syntax
              allowFullScreen={true} // Corrected JSX camelCase for boolean attribute
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade" // Corrected JSX camelCase
              title="Our Location - Jaipur, Rajasthan, India" // Updated title to Jaipur
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
