/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { Card, CardTitle, CardBody } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getPost } from '../../store/modules/post/actions';

const AboutCom = (props) => {
  const postID = props.match.params.id;

  const dispatch = useDispatch();
  const post_link = (id) => dispatch(getPost(id));

  const currentState = useSelector((state) => state);
  //const post = currentState.Post.post;
  const subreddit = currentState.Post.post;

  useEffect(() => {
    post_link(postID);
  }, []);

  return (
    <>
      <Card>
        <CardTitle>{subreddit.subreddit_name}</CardTitle>
        <CardBody>Some info..</CardBody>
      </Card>
    </>
  );
};

export default withRouter(AboutCom);
