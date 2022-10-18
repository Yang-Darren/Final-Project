import React from 'react';
import Home from './pages/home';
import Navbar from './components/navbar';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Navbar />
        <Home />
      </div>
    );
  }
}
