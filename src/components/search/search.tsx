import { TextInput } from '@metrostar/comet-uswds';
import React, { KeyboardEvent } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

export const Search = (): React.ReactElement => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const handleSearch = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.key !== 'Enter') {
      return;
    }

    const value = (event.target as HTMLInputElement).value;
    navigate(`/results?search=${value}`);
  };

  return (
    <div className="display-flex flex-row height-full">
      <div className="flex-align-self-start width-full">
        <TextInput
          id="search-input"
          placeholder="Type your search here and press enter to submit..."
          defaultValue={searchParams.get('search') || ''}
          onKeyUp={handleSearch}
          autoFocus
        ></TextInput>
      </div>
    </div>
  );
};
