import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../store/modules/post/actions';
import Post from './Post';
import { Link } from 'react-router-dom';

const Posts = () => {
  const postsSelector = useSelector((state) => state.Post);
  const dispatch = useDispatch();

  const getAllPosts = () => dispatch(fetchPosts());

  useEffect(() => {
    getAllPosts();
  }, []);

  if (postsSelector.posts.length === 0) {
    return (
      <div id='parent-notification'>
        <div className='event-notification'>
          <h2>Empty</h2>
        </div>
      </div>
    );
  }

  const posts = postsSelector.posts.map((post) => {
    return (
      <>
        <Link to={'/post/' + post.id} key={post.id}>
          <Post post={post} key={post.id} />
        </Link>
      </>
    );
  });

  return <div className='posts-container'>{posts}</div>;
};

export default Posts;
