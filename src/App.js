import React from 'react';
import './App.css';

// components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact />
      </Switch>
      <HomePage />
      <Footer />
    </Router>
  );
}

export default App;
