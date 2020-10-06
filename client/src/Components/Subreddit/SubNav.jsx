import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getSubreddits } from '../../store/modules/subs/actions';
import './sub.css';

const SubNav = () => {
  const dispatch = useDispatch();

  return (
    <div class='topnav'>
      <div className='mid'>
        <span>r/subreddit</span>
      </div>
      <a className='active' href='#home'>
        Posts
      </a>
      <a href='#news'>FAQ / Wiki</a>
    </div>
  );
};

export default SubNav;
