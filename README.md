# Coffee App

This is a learning project built for practice and portfolio purposes. A single-page React application for ordering coffee products. It features a product catalog with real-time cart functionality and page navigation, powered by a mock API.

**Live demo:** [View Live on Vercel](https://coffee-app-react-json-server.vercel.app/)

## Features
- Dynamic product catalog and cart functionality;
- Built with React + Vite + SCSS;
- JSON Server used for simulating REST API with full GET, POST, PUT, and DELETE operations;
- React Router for page-based navigation (some pages are still in progress);
- Custom useFetch hook to handle API requests;
- Separate services created for each type of server interaction (GET, POST, PUT, DELETE);
- Responsive design with mobile-first approach;
- Backend emulated using Render web service for deployment compatibility.

## Getting Started

### 1) Clone the repository
```bash
git clone https://github.com/yu-nykanorova/coffee_app_react_json-server.git
cd coffee_app_react_json-server
```
### 2) Install dependencies
```bash
npm install
```
### 3) Run the development server
```bash
npm run dev
```
Open http://localhost:5173 to view it in the browser.

## Technologies Used
- React + Vite
- SCSS
- React Router DOM
- JSON Server (deployed on Render)
- Custom Hook: useFetch
- RESTful API: GET, POST, PUT, DELETE
- Mobile-first responsive design

## API
The application uses a mock backend powered by JSON Server, deployed on Render to allow live interaction with data, including:
- GET /products – fetch all coffee items.
- POST /cart – add item to cart.
- PUT /cart/:id – update item quantity.
- DELETE /cart/:id – remove item from cart.  
[API Base URL](https://coffee-json-server-render.onrender.com)

## Design Source
This layout was based on a free Figma template used in a web development course.  
[View Figma Design](https://www.figma.com/design/84SaUUC9n1FXboqLGvClhJ/Coffee-Shop-App--Community---Copy-?node-id=0-1&p=f&t=I5P8OwCG3isBsqgi-0)

## License
This project is open source and free to use for learning or portfolio presentation.

*Created by Yuliia Nykanorova*