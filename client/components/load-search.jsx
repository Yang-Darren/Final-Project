import React from 'react';
import { useLoadScript } from '@react-google-maps/api';
import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete';
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

const PlacesAutocomplete = ({ setSelected }) => {
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
    const { lat, lng } = getLatLng(results[0]);
    setSelected({ lat, lng });
  };

  return (
    <div id="home-page" className='container'>
      <div id="search-home">
        <Combobox onSelect={handleSelect}>
          <ComboboxInput value={value} onChange={e => setValue(e.target.value)} disabled={!ready}
            className="combobox-input" placeholder='Enter Location' />
          <ComboboxPopover>
            <ComboboxList>
              {status === 'OK' &&
            data.map(({ placeId, description }) =>
              <ComboboxOption key={ placeId } value={ description } />)}
            </ComboboxList>
          </ComboboxPopover>
        </Combobox>
      </div>
      <a href="#request" className="btn btn-dark request">
        Request Now
      </a>

    </div>
  );
};
