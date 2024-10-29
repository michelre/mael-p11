import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/home/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './pages/about/About';
import Appartment from './pages/appartment/Appartment';
import ErrorPage from './pages/404/404';
import Root from './Root';
import './index.scss'


const router = createBrowserRouter([{
  path: "/",
  element: <Root />,  
  children: [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/appartments/:id",
      errorElement: <ErrorPage/>,
      loader: async ({ params }) => {
        const data =  await fetch('/data.json').then(resp => resp.json());
        const appartment = data.find(d => d.id === params.id)
        if(!appartment){
          throw new Response('Appartment not found', {status: 404})
        }
        return appartment;
      },
      element: <Appartment />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/*",
      element: <ErrorPage />,
    },
  ]
}
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
