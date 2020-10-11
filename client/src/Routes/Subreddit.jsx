/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSubredditPage } from '../store/modules/subs/actions';

const Subreddit = (props) => {
  const subredditID = props.match.params.id;

  const dispatch = useDispatch();
  const subreddit_link = (id) => dispatch(getSubredditPage(id));
  const currentState = useSelector((state) => state);

  const subreddit = currentState.SubReddit.subreddit;

  useEffect(() => {
    subreddit_link(subredditID);
  }, []);

  return (
    <>
      <span>{subreddit.subreddit_name}</span>
    </>
  );
};

export default Subreddit;
