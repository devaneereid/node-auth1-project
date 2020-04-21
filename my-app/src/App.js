import React from 'react';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import Display from './components/Display';
import { Route, Switch, Link } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';

function App() {
  return (
    <div className="App">
      <Switch>
        <PrivateRoute exact path='/display' component={Display} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Link to='/login'>Login</Link>
      </Switch>
    </div>
  );
}

export default App;
