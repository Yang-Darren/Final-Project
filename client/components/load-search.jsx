import React from 'react';
import { useLoadScript } from '@react-google-maps/api';

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
        Filler
      </div>
    );
  }
}
