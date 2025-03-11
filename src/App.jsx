import { useState } from 'react';
import './App.css';
import Navbar from './components/navBar/navBar';
import ItemListContainer from './components/Carrito/ItemListContainer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Navbar/>
    <ItemListContainer mensaje="¡Bienvenidos a nuestra tienda!"/>
    </>
  );
};

export default App;
