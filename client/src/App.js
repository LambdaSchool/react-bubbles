import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Login from "./components/Login";
import BubblePage from "./components/BubblePage";
import "./styles.scss";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/login">Login</Link>
          <Link to="/protected">Bubbles</Link>
        </nav>
        <Switch>
        <PrivateRoute 
        exact
        path="/protected"
        component={BubblePage} />
        <Route exact path="/login" component={Login} />
        <Route component={Login} />
         </Switch>
      </div>
    </Router>
  );
}

export default App;
