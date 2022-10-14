import React from 'react';

export default class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <div className="container">
          <a>
            Puber
          </a>
          <div>
            <a href="#sign-in">
              Sign In
            </a>
            <a href="#sign-up">
              Sign Up
            </a>
          </div>
        </div>
      </nav>
    );
  }
}
