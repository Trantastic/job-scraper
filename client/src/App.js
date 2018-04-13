import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Craigslist from './components/Craigslist';
import './App.css';

const App = () => (
      <Router>
          <div>
            <Navbar />
            <Route exact path='/craigslist' component={ Craigslist } />
          </div>
      </Router>
);

export default App;
