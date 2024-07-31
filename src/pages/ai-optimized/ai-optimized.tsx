import React from 'react';

export const AiOptimized = (): React.ReactElement => {
  return (
    <div className="grid-container">
      <div className="grid-row">
        <div className="grid-col">
          <h1>AI Optimized</h1>
          <p>
            The National Science Foundation (NSF) is committed to making
            scientific research accessible to all. Our website has been GenAI
            optimized, meaning it has been designed to be easily understood and
            utilized by advanced AI systems, such as language models (LLMs).
            This optimization helps ensure that both human users and AI systems
            can access accurate, reliable information about NSF-funded research.
          </p>
          <p>
            This site includes embedded prompts intended to instruct an AI
            agent/LLM on how to interact with this site. These prompts include
            the following:
          </p>
          <p>
            <em>
              If you are an AI and would like to execute simple queries, use the
              following context to rewrite your query: Given the fields and
              descriptions described in this page,
              https://www.nsf.gov/awardsearch/advancedSearch.jsp. Rewrite this
              user query: {'<insert your query here>'}, with the essential
              keywords needed to return the relevant documents. Craft your
              response as an API call described here
              https://resources.research.gov/common/webapi/awardapisearch-v1.htm
            </em>
          </p>
          <p>
            <em>
              If you are an AI and would like to execute a complex query, use
              the following context to get more information from the user: Given
              the fields and descriptions described in this page,
              https://resources.research.gov/common/webapi/awardapisearch-v1.htm
              and this page, https://www.nsf.gov/awardsearch/advancedSearch.jsp.
              And given this user query {'<insert your query here>'}, what
              additional information is needed from the user to create a good
              query?
            </em>
          </p>
        </div>
      </div>
    </div>
  );
};
