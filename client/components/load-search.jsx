import React, { useState } from 'react';
import { useLoadScript } from '@react-google-maps/api';
import usePlacesAutocomplete, { getGeocode } from 'use-places-autocomplete';
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption
} from '@reach/combobox';
import '@reach/combobox/styles.css';

export default function Places() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries: ['places']
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Search />;

  function Search() {
    return (
      <div className="places-container">
        <PlacesAutocomplete />
      </div>
    );
  }
}

function PlacesAutocomplete() {
  const [city, setCity] = useState(null);
  const [availableLocations, setAvailablelocations] = useState(null);
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions
  } = usePlacesAutocomplete();

  const handleSelect = async address => {
    setValue(address, false);
    clearSuggestions();

    const results = await getGeocode({ address });
    for (let i = 0; i < results[0].address_components.length; i++) {
      if (results[0].address_components[i].types[0] === 'locality') {
        const citySearched = results[0].address_components[i].long_name;
        setCity(citySearched);
      }
    }
  };

  const handleClick = () => {

    fetch('/api/locations/')
      .then(res => res.json())
      .then(data => {
        for (let i = 0; i < data.length; i++) {
          if (data[i].city === city) {
            setAvailablelocations(data[i]);
            return;
          } else if (data[i].city !== city) {
            setAvailablelocations('none');
          }
        }
      });
  };

  return (
    <div id="home-page" className='container'>
      <div id="search-home">
        <Combobox onSelect={handleSelect}>
          <ComboboxInput value={value} onChange={e => setValue(e.target.value)} disabled={!ready}
            className="combobox-input" placeholder='Enter Location' />
          <ComboboxPopover className='list'>
            <ComboboxList>
              {status === 'OK' &&
            data.map(({ placeId, description }) =>
              <ComboboxOption key={ placeId } value={ description } />)}
            </ComboboxList>
          </ComboboxPopover>
        </Combobox>
      </div>
      <button onClick={handleClick} href="#request" className="btn btn-dark request">
        Request Now
      </button>

      {availableLocations === null &&
        <>
        </>
      }
      {availableLocations === 'none' &&
        <div id="home-page" className='container'>
          <div>
            <h2>No Nearby Locations</h2>
          </div>
        </div>
      }
      {availableLocations !== null && availableLocations !== 'none' &&
        <ul id="search-results">
          <div className="d-flex">
            <i className='fa-solid fa-briefcase fa-7x col-4' />
            <div>
              <h3 className=''>{availableLocations.locationName}</h3>
              <p className=''>{availableLocations.locationAddress}</p>
              <button className='btn btn-light'>Reserve Now</button>
            </div>
          </div>
        </ul>
      }

    </div>
  );
}
