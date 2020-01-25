import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>HOME PAGE</h1>
      <Link to="/login">
        <button>Login</button>
      </Link>
    </div>
  );
}

export default Home;
