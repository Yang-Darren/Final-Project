import React from 'react';
import Navbar from './components/navbar';
import SearchHome from './components/search-home';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Navbar />
        <SearchHome />
      </div>
    );
  }
}
