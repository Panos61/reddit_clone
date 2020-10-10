import React from 'react';
import './sub.css';

const SubNav = () => {
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
