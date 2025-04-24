import React from 'react';
import './css/base.css';
import './css/navbar.css';

import { createHashRouter, RouterProvider, Outlet } from 'react-router-dom';
import Pokedex from './components/Pokedex';
import PokemonDetail from './components/PokemonDetail';
import About from './components/About';
import Navbar from './components/Navbar';

const Layout = () => (
  <div>
    <Navbar />
    <Outlet />
  </div>
);

const router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Pokedex /> },
      { path: '/pokemon/:id', element: <PokemonDetail /> },
      { path: '/about', element: <About /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}