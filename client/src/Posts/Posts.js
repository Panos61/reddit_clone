import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../store/modules/post/actions';
import Post from './Post';
import { Link } from 'react-router-dom';

const Posts = () => {
  const postsSelector = useSelector((state) => state.Post);
  const dispatch = useDispatch();

  const getPosts = () => dispatch(fetchPosts());

  useEffect(() => {
    getPosts();
  }, []);

  const posts = postsSelector.posts.map((post) => {
    return (
      <div key={post.post_id} style={{ marginTop: '2%' }}>
        <Post post={post} key={post.post_id} />
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
            <p>No Posts yet :( </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Posts;
