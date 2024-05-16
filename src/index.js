import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Register from './pages/register/Register';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      { path: '', element: <Register /> }
    ]
  }
])

root.render(
  <RouterProvider router={router} />
);