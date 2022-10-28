import React from 'react';
import { Autocomplete } from '@react-google-maps/api';
import LoadApi from './google-api';

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

        <div id="search-home">
          <div>
            <LoadApi>
              <Autocomplete>
                <input
                  type="text"
                  placeholder="Enter location"
                 />
              </Autocomplete>
            </LoadApi>
          </div>
        </div>
        <a href="#request" className="btn btn-dark request">
          Request Now
        </a>
        <ul />
      </div>
    );
  }
}
