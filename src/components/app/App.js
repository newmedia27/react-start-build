import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Test from '../Test';
import '../assets/styles/_reset.scss';
import '../assets/styles/_fonts.scss';
import './App.scss';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/test" component={Test} />
      </Switch>
    </Router>
  );
}

export default App;
