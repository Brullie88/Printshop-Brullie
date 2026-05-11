import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import Home from './pages/Home.tsx';
import Shop from './pages/Shop.tsx';
import Product from './pages/Product.tsx';
import Custom from './pages/Custom.tsx';
import About from './pages/About.tsx';
import Terms from './pages/Terms.tsx';
import Shipping from './pages/Shipping.tsx';
import Privacy from './pages/Privacy.tsx';
import FAQ from './pages/FAQ.tsx';
import './index.css';

import CheckoutSuccess from './pages/CheckoutSuccess.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'shop',
        element: <Shop />
      },
      {
        path: 'checkout-success',
        element: <CheckoutSuccess />
      },
      {
        path: 'product/:id',
        element: <Product />
      },
      {
        path: 'custom',
        element: <Custom />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'terms',
        element: <Terms />
      },
      {
        path: 'shipping',
        element: <Shipping />
      },
      {
        path: 'privacy',
        element: <Privacy />
      },
      {
        path: 'faq',
        element: <FAQ />
      }
    ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
