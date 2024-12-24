import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Main from './components/Main';
import Login from './components/Login';
import Signup from './components/Signup';
import Account from './components/Account';
import Transfer from './components/Transfer';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/account" element={<Account />} />
        <Route path="/transfer" element={<Transfer />} />

      </Routes>
    </Router>
  );
}

export default App;
