import { Search } from '@src/components/search/search';
import React from 'react';

export const Home = (): React.ReactElement => {
  return (
    <div className="grid-container">
      <div className="grid-row">
        <div className="grid-col">
          <h1>Simple Search</h1>
          <div className="padding-y-1">
            Popular searches: <a href="">Topic 1</a>, <a href="">Topic 2</a>,{' '}
            <a href="">Topic 3</a>
          </div>
          <Search />
        </div>
      </div>
    </div>
  );
};
