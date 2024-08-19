# Flopkart
"Flopkart": A simple e-commerce application, built using NextJS and Tailwind CSS. It contains a product listing page and "Add to cart" functionality with a dedicated "Cart" page to manage the products and Checkout.

# Project Plan and Implementation Strategy

### **1. Introduction**

- **Project Overview**:
    
    This document outlines the technical approach and implementation strategy for developing an e-commerce shopping cart application using Next.js and Tailwind CSS. The application will utilize the Fake Store API to dynamically fetch product data to be displayed on the product listing page. The project will be using the e-commerce platform “Flipkart” for it’s design inspiration.
    
- **Objective**
    
    The primary goal of this project is to create a responsive, simple and functional e-commerce platform that allows users to browse products, add them to a cart, and handle cart functionalities.
    

### **2. Technology Stack**

- **Frontend Framework**:
    - Next.js is selected for its server-side rendering capabilities and built-in routing, which will enhance the performance and scalability of the application.
- **Styling**:
    - Tailwind CSS will be used to style the application, providing utility-first classes for responsive and consistent design.
- **Data Source**:
    - The Fake Store API will be utilized to fetch product data dynamically, ensuring a realistic simulation of an e-commerce platform.

### **3. API Integration**

- **Why Fake Store API?**:
    - The Fake Store API offers a comprehensive set of product data, including images, prices, and descriptions, which align with the requirements of the project. Its ease of integration and realistic data make it an ideal choice.

### **4. Project Structure**

- **Overview**:
    - The project will be structured into several key components, each responsible for a specific aspect of the application.
- **Main Components**:
    - **Product Listing Page**: Displays a grid of products fetched from the API, each with an image, name, price, and 'Add to Cart' button.
    - **Cart Page**: Allows users to view, adjust, and remove items from their cart, with a summary section calculating the subtotal, discounts(if any), and total price.

### **5. Implementation Plan**

- **Product Listing Page**:
    - The product listing page will be designed using a responsive grid layout. Each product will be presented with key details and an 'Add to Cart' button. Upon clicking, the product will be added to the cart, with visual feedback confirming the addition.
        - If the number of the product added will be crossing a minimal criteria ie., 3, there will be a discount applied on the said product which will be reflected on the product page.
        - The cart icon on the product listing page will be getting dynamically updated as the user adds the products.
    - The product listing page will have static search bar, filters and side menu to conform to the design of Flipkart.
    - Error handling added through error component to catch any API errors.
- **Cart Management**:
    - The cart page will display all selected items, allowing users to modify quantities or remove items. The cart summary will dynamically update based on user actions.
    - The cart page will include a “Checkout” button which will reflect that the order is placed and clearing the data on the cart page.
    - Discounts will be added:
        - A discount will be implied on the cart items if the total price of the cart items exceed a certain limit.
- **Local Storage for Cart Data**
    - To keep the application simple and efficient, the cart data (items added by the user) will be stored in the browser's local storage. This ensures that the cart persists across page reloads, providing a seamless user experience without the need for backend storage.
- **Styling with Tailwind CSS**:
    - Tailwind CSS classes will be used for consistent styling across components, ensuring a seamless user experience across devices.

### **6. Deployment Strategy**

- **Hosting Platform**:
    - The application will be deployed using Vercel, which offers seamless integration with Next.js and ensures optimal performance.
- **Deployment Steps**:
    - The deployment process will involve building the application and pushing it to a GitHub repository linked to Vercel for continuous deployment.
