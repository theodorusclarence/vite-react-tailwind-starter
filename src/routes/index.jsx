import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';

// import PrivateRoute from './PrivateRoute';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        {/* <PrivateRoute path='/dashboard' component={Dashboard} /> */}
        {/* <Route exact path='/login' component={SignIn} /> */}
      </Switch>
    </Router>
  );
}
