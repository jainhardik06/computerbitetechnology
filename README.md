# Computer Bite Technologies Website

A React-based website for Computer Bite Technologies, showcasing and selling technology products including attendance systems, security cameras, fake note detectors, boom barriers, and more.

## Features

- **Home Page**: Company mission, product categories, and contact information
- **Products Page**: Display all product categories  
- **Product Details**: Dynamic pages for individual products
- **About Us**: Company profile, certifications, and trust factors
- **Contact/Enquiry**: Form for customer queries and orders
- **Support**: Warranty information, FAQ, returns policy, and software drivers

## Tech Stack

- React 18
- Vite (build tool)
- React Router DOM (navigation)
- CSS for styling

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/
│   └── Navigation.jsx
├── pages/
│   ├── Home.jsx
│   ├── Products.jsx
│   ├── ProductDetails.jsx
│   ├── AboutUs.jsx
│   ├── Contact.jsx
│   └── Support.jsx
├── App.jsx
└── main.jsx
```

## Development Notes

- The page components are currently basic templates
- Content and styling will be added in subsequent development phases
- React Router is configured for all main navigation
- Product details page supports dynamic routing with product IDs+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
