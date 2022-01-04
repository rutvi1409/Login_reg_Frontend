import React from 'react';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import PrivateRoute from './auth/PrivateRoute';
import {
  BrowserRouter as Routes,
  Route,
  Switch
} from 'react-router-dom';



function App() {
  return (
    <Routes>
      <Switch>
      <Route exact path='/' component={Login}></Route>
      <Route exact path='/register' component={Register}></Route>
      <PrivateRoute exact path='/dashboard' component={Dashboard}></PrivateRoute>
      </Switch>
    </Routes>
  );
}

export default App;
