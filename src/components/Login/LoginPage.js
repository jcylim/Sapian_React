import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Route, Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import LoginForm from "./LoginForm";
import { login } from "../../server/auth"; 

class LoginPage extends Component {

  submit = (data) => 
    this.props.login(data).then(() => this.props.history.push("/"));

  render() {
    return (
      <div>
        <LoginForm submit={this.submit}/>
      </div>
    );
  }
}

LoginPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  login: PropTypes.func.isRequired
};

export default connect(null, { login })(LoginPage);