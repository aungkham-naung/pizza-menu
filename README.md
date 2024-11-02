# Pizza Menu 🍕

## Overview

**Pizza Menu** is a React-based application that lets users easily browse, customize, and order pizzas from an online menu. It provides an interactive and user-friendly interface, allowing users to see real-time availability (sold out or available items), add pizzas to the cart, and prioritize items with a surcharge. Orders are processed and stored through an external API, which also assigns an order number that users can later use to track their order status.

This app is styled with Tailwind CSS and utilizes Redux for efficient state management across components. All menu data and order processing are handled by a secure external API, making it lightweight and easy to set up locally.

## Features

- **User Information**: Enter your name to personalize the experience.
- **Menu Display**: Access a dynamically fetched menu with real-time availability for each item (available or sold out).
- **Add to Cart**: Choose pizzas and add them to the cart. Optionally, prioritize items with an additional cost.
- **Order Placement**: Enter your contact details (name, address, and phone number) to complete the order.
- **Order Tracking**: Receive a unique order number upon checkout, which you can use to look up your order status.

## Installation Guide

Follow these steps to set up and run the Pizza Menu application locally:

### Prerequisites

Make sure you have the following installed on your machine:

- **Node.js** (v14 or above)
- **npm** (comes with Node.js) or **Yarn** as the package manager

### Steps

1. **Clone the Repository**:
   Clone the repository to your local machine using:
   ```bash
   git clone https://github.com/aungkham-naung/pizza-menu.git
   ```
2. **Navigate to Project Directory**:

   ```bash
   cd pizza-menu
   ```

3. **Install Dependency**:
   Install the required dependencies using npm or yarn:

   ```bash
     npm install
   ```

   or

   ```bash
     yarn install
   ```

4. **Run Server**:
   Start the development server with Vite:

   ```bash
     npm run dev
   ```

   or

   ```bash
    yarn dev
   ```

## Technology Stack

- **Front-End**: React with Tailwind CSS for styling

- **Back-End**: External API: [https://react-fast-pizza-api.onrender.com/api](https://react-fast-pizza-api.onrender.com/api)

- **State & Data Management**: Redux

- **Routing**: React Router

## Project Structure

```plaintext
pizza-menu/
│
├── index.html                   # Root HTML file for the app
├── node_modules                 # Installed dependencies (auto-generated)
├── package-lock.json            # Locks dependencies to specific versions
├── package.json                 # Project metadata, scripts, and dependencies
├── README.md                    # Project documentation
├── postcss.config.js            # Configuration file for PostCSS, a tool for processing CSS with plugins
├── tailwind.config.js           # Configuration file for Tailwind CSS, defining theme, plugins, and custom styles
├── vite.config.js               # Configuration file for Vite (build tool)
├── public/                      # Public assets available to the app
|
└── src/                         # Main source code for the application
│   ├── App.jsx                  # Main app component, sets up app routes
│   ├── main.jsx                 # Entry point for React, renders the app
│   └── store.js/                # Redux store configuration, combining all feature slices for state management
│   └── index.css                # Global Stylesheet for the application
│   ├── features/                # Components for the "featured" functionality
|        ├----
|
│   ├── services/                # API calls
|        ├----
|
│   ├── ui/                      # Reusable UI components
|        ├----
│   ├── utils                    # Utility functions for the app
        ├----
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
