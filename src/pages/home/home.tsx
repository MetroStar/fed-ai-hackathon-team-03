import { Search } from '@src/components/search/search';
import React from 'react';

export const Home = (): React.ReactElement => {
  return (
    <div className="grid-container">
      <div className="grid-row">
        <div className="grid-col">
          <h1>Awards Simple Search</h1>
          <Search />
        </div>
      </div>
    </div>
  );
};
