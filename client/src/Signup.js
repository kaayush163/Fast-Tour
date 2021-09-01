import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';

import GetStart from './components/Button/Inner/Start';
import WatchTrailer from './components/Button/Inner/Trailer';

import Carda from './components/pages/Card/Carda';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/getstart' component={GetStart} />
          <Route path='/watchtrailer' component={WatchTrailer} />

          <Route path='/carda' component={Carda} />
          
        </Switch>
      </Router>
    </>
  );
}

export default App;
