import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Route, Link } from "react-router-dom";
import PropTypes from 'prop-types';

const InlineError = ({ text }) => (
  <span style={{color: '#9b4140'}}>{text}</span>
);

InlineError.propTypes = {
  text: PropTypes.string.isRequired
};

export default InlineError;