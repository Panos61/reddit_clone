import React from 'react';
import { useDispatch } from 'react-redux';
import { joinSubreddit } from '../../store/modules/subs/actions';

const TrendingComLink = ({ subreddit }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className='trending-card-container'>
        <div className='trending-card-subs'>
          <span>
            r/{subreddit.subreddit_name}{' '}
            <p style={{ fontWeight: '300' }}>[..] members</p>
          </span>
        </div>

        {/* <div className='trending-card-btn'>JOIN</div> */}
      </div>
    </>
  );
};

export default TrendingComLink;
