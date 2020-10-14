import React from 'react';
import { Link } from 'react-router-dom';

const TrendingComLink = ({ subreddit }) => {
  return (
    <>
      <div className='trending-card-container'>
        <div className='trending-card-subs'>
          <span>
            <Link
              to={'/subreddits/r/' + subreddit.subreddit_id}
              key={subreddit.subreddit_id}
              style={{ textDecoration: 'none' }}
            >
              r/{subreddit.subreddit_name} {` `}
            </Link>
            <p style={{ fontWeight: '300' }}>[..] members</p>
          </span>
        </div>

        {/* <div className='trending-card-btn'>JOIN</div> */}
      </div>
    </>
  );
};

export default TrendingComLink;
