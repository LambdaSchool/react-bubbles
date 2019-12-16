import React, { useState } from "react";
import axios from 'axios';
import { axiosWithAuth } from '../authWithAxios';

const Login = () => {
  const [credentials, setCredentials] = useState({});

  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const login = e => {
    e.preventDefault();
    axiosWithAuth().post('login/endpoint', credentials)
      .then(res => {
        localStorage.setItem('token', res.data.token);
        this.props.history.push('/');
      })
  }

  const handleChange = e => {
    setCredentials: {
      ...credentials,
      [e.target.name]: e.target.value,
    }
  } 

  return ( 
    <>
      <h1>Welcome to the Bubble App!</h1>
      <p>Build a login page here</p>
    </>
  );
};

export default Login;
