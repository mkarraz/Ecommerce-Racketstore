import React from 'react';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import './App.css';


function App() {

    const greeting = "Encuentra todo lo que buscas relacionado al Tenis!"
    const userName = "Juan Carlos"
    return (
      <>
        <NavBar />
        <ItemListContainer greeting={greeting} userName={userName} />
      </>
    );
}

export default App;
