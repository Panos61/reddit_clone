import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { joinSubreddit } from '../../store/modules/subs/actions';

const TrendingComLink = ({ subreddit }) => {
  const [showElement, setShowElement] = useState(true);

  const dispatch = useDispatch();

  const handleJoin = (e) => {
    e.preventDefault();
    dispatch(joinSubreddit(subreddit.subreddit_id));
    setShowElement(false);
  };

  return (
    <>
      <div className='trending-card-container'>
        <div className='trending-card-subs'>
          <span>
            r/{subreddit.subreddit_name}{' '}
            <p style={{ fontWeight: '300' }}>[..] members</p>
          </span>
        </div>
        {showElement ? (
          <div className='trending-card-btn' onClick={(e) => handleJoin(e)}>
            JOIN
          </div>
        ) : null}
      </div>
    </>
  );
};

export default TrendingComLink;
