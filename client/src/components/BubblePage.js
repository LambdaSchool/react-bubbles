import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  useEffect(() => {
    axiosWithAuth() 
    .get("http://localhost:5000/api/colors")
      .then(res => {
        console.log(`this is response from port 5000:`, res)
        setColorList(res.data)
      })
      .catch(err => {
        console.log(`this is error from port 5000:`, err)

      })
  }, [])

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />

      <h1>BUBBLES PAGE</h1>
    </>
  );
};

export default BubblePage;
