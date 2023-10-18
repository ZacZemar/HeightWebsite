import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CountrySelect from './components/pages/CountrySelect';
import HeightFactor from './components/pages/HeightFactor';
import GetTaller from './components/pages/GetTaller';
import SignUp from './components/pages/SignUp';
import UnitedStates from './components/pages/UnitedStates';
import India from './components/pages/India';
import Ukraine from './components/pages/Ukraine';
import Germany from './components/pages/Germany';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/countryselect' component={CountrySelect} />
        <Route path='/heightfactor' component={HeightFactor} />
        <Route path='/gettaller' component={GetTaller} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/unitedstates' component={UnitedStates} />
        <Route path='/india' component={India} />
        <Route path='/ukraine' component={Ukraine} />
        <Route path='/germany' component={Germany} />
      </Switch>
    </Router>
  );
}

export default App;
