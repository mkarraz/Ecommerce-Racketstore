import React from 'react';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailList from './components/ItemDetailList';
import {Routes, Route} from 'react-router-dom'
import Cart from './components/Cart'
import Error from './components/Error'
import './App.css';

function App() {

    const greeting = "Encuentra todo lo que buscas relacionado al Tenis!"
    const userName = "Juan Carlos"
    
    return (
      <>
        <NavBar />
        <Routes>
          <Route
            path='/'
            element={<ItemListContainer userName={userName} greeting={greeting} />}
          />
          <Route
            path='/brands/:brandName'
            element={<ItemListContainer userName={userName} greeting={greeting} />}
          />
          <Route
            path='/product/:id'
            element={<ItemDetailList />}
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
