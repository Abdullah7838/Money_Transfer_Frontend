import './App.css';
import React,{Component} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import Login from './components/Login';
import Signup from './components/Signup';
import Account from './components/Account';
import Transfer from './components/Transfer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      phone:null,
      balance:null,
    };
  }

  setName = (name) => {
    this.setState({ name });
  };
  setPhone = (phone) => {
    this.setState({ phone });
  };
  setBalance=(balance)=>{
    this.setState({balance})
  }

  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login setName={this.setName} setBalance={this.setBalance} setPhone={this.setPhone}/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/account" element={<Account name={this.state.name} balance={this.state.balance} phone={this.state.phone}/>} />
          <Route path="/transfer" element={<Transfer name={this.state.name} balance={this.state.balance} phone={this.state.phone}/>} />
        </Routes>
      </Router>
    );
  }
}

export default App;
