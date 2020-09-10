import React from 'react';
import { useSelector } from 'react-redux';
import { Card } from 'reactstrap';

const Post = ({ post }) => {
  const currentState = useSelector((state) => state);

  return <Card key={post.post_id}>{post.content}</Card>;
};

export default Post;
