import React from 'react';

export default class SearchHome extends React.Component {
  constructor(props) {
    super(props);
    this.autocomplete = null;

    this.state = {
      header: 'View Nearby Locations',
      request: false,
      locationText: ''
    };
  }

  render() {
    return (
      <div id="home-page" className='container'>
        <div>
          <h1>{this.state.header}</h1>
        </div>
      </div>
    );
  }
}
