# STATION DU CYCLES – دراجات نارية

A modern web app for a Moroccan motorcycle and scooter store, featuring a bilingual interface (Arabic/French), product catalog, store info, hours, and contact forms.

---

## Table of Contents

- [Features](#features)
- [User Flow](#user-flow)
- [Project Structure](#project-structure)
- [Code Details](#code-details)
- [Getting Started](#getting-started)
- [Tech Stack](#tech-stack)

---

## Features

- **Bilingual UI:** Arabic and French support, with dynamic translations.
- **Product Catalog:** Browse brands and products, view details and specs.
- **Store Info:** Contact details, address, and interactive map (Leaflet + OSM).
- **Store Hours:** Daily opening status, live countdown, and progress bar.
- **Contact Forms:** Request callback, WhatsApp integration, and newsletter signup.
- **Theme Switcher:** Toggle between dark and light modes.
- **Responsive Design:** Mobile-friendly, Tailwind CSS for layout and style.

---

## User Flow

1. **Landing Page:**  
   - Welcome banner, delivery info, and navigation bar.
   - Theme toggle and language switcher.

2. **Brands Section:**  
   - Grid of available brands.
   - Click a brand to view its products.

3. **Product Details:**  
   - Images, specs, ratings, and purchase options.
   - WhatsApp direct contact.

4. **Store Info:**  
   - Contact cards, address, and map.
   - Opening hours and daily status.

5. **Footer:**  
   - About, quick links, hours, social media, and newsletter form.

---

## Project Structure

```
├── app.js           # Main app logic, routing, i18n, UI updates
├── main.js          # Entry point, initializes app
├── counter.js       # Demo counter utility (not used in main app)
├── index.html       # Main HTML template
├── style.css        # Custom styles (glass, banners, cards, etc.)
├── package.json     # Vite config and dependencies
├── .bolt/           # Project template config
│   └── config.json
├── public/          # Static assets (vite.svg)
└── .gitignore
```

---

## Code Details

### Internationalization (I18N)

- Defined in [`app.js`](app.js) as the `I18N` object.
- Functions:  
  - [`t`](app.js): Translation lookup  
  - [`getLang`](app.js), [`setLang`](app.js): Language management  
  - [`applyTranslations`](app.js): Updates UI text and placeholders

### Theme Switching

- Functions:  
  - [`applyTheme`](app.js): Applies dark/light theme  
  - [`initTheme`](app.js): Initializes theme and handles user/system changes

### Routing

- [`Router`](app.js) class handles hash-based navigation:
  - `home`: Brands grid
  - `brand/:id`: Products for a brand
  - `product/:id`: Product details

### Data

- Brands and products defined as arrays in [`app.js`](app.js):
  - `BRANDS`: Brand info and images
  - `PRODUCTS`: Product details, specs, images, ratings

### Store Info & Hours

- Store contact cards and address in HTML.
- Hours logic in [`buildHours`](app.js), with live status and countdown via [`updateChrono`](app.js).

### Map Integration

- [`initMap`](app.js): Fetches coordinates from OSM and displays Leaflet map.

### Forms

- Contact form and newsletter in HTML.
- [`initNewsletter`](app.js): Handles newsletter signup demo.

### Utilities

- [`generateStars`](app.js): Renders star ratings
- [`changeMainImage`](app.js): Product image gallery
- [`enableSmoothNav`](app.js): Smooth scrolling for navigation

---

## Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```
2. **Run development server:**
   ```sh
   npm run dev
   ```
3. **Open in browser:**  
   Visit [http://localhost:5173](http://localhost:5173) (default Vite port).

---

## Tech Stack

- **Vite** – Fast dev server and build tool
- **Tailwind CSS** – Utility-first CSS via CDN
- **Leaflet** – Interactive maps
- **Font Awesome** – Icons
- **Vanilla JS** – No frameworks, all logic in [`app.js`](app.js)

---

## Author

Mostafa – STATION DU CYCLES  
© 2025 مصطفى للدراجات النارية. جميع الحقوق محفوظة.
