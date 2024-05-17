import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Register from './pages/register/Register';
import Home from './pages/home/Home';
import Login from './pages/login/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      { path: '', element: <Register /> },
      { path: 'home', element: <Home /> },
      { path: 'login', element: <Login /> }
    ]
  }
])

root.render(
  <RouterProvider router={router} />
);