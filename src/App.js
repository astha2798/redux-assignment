import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route,Switch} from "react-router-dom";
import { Provider } from 'react-redux'
import './App.css'

import { Link } from 'react-router-dom';
import store from './redux/store'
// import Navbar from "./components/navbar"
import AddEmployee from "./components/addEmployee";
import ShowOne from "./components/showOne";
import ShowAll from "./components/showAll";

function App() {
  return (
    <Provider store={store}>
    <Router>
      <div className="App">
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/add" className="nav-link">Add Employee</Link>
          </li>
          <li className="navbar-item">
          <Link to="/showOne" className="nav-link">Show Employee</Link>
          </li>
          <li className="navbar-item">
          <Link to="/showAll" className="nav-link">Show Employee List</Link>
          </li>
        </ul>
        </div>
      </nav>
      <br/>
      <Switch>
      <Route path="/add" component={AddEmployee} />
      <Route path="/showOne" component={ShowOne} />
      <Route path="/showAll" component={ShowAll} />
      </Switch>
      </div>>
    </Router>
    </Provider>
  );
}

export default App;