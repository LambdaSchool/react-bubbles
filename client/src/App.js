import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        <ProtectedRoute exact path="/protected" component={BubblePage} />
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
      </div>
    </Router>
  );
}

export default App;
