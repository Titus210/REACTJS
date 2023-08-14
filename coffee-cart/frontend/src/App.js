import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar';
import Cart from './Components/Cart';
import Home from './Components/Home';
import PageNotFound from './Components/PageNotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/cart'  element={<Cart />} />
          <Route path='/not-found'  element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;

