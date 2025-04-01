import './App.css';
import Navbar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router';
import ItemDetail from './components/ItemDetail/ItemDetail';


function App() {

  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<ItemListContainer />} />
      <Route path="/categoria/:category" element={<ItemListContainer />} />
      <Route path="/detalle/:id" element= {<ItemDetail />} />
    </Routes>
    </BrowserRouter>
  );
};

export default App;
