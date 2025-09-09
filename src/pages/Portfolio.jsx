import React from 'react';
import Footer from '../components/FooterNew';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <div className="portfolio-page">
      <section className="portfolio-hero">
        <div className="portfolio-container">
          <h1 className="portfolio-title">Project Portfolio</h1>
          <p className="portfolio-subtitle">A brief showcase placeholder. Replace with real case studies.</p>
        </div>
      </section>
      <section className="portfolio-coming-soon">
        <div className="portfolio-container">
          <h2>Coming Soon</h2>
          <p>We're curating our recent installations and success stories. Check back shortly or <a href="/contact">contact us</a> for references.</p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Portfolio;
