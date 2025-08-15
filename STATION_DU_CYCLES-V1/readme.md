# STATION DU CYCLES - Motorcycle & Scooter Platform

"STATION DU CYCLES" is a modern, responsive web application designed for a motorcycle and scooter dealership. It provides information about available brands and products, store contact details, opening hours with a live status, and a contact form for inquiries. The application is built with a focus on a sleek, dark-themed user interface and supports both Arabic and French languages.

## How to Run the Application

This project uses [Vite](https://vitejs.dev/) as its build tool.

1.  **Install Dependencies:**
    Navigate to the project root directory in your terminal and install the necessary packages:
    ```bash
    npm install
    ```

2.  **Start Development Server:**
    To run the application in development mode:
    ```bash
    npm run dev
    ```
    This will typically start a local server (e.g., `http://localhost:5173`) where you can view the application.

3.  **Build for Production:**
    To create a production-ready build of the application:
    ```bash
    npm run build
    ```
    The optimized static files will be generated in the `dist/` directory.

4.  **Preview Production Build:**
    To preview the production build locally:
    ```bash
    npm run preview
    ```

## Application File Structure & Explanation

Here's a breakdown of the key files in the `moto-project` application:

### `index.html`
This is the main entry point of the web application. It's an HTML5 document that sets up the basic page structure, links to external CSS frameworks (Tailwind CSS, Font Awesome, Leaflet), imports the main stylesheet (`style.css`), and loads the primary JavaScript application logic (`app.js`). It contains the static layout for the header, navigation, hero section, store information, store hours, and footer, with dynamic content areas populated by JavaScript. The site is designed with an Arabic-first (RTL) layout.

### `app.js`
This is the core JavaScript file that powers the application's dynamic features. It includes:
*   **Internationalization (I18N):** Manages text translations for Arabic and French across the application.
*   **Theme Toggling:** Handles switching between dark and light modes, persisting user preferences.
*   **Data Management:** Stores arrays of `BRANDS` and `PRODUCTS` data, which are used to dynamically populate the content.
*   **Client-Side Routing:** Implements a simple hash-based router (`#home`, `#brand/:id`, `#product/:id`) to render different views (home, brand-specific product listings, individual product details) within the `#main-content` area without full page reloads.
*   **Utility Functions:** Provides helper functions for generating star ratings, translating table keys, changing product images, opening WhatsApp links, and enabling smooth navigation scrolling.
*   **Store Operations Logic:** Manages the display of store opening hours, including a live "chrono" countdown/status indicating if the store is open or closed.
*   **Newsletter & Contact Form:** Handles basic client-side logic for a newsletter subscription and a contact form (currently uses a placeholder alert for purchase requests).
*   **Map Integration:** Initializes and displays a map using Leaflet and OpenStreetMap Nominatim API to show the store's location.
*   **Language Menu:** Toggles language between Arabic and French.
*   **Initialization:** Contains the `DOMContentLoaded` event listener that orchestrates the initialization of all these functionalities when the page loads.

### `style.css`
This file contains the custom CSS rules that define the visual appearance of the application. It complements Tailwind CSS by adding specific styles for:
*   **Typography:** Sets the primary font to 'Cairo'.
*   **Theming:** Defines the `theme-dark` class for the application's default dark mode.
*   **Animations & Effects:** Implements various visual effects like neon glows, moving gradients, breathing animations, marquee text for banners, and fade-in transitions.
*   **Glassmorphism:** Applies a "frosted glass" effect to certain UI elements using the `.glass` class.
*   **Component Styling:** Provides detailed styling for navigation buttons, badges, the hero section, information cards, gradient boxes, store hours display, and the primary call-to-action buttons.
*   **Responsive Design:** Includes styles that adapt the layout and appearance for different screen sizes.

### `main.js`
This file serves as the primary entry point for the JavaScript bundle. It imports `app.js` (which contains the main application logic) and `style.css`. Its main role is to ensure that the `initApp()` function from `app.js` is called once the DOM is fully loaded, effectively bootstrapping the entire application.

### `counter.js`
This file contains a simple utility function `setupCounter` that demonstrates a basic counter functionality. It is **not currently used** within the main application logic (`app.js` or `main.js`) and appears to be a leftover from a standard Vite starter template. It can be considered an unused example utility.
