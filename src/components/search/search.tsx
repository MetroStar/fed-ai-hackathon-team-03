import { Button, TextInput } from '@metrostar/comet-uswds';
import React, { KeyboardEvent } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

export const Search = (): React.ReactElement => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [currentSearch, setCurrentSearch] = React.useState<string>('');

  const handleSearchClick = () => {
    navigate(`/results?search=${currentSearch}`);
  };

  const handleSearch = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.key !== 'Enter') {
      return;
    }
    const value = (event.target as HTMLInputElement).value;
    navigate(`/results?search=${value}`);
  };

  return (
    <div className="display-flex flex-row height-full">
      <div className="display-flex flex-row width-full">
        <TextInput
          id="search-input"
          placeholder="Search awards..."
          defaultValue={searchParams.get('search') || ''}
          onKeyUp={handleSearch}
          onChange={(event) => setCurrentSearch(event.target.value)}
          autoFocus
        ></TextInput>
        <Button
          id="search-button"
          type="button"
          onClick={handleSearchClick}
          disabled={!currentSearch}
          className="margin-top-1 margin-left-1"
          style={{ height: '40px', width: '200px' }}
        >
          GovAI Search
        </Button>
      </div>
    </div>
  );
};
