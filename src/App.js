import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Index from './components/index';
import SingleImageContainer from './components/singleImageContainer';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
            <Router>
            <Route path="/" exact component={Index} />
            <Route path="/second" exact component={SingleImageContainer} />
            </Router>
      </header>
    </div>
  );
}

export default App;
