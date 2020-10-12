/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { getPost } from '../store/modules/post/actions';
import {
  Card,
  CardBody,
  CardTitle,
  Row,
  Col,
  CardText,
  Container,
} from 'reactstrap';
//import avatar from '../img/avatar.png';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../Components/Header';
import AboutCom from '../Components/Post-Components/AboutCom';
import SubNav from '../Components/Post-Components/SubNav';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import NoComments from './components/NoComments';
import Submit from './components/Submit';

const PostLink = (props) => {
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
      <Header />

      <SubNav />

      <Container>
        <Row>
          <Col sm='8'>
            <Card style={{ marginTop: '3%' }}>
              <CardTitle>
                <div className='post-card-top'>
                  {/* <div className='post-card-sub'>
                    <Media left href='#'>
                      <img
                        src={avatar}
                        alt='avatar'
                        style={{ borderRadius: '40px', height: '23px' }}
                      />
                    </Media>
                  
                  </div> */}

                  <div className='post-card-name-date'>
                    Posted by u/{post.user_name}{' '}
                    <Moment fromNow ago>
                      {post.created_at}
                    </Moment>{' '}
                    ago
                  </div>
                </div>
              </CardTitle>
              <Row>
                <Col md='1' className='upvote-counter-container'>
                  <i className='fa fa-arrow-up' aria-hidden='true' />
                  <div className='upvote-counter'>•</div>
                  <i className='fa fa-arrow-down' aria-hidden='true' />
                </Col>
                <Col md='11'>
                  <CardTitle className='post-card-title'>
                    {post.post_title}
                  </CardTitle>

                  <CardBody>
                    <span className='post-card-body'>
                      {post.post_content}
                      <br />
                    </span>
                  </CardBody>

                  <CardText className='text-muted'>
                    <div className='card-bottom-container'>
                      <div className='card-bottom-container-opt'>
                        <i className='fa fa-comment' aria-hidden='true' /> 0
                        Comments
                      </div>
                      <div className='card-bottom-container-opt'>
                        <i className='fa fa-gift' aria-hidden='true' /> Give
                        Award
                      </div>
                      <div className='card-bottom-container-opt'>
                        <i className='fa fa-share' aria-hidden='true' /> Share
                      </div>
                      <div className='card-bottom-container-opt'>
                        <i className='fa fa-bookmark' aria-hidden='true' /> Save
                      </div>
                    </div>
                  </CardText>
                  <p style={{ fontSize: 'small' }}>
                    Comment as <Link to='/'>{post.user_name}</Link>{' '}
                  </p>

                  <Container>
                    <Submit />
                  </Container>
                </Col>
              </Row>
              {/* COMMENT SECTION */}
              <NoComments />
            </Card>
          </Col>

          {/* SUBREDDIT SIDE COMPONENTS */}
          <Col sm='4' style={{ marginTop: '5%' }}>
            <AboutCom />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PostLink;
