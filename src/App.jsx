import './App.css';
import Navbar from './components/navBar/navBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

function App() {

  return (
    <>
    <Navbar/>
    <ItemListContainer mensaje="¡Bienvenidos a nuestra tienda!"/>
    <ItemCount/>
    </>
  );
};

export default App;
