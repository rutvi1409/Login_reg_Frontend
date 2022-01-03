import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
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
      <Route exact path='/dashboard' component={Dashboard}></Route>
      </Switch>
    </Routes>
  );
}

export default App;
