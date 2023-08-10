# Checkout Page Project

## Project Overview:
   The project is a simple checkout page where users can view a list of products, add new products, and perform various actions like updating the product quantity, deleting products, and viewing the total cost.

## Technologies Used:
   - React.js: Used as the primary frontend library for building the user interface and handling components, state management, and routing.
   - React Router DOM: Used for handling client-side routing, allowing navigation between different pages without a full page reload.
   - Axios: Used for making HTTP requests to interact with the backend API and fetching data from it.
   - Bootstrap: CSS framework used for styling the UI and providing responsive design elements.
   - React Bootstrap: React components that utilize Bootstrap's styles for a consistent look and feel.

## Project Structure:
   The project consists of several components and pages organized in different files:

   - `App.js`: The main component responsible for setting up the routing and displaying different pages based on the current URL path.
   - `Main.jsx`: Represents the main page of the application, displaying welcome messages and links to other pages.
   - `Navbar.jsx`: The navigation bar component displayed at the top of the page, containing links to different sections of the application.
   - `NewProduct.jsx`: Component for adding new products to the list, using a form to capture product details and a submit button to save the data.
   - `ProductList.jsx`: Component displaying a list of products fetched from the backend API, with the option to update product quantity or delete products.
   - `ProductCard.jsx`: Represents an individual product in the list, with options for quantity update and deletion, and displays product details.
   - `ProductForm.jsx`: A reusable component for the product form used in both adding and updating products.
   - `CardTotal.jsx`: Component for displaying the total cost of the products, including taxes and shipping.
   - `WarningModal.jsx` and `WarningModal2.jsx`: Components for displaying warning modals when deleting a product or resetting its quantity to zero, respectively.
   - `Loading.jsx`: Component for showing a loading message and animation while waiting for data to be fetched.

Overall, the project showcases basic CRUD (Create, Read, Update, Delete) functionality for managing a list of products and demonstrates how React and related libraries can be used to create a dynamic and interactive web application.
<br>

<img align="center" width="800" src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaHhtenkxdWh3djFzYmFxMG1mZTh6dHRkaHY5emYyNXF5eTJ3MWJ0MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ZdvTR3r2zVffNkCotk/giphy.gif" />

## Project Skeleton
```
├── public
│     └── index.html
├── src
│   ├── App.css
│   ├── App.js
│   ├── components
│   │   ├── AddProduct.jsx
│   │   ├── Button.jsx
│   │   ├── CardTotal.jsx
│   │   ├── Header.jsx
│   │   └── ProductCard.jsx
│   ├── helper
│   │   └── data.js
│   ├── index.css
│   ├── index.js
│   └── pages
│       └── Main.jsx
├── package.json
└── yarn.lock
```
