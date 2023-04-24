import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import RootLayout from './screens/RootLayout';
import ProductPage from './screens/ProductPage';
import CartScreen from './screens/CartScreen';
import PageNotFound from './screens/PageNotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <HomeScreen /> },
      { path: '/product/:productid', element: <ProductPage /> },
      { path: '/cart/:productid?', element: <CartScreen /> },
      { path: '*', element: <PageNotFound /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
