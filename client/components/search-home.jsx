import React from 'react';

export default class SearchHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      header: 'View Nearby Locations',
      request: false
    };
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState({ value });
  }

  render() {
    return (
      <div id="home-page" className='container'>
        <div>
          <h1>{this.state.header}</h1>
        </div>

        <div id="search-home">
          <div>
            <input required name="search" type="text" id="search" />
          </div>
        </div>
        <a href="#request" className="btn btn-dark request">
          Request Now
        </a>
      </div>
    );
  }
}
