import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../store/modules/post/actions';
import Post from './Post.jsx';
import { Link } from 'react-router-dom';

const Posts = () => {
  const postsSelector = useSelector((state) => state.Post);
  const dispatch = useDispatch();

  const getPosts = () => dispatch(fetchPosts());

  useEffect(getPosts, []);

  const posts = postsSelector.posts.map((post) => {
    return (
      <div
        key={post.post_id}
        style={{ marginTop: '2%' }}
        className='post-card-hover'
      >
        <Link
          to={'/post/' + post.post_id}
          key={post.post_id}
          style={{ color: 'unset', textDecoration: 'none' }}
        >
          <Post post={post} key={post.post_id} />
        </Link>
      </div>
    );
  });

  return (
    <div>
      <div className='no-posts'>
        {posts.length > 0 ? (
          <>{posts}</>
        ) : (
          <div>
            <h6>No Posts yet :( </h6>
          </div>
        )}
      </div>
    </div>
  );
};

export default Posts;
