import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import MainPage from '../Pages/Main/MainPage';
import AccountPrompt from '../Pages/Main/AccountPrompt';
import LoginPage from '../Pages/Login/login';
import Landing from '../Pages/Landing/landing';
import { AuthProvider } from '../context/AuthContext';
import SignUp from '../Pages/Sign Up/SignUp';

// shop imports
import Seafood from '../Pages/Shop/seafood/seafood';
import Shop from '../Pages/Shop/Shop';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" exact element={<MainPage />} />
            <Route path="/landing" element={<Landing />} />
            <Route path="/account-prompt" element={<AccountPrompt />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path='/signup' element={<SignUp />} />


            {/* shop routes */}
            <Route path='/seafood' element={<Seafood />} />
            <Route path="shop" element={<Shop />}/>
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}
export default App;
