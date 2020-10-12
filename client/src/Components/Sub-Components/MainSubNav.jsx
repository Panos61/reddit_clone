/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import '../Post-Components/sub.css'; // Common CSS file for both SubNavbars
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getSubredditPage } from '../../store/modules/subs/actions';
//import avatar from '../../img/avatar.png';

// Extra Style
const flexStyle = {
  display: 'flex',
  flexDirection: 'column',
};

const pStyle = {
  fontWeight: '300',
  fontSize: '15px',
};

const MainSubNav = (props) => {
  const subredditID = props.match.params.id;

  const dispatch = useDispatch();
  const subreddit_link = (id) => dispatch(getSubredditPage(id));
  const currentState = useSelector((state) => state);

  const subreddit = currentState.SubReddit.subreddit;

  useEffect(() => {
    subreddit_link(subredditID);
  }, []);

  return (
    <div className='topnav' style={{ marginTop: '50px' }}>
      <div className='mid' style={flexStyle}>
        <span>{subreddit.subreddit_desc}</span>
        <p style={pStyle}>r/{subreddit.subreddit_name}</p>
      </div>
      <a className='active' href='/link'>
        Posts
      </a>
      <a href='/link'>FAQ / Wiki</a>
    </div>
  );
};

export default withRouter(MainSubNav);
