import React, { useState, useEffect } from "react";
import axiosWithAuth from "../auth/axiosWithAuth";
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = (props) => {
  const [colorList, setColorList] = useState([]);

  useEffect(() => {
    localStorage.getItem('token') &&
    axiosWithAuth()
    .get('.colors')
    .then(response => {
      setColorList(response.data)
    })
    .catch(error => console.log(error))
}, [])
     
  return (
    <>
      <ColorList props={props} colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
