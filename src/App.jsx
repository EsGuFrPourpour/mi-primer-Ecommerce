import './App.css';

import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router';
import ItemDetail from './components/ItemDetail/ItemDetail';
import { ContextProvider } from '../context/context';
import CartDetail from './components/CartDetail/CartDetail';
import Navbar from './components/Navbar/Navbar';
import FormEndShop from './components/Forms/FormEndShop';

function App() {

  /*useEffect(() => {
    getProducts();
  }, [])*/
  return (
    <ContextProvider>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categoria/:category" element={<ItemListContainer />} />
          <Route path="/detalle/:id" element= {<ItemDetail />} />
          <Route path="/carrito" element= {<CartDetail />} />
          <Route path="/formulario" element= {<FormEndShop />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>  
  );
};

export default App;
