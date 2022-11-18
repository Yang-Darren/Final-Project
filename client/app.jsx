import React from 'react';
import Navbar from './components/navbar';
import SearchHome from './components/search-home';
import Places from './components/load-search';

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
        <Places />
      </div>
    );
  }
}
