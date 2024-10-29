import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/home/Home'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './pages/about/About';
import Appartment from './pages/appartment/Appartment';
import ErrorPage from './pages/404/404';
import Root from './Root';


const router = createBrowserRouter([{
  path: "/",
  element: <Root />,
  errorElement: <ErrorPage />,
  children: [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/appartments/:id",
      element: <Appartment />,
    },
    {
      path: "/about",
      element: <About />,
    },
  ]
}
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
