import React from 'react';
import './App.css';

// components
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import Competitive from './components/Competitive';
import Discord from './components/Discord';
import Community from './components/Community';

function App() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/competitive" exact component={Competitive} />
                <Route path="/community" exact component={Community} />
                <Route path="/discord" exact component={Discord} />
            </Switch>
            {/* <HeroSection />
      <HomePage /> */}
            <Footer />
        </Router>
    );
}

export default App;
