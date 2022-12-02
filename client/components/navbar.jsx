import React from 'react';
import AppContext from '../lib/app-context';

export default class Navbar extends React.Component {
  render() {
    const { user, handleSignOut } = this.context;
    return (
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            Puber
          </a>
          <div>
            {user !== null &&
              <button className="btn btn-dark" onClick={handleSignOut}>
                Sign out
                <i className="ms-2 fas fa-sign-out-alt" />
              </button>
            }
            {user === null &&
              <>
                <a href="#sign-in" className="btn btn-dark">
                  Log in
                </a>
                <a href="#sign-up" className="btn btn-light">
                  Sign Up
                </a>
              </>
            }
          </div>
        </div>
      </nav>
    );
  }
}
Navbar.contextType = AppContext;
