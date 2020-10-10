/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import './About.css';
import {
  Card,
  CardTitle,
  CardBody,
  CardHeader,
  Media,
  Button,
} from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getPost } from '../../store/modules/post/actions';
import avatar from '../../img/avatar.png';
import Moment from 'react-moment';

const headerStyle = {
  backgroundColor: 'gray',
  color: '#ffffff',
  fontWeight: 'bold',
};

const AboutCom = (props) => {
  const postID = props.match.params.id;

  const dispatch = useDispatch();
  const post_link = (id) => dispatch(getPost(id));

  const currentState = useSelector((state) => state);
  const post = currentState.Post.post;

  useEffect(() => {
    post_link(postID);
  }, []);

  return (
    <>
      <Card>
        <CardHeader style={headerStyle}>About Community</CardHeader>
        <CardTitle className='about-comm-title'>
          <Media left href='#'>
            <img
              src={avatar}
              alt='avatar'
              style={{
                borderRadius: '20px',
                height: '50px',
                marginTop: '10px',
                marginLeft: '10px',
              }}
            />
          </Media>
          r/{post.subreddit_name}
        </CardTitle>
        <CardBody>{post.subreddit_desc}</CardBody>

        <div className='dropdown-divider' style={{ marginTop: '5px' }}></div>
        <CardBody>
          <i className='fa fa-birthday-cake' aria-hidden='true'></i> {'  '}
          Created{' '}
          <Moment format='D MMM, YYYY' withTitle>
            {post.created_at}
          </Moment>
          <Button
            color='secondary'
            outline
            block
            style={{ marginTop: '15px', fontWeight: 'bolder' }}
          >
            JOIN
          </Button>
        </CardBody>
      </Card>
    </>
  );
};

export default withRouter(AboutCom);
