import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axiosWithAuth from "./utils/axiosWithAuth";
import BubbleContext from './components/BubbleContext';

import Login from "./components/Login";
import PrivateRoute from './components/PrivateRoute'
import BubblePage from './components/BubblePage';
import "./styles.scss";
import styled from 'styled-components'

const WrapHeadings = styled.div`
  font-family: Cherryla Script;
  font-size:30px;
  color:teal;
  background-color:lightgrey;
  width:100%;
  border-bottom: 1px solid grey;
  text-align:center;
  margin-top: 3%;
  box-shadow: 5px 5px 5px teal;
`

const Wrap = styled.span`
  // size: 4px;
  box-shadow: 1px 1px 1px teal;
  padding:1%;
 
  `

function App() {

  const addColor = newColor => {
    axiosWithAuth()
      .post('/colors', newColor)
      .then(result => {console.log('kd:app:axios.post:addColor:newColor', result)})
      .catch(error => console.log('kd:addColor:catch error', error));
  };


  return (
    <>
    <br></br>
    <br></br>
    <WrapHeadings><h1>Welcome to Tiny Bubbles</h1><Wrap><span role = "img">🟠🟡🔵🟣</span></Wrap>
      <h3>Update & delete the colors of your choice.</h3>
      </WrapHeadings>

    <Router>
        <BubbleContext.Provider value = {{addColor}}>
      <div className="App">
        <Switch>
          <PrivateRoute exact path = '/bubblepage' component = {BubblePage} />
          <Route exact path="/" component={Login} />
          <PrivateRoute exact path = '/'component = {Login} />
        </Switch>
      </div>
      </BubbleContext.Provider>
    </Router>
    </>
  );
};

export default App;
