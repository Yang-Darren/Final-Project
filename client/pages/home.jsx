import React from 'react';
import SearchHome from '../components/search-home';
import Places from '../components/load-search';

export default function Home(props) {
  return (
    <div>
      <SearchHome />
      <Places />
    </div>
  );
}
