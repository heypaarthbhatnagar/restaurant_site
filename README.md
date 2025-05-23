# Bella Vista Restaurant Website

**Live Demo:** [https://restaurant-site-mu.vercel.app/](https://restaurant-site-mu.vercel.app/)

This project is a modern, feature-rich restaurant website built with [Create React App](https://github.com/facebook/create-react-app). It showcases Bella Vista's menu, events, reservation system, and more, providing an engaging experience for visitors.

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Deployment](#deployment)
- [Learn More](#learn-more)
- [License](#license)

---

## Features

- **Responsive Design:** Works seamlessly on desktop and mobile devices.
- **Dynamic Menu:** Detailed food and wine menu with dietary and allergen info.
- **Events:** Interactive events page with upcoming culinary experiences.
- **Reservations:** Reservation form for booking tables.
- **Newsletter:** Newsletter signup in the footer.
- **Social Media:** Links to social media platforms.
- **Performance Reporting:** Integrated web vitals reporting.

---

## Project Structure

```
restaurant_site/
├── public/
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── reportWebVitals.js
│   ├── setupTests.js
│   ├── components/
│   │   ├── Events.js
│   │   ├── Footer.js
│   │   ├── Header.js
│   │   ├── Menu.js
│   │   └── ReservationForm.js
│   └── pages/
│       ├── EventsPage.js
│       ├── Home.js
│       ├── MenuPage.js
│       └── ReservationsPage.js
├── .gitignore
├── LICENSE
├── package.json
├── README.md
└── README.old.md
```

- **public/**: Static assets and HTML template.
- **src/**: React source code.
  - **components/**: Reusable UI components (Menu, Events, Footer, etc.).
  - **pages/**: Top-level pages for routing (Home, Menu, Events, Reservations).
- **App.js**: Main app component and router.
- **index.js**: Entry point.
- **reportWebVitals.js**: Performance metrics.

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/restaurant_site.git
   cd restaurant_site
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Start the development server:**
   ```sh
   npm start
   ```
   Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

---

## Available Scripts

In the project directory, you can run:

- **`npm start`**  
  Runs the app in development mode. The page will reload if you make edits.

- **`npm test`**  
  Launches the test runner in interactive watch mode.

- **`npm run build`**  
  Builds the app for production to the `build` folder.

- **`npm run eject`**  
  Copies configuration files and dependencies for full control (irreversible).

---

## Deployment

The app is ready to deploy after running `npm run build`.  
See the [deployment guide](https://facebook.github.io/create-react-app/docs/deployment) for more information.

---

## Learn More

- [Create React App Documentation](https://facebook.github.io/create-react-app/docs/getting-started)
- [React Documentation](https://reactjs.org/)

---

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.
