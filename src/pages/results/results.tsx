import { Card } from '@metrostar/comet-uswds';
import { Search } from '@src/components/search/search';
import { mockData } from '@src/data/award';
import { Award } from '@src/types/award';
import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ErrorNotification from '../../components/error-notification/error-notification';
import useAuth from '../../hooks/use-auth';
// import axios from '@src/utils/axios';

export const Results = (): React.ReactElement => {
  const [searchParams] = useSearchParams();
  const { isSignedIn } = useAuth();
  const [currentResults, setCurrentResults] = useState<Award[]>([]);

  const {
    isLoading,
    error,
    data: items,
  } = useQuery<Award[], { message: string }>({
    queryKey: ['awards'],
    queryFn: () =>
      // axios
      //   .get('/awards')
      //   .then((response) => {
      //     return response.data;
      //   })
      //   .then((data) => {
      //     return data.items;
      //   }),

      // TODO: Remove this mock response and uncomment above if API available
      Promise.resolve(mockData.items),
    enabled: isSignedIn,
  });

  useEffect(() => {
    if (items && !isLoading) {
      setCurrentResults(
        items.filter((result) =>
          result.title.toLowerCase().includes(searchParams.get('search') || ''),
        ),
      );
    }
  }, [items, isLoading, searchParams]);

  return (
    <div className="grid-container">
      <div className="grid-row padding-bottom-4">
        <div className="grid-col">
          <h1>Simple Search Results</h1>
          <Search />
        </div>
      </div>
      {error && (
        <div className="grid-row padding-bottom-4">
          <div className="grid-col">
            <ErrorNotification error={error.message} />
          </div>
        </div>
      )}
      <div className="grid-row">
        <div className="grid-col">
          <div className="width-full">
            {currentResults.length > 0 ? (
              currentResults.map((result) => (
                <Card id={`${result.id}`} key={result.id} className="padding-2">
                  <a href="#">{result.title}</a>
                  <p>
                    {result.awardeeName} | {result.agency}
                  </p>
                </Card>
              ))
            ) : (
              <div>No results</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
