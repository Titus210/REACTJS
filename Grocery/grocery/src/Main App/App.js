

import './App.css';

// Components impoert
import MainPage from '../Pages/Main/MainPage';
import AccountPrompt from '../Pages/Main/AccountPrompt';
import LoginPage from '../Pages/Login/login';

function App() {
  return (
    <div className="App">
      {/* <MainPage/> */}
      {/* <AccountPrompt/> */}
      <LoginPage />
    </div>
  );
}

export default App;
