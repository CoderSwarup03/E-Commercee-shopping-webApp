import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './home/Home.jsx'
import Blogs from './blog/Blog.jsx'
import SingleProduct from './shop/SingleProduct.jsx'
import './index.css'
import 'swiper/css';

// bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


// fonts and icons
import '././assets/css/icofont.min.css';
import '././assets/css/animate.css';
import '././assets/css/style.min.css';



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Blog from './blog/Blog.jsx'
import Shop from './shop/Shop.jsx'
import CartPage from './shop/CartPage.jsx'
import SingleBlog from './blog/SingleBlog.jsx'
import About from './about/About.jsx'
import Contact from './contactPage/Contact.jsx'
import AuthProvider from './contexts/AuthProvider.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {path: "/",element: <Home />},
      {
        path: "/blog",
        element: <Blogs/>
      },
      {
        path: "/blog/:id",
        element: <SingleBlog/>
      },
      {
        path: "/shop",
        element: <Shop/>
      },
      {
        path: "shop/:id",
        element: <SingleProduct/>
      },
      {
        path: "/cart-page",
        element: <CartPage/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/contact",
        element: <Contact/>
      }

      

    ],
  },
]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>

)
