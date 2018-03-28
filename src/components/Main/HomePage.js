import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Route, Link } from "react-router-dom";

//import HomePage from "./components/Main/HomePage"; 

/*const HomePage = (props) => {
	<div>
		<h1>Home Page</h1>
	</div>
};*/

class HomePage extends Component {
  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <Link to="/login">Login</Link>
      </div>
    );
  }
}

export default HomePage;