import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home.jsx';
import Products from './pages/Products.jsx';
import CategoryPage from './pages/CategoryPage.jsx'; // New component for category listings
import ProductDetails from './pages/ProductDetails.jsx';
import AboutUs from './pages/AboutUs.jsx';
import Contact from './pages/Contact.jsx';
import Support from './pages/Support.jsx';
import Privacy from './pages/legal/Privacy.jsx';
import Terms from './pages/legal/Terms.jsx';
import Cookies from './pages/legal/Cookies.jsx';
import Sitemap from './pages/legal/Sitemap.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            
            {/* The new multi-level product routing structure */}
            <Route path="/products" element={<Products />} />
            <Route path="/products/category/:categoryId" element={<CategoryPage />} /> 
            <Route path="/products/details/:productId" element={<ProductDetails />} />
            
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/support" element={<Support />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/sitemap" element={<Sitemap />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;