import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import PrivateRoute from './components/PrivateRoute'
import Login from "./components/Login";
import BubblePage from './components/BubblePage';
import "./styles.scss";

function App() {
  // const [colors, setColors] = useState([]);

  return (
    <Router>
      <nav>
        <ul>
          <li><Link to='/login'>Login</Link></li>
          <li><Link to='/bubbles'>Bubbles</Link></li>
        </ul>
      </nav>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login} />
          <PrivateRoute  path='/bubblepage' component={BubblePage}/>
          <Route component={Login}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
