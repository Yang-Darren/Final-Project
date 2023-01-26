import React from 'react';
import AppContext from '../lib/app-context';
import AuthForm from '../components/auth-form';

export default class Reserve extends React.Component {
  render() {

    const { user, route, handleSignIn } = this.context;

    if (user) {
      return (
        <div>
          <div id="home-page" className='container'>
            <div>
              <h1>Reservation Confirmed</h1>
            </div>
          </div>
          <div id="home-page" className='container reserved'>
            <ul id="search-results">
              <div className="d-flex">
                <i className="" />
                <div>
                  <h3>test</h3>
                  <p>test</p>
                  <button className='btn btn-dark'>Cancel Reservation</button>
                </div>
              </div>
            </ul>
          </div>
        </div>
      );
    }
    const welcomeMessage = route.path === 'sign-in'
      ? 'Please sign in to continue'
      : 'Create an account';
    return (
      <div className="row pt-5 align-items-center align-middle">
        <div className="col-12 offset-0 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-xl-4 offset-xl-4">
          <header className="text-center">
            <h3 className="mb-3">{welcomeMessage}</h3>
          </header>
          <div className="p-3 ">
            <AuthForm
              key={route.path}
              action={route.path}
              onSignIn={handleSignIn} />
          </div>
        </div>
      </div>
    );
  }
}
Reserve.contextType = AppContext;
