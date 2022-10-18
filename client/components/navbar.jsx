import React from 'react';

export default class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            Puber
          </a>
          <div>
            <a href="#sign-in" className="btn btn-dark">
              Sign In
            </a>
            <a href="#sign-up" className="btn btn-dark">
              Sign Up
            </a>
          </div>
        </div>
      </nav>
    );
  }
}
