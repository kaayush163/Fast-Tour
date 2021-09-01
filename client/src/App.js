import React from 'react';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';

import PrivateRoute from './PrivateRoute';


import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import LogIn from './components/pages/LogIn';

import GetStart from './components/Button/Inner/Start';
import WatchTrailer from './components/Button/Inner/Trailer';

import Carda from './components/pages/Card/Carda';
import Cardb from './components/pages/Card/Cardb';
import Cardc from './components/pages/Card/Cardc';
import Cardd from './components/pages/Card/Cardd';
import Carde from './components/pages/Card/Carde';

function App() {
  return (
    <>
      <Router>
        <Navbar />
         <ScrollToTop >
              <Switch>
                <Route path='/home' component={Home} />
                <Route path='/services' component={Services} />
                <Route path='/products' component={Products} />
                <Route path='/sign-up' component={SignUp} />
                <Route path='/' exact component={LogIn} />


                <Route path='/getstart' component={GetStart} />
                <Route path='/watchtrailer' component={WatchTrailer} />
      
                <Route path='/carda' component={Carda} />
                <Route path='/cardb' component={Cardb} />
                <Route path='/cardc' component={Cardc} />
                <Route path='/cardd' component={Cardd} />
                <Route path='/carde' component={Carde} />
      
              </Switch>
         </ScrollToTop >
      </Router>
    </>
  );
}

export default App;
