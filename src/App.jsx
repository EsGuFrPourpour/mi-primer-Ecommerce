import './App.css';
import Navbar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import { BrowserRouter, Route, Routes } from 'react-router';
import NotFound from './components/NotFound/NotFound';


function App() {

  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<ItemListContainer />} />
      <Route path="/detalles" element= {<p>.</p>} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
    </BrowserRouter>
  );
};

export default App;
