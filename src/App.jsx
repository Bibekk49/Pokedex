import React from 'react';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import Pokedex from './components/Pokedex';
import PokemonDetail from './components/PokemonDetail';
import About from './components/About';

const router = createHashRouter([
  {
    path: '/',
    element: <Pokedex />,
  },
  {
    path: '/pokemon/:id',
    element: <PokemonDetail />,
  },
  {
    path: '/about',
    element: <About />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}