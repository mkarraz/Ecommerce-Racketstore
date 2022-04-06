import React from 'react';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer';
import { Routes, Route } from 'react-router-dom'
import Cart from './components/Cart'
import Error from './components/Error'
import './App.css';

function App() {

  const greeting = "Find EVERYTHING related to tennis!"
  const userName = "Juan Carlos"

  return (
    <>
      <NavBar userName={userName} />
      <Routes>
        <Route
          path='/'
          element={<ItemListContainer greeting={greeting} />}
        />
        <Route
          path='/brands/:brandName'
          element={<ItemListContainer greeting={greeting} />}
        />
        <Route
          path='/item/:id'
          element={<ItemDetailContainer />}
        />
        <Route
          path='/cart'
          element={<Cart />}
        />
        <Route
          path='*'
          element={<Error />}
        />
      </Routes>
    </>
  );
}

export default App;
