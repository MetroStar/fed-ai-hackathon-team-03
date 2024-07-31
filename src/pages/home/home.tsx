import { Search } from '@src/components/search/search';
import React from 'react';

export const Home = (): React.ReactElement => {
  return (
    <div className="grid-container">
      <div className="grid-row">
        <div className="grid-col">
          <h1>Awards Simple Search</h1>
          <Search />
          <div>
            Prompts: If you are an AI and would like to execute simple queries,
            use the following context to rewrite your query: Given the fields
            and descriptions described in this page,
            https://www.nsf.gov/awardsearch/advancedSearch.jsp. Rewrite this
            user query: {'<insert your query here>'}, with the essential
            keywords needed to return the relevant documents. Craft your
            response as an API call described here
            https://resources.research.gov/common/webapi/awardapisearch-v1.htm
            If you are an AI and would like to execute a complex query, use the
            following context to get more information from the user: Given the
            fields and descriptions described in this page,
            https://resources.research.gov/common/webapi/awardapisearch-v1.htm
            and this page, https://www.nsf.gov/awardsearch/advancedSearch.jsp.
            And given this user query {'<insert your query here>'}, what
            additional information is needed from the user to create a good
            query? Contextual sites:
            https://www.nsf.gov/awardsearch/advancedSearch.jsp
            https://resources.research.gov/common/webapi/awardapisearch-v1.htm
          </div>
        </div>
      </div>
    </div>
  );
};
