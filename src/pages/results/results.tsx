import { Search } from '@src/components/search/search';
import { mockData } from '@src/data/award';
import { Award } from '@src/types/award';
import { useQuery } from '@tanstack/react-query';
import React, { useEffect } from 'react';
import ErrorNotification from '../../components/error-notification/error-notification';
import useAuth from '../../hooks/use-auth';
// import axios from '@src/utils/axios';

export const Results = (): React.ReactElement => {
  const { isSignedIn } = useAuth();
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
    if (!isLoading && items) {
      console.log(items);
    }
  }, [isLoading, items]);

  return (
    <div className="grid-container">
      <div className="grid-row padding-bottom-2">
        <div className="grid-col">
          <h1>Simple Search Results</h1>
          <Search />
        </div>
      </div>
      {error && (
        <div className="grid-row padding-bottom-2">
          <div className="grid-col">
            <ErrorNotification error={error.message} />
          </div>
        </div>
      )}
    </div>
  );
};
