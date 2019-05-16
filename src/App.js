import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Index from './components/index';
import SingleImageContainer from './components/singleImageContainer';
import './App.css';

function App() {
  return (
    <div className="App">
            <Router>
                <Route path="/" exact component={Index} />
                <Route path="/:id" exact component={SingleImageContainer} />
            </Router>
    </div>
  );
}

export default App;
