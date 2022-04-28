import React from 'react';
import NavBar from './components/NavBar'
import ItemListContainer from './Containers/ItemList/ItemListContainer'
import ItemDetailContainer from './Containers/ItemDetail/ItemDetailContainer';
import { Routes, Route } from 'react-router-dom'
import Cart from './components/Cart'
import Error from './components/Error'
import './App.css';
import CustomProvider from './Context/CartContext'

function App() {

  const greeting = "Find EVERYTHING related to tennis!"
  const userName = "Juan Carlos"

  return (
    <>
      <CustomProvider>
        <NavBar userName={userName} />
        <Routes>
          <Route
            path='/'
            element={<ItemListContainer greeting={greeting} />}
          />
          <Route
            path='/brands/:brand'
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
      </CustomProvider>
    </>
  );
}

export default App;
