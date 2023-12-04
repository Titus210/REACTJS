import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Homepage from '../Pages/homepage/Homepage';
import About from '../Pages/about/About';
import Shop from '../Pages/Shop/Shop';
import Cart from '../Pages/cart/Cart';


const UserRoutes = () => {
    return (
        <>
            <Router>
                <div className="App">
                    <Routes>
                        <Route path="/" exact element={<Homepage />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/shop" element={<Shop />} />
                        <Route path="/cart" element={<Cart />} />
                    </Routes>
                </div>
            </Router>
        </>
    );
}

export default UserRoutes;
