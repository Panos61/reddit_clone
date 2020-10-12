/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import './sub.css';
import { useDispatch, useSelector } from 'react-redux';
import { getPost } from '../../store/modules/post/actions';
import { withRouter } from 'react-router-dom';

const SubNav = (props) => {
  const postID = props.match.params.id;

  const dispatch = useDispatch();
  const post_link = (id) => dispatch(getPost(id));

  const currentState = useSelector((state) => state);
  const post = currentState.Post.post;

  useEffect(() => {
    post_link(postID);
  }, []);

  return (
    <div className='topnav'>
      <div className='mid'>
        <span>r/{post.subreddit_name}</span>
      </div>
      <a className='active' href='/link'>
        Posts
      </a>
      <a href='/link'>FAQ / Wiki</a>
    </div>
  );
};

export default withRouter(SubNav);
