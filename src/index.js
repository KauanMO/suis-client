import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Register from './pages/register/Register';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import ClassRegister from './pages/class/register/Register';
import ClassAdmin from './pages/class/admin/Admin';
import CompetenceRegister from './pages/competence/register/Register';
import CompetenceAdmin from './pages/competence/admin/Admin';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      { path: '', element: <Register /> },
      { path: 'home', element: <Home /> },
      { path: 'login', element: <Login /> },
      {
        path: 'class', children: [
          { path: 'register', element: <ClassRegister /> },
          { path: 'admin', element: <ClassAdmin /> }
        ]
      },
      {
        path: 'competence', children: [
          { path: 'register', element: <CompetenceRegister /> },
          { path: 'admin', element: <CompetenceAdmin /> }
        ]
      }
    ]
  }
])

root.render(
  <RouterProvider router={router} />
);