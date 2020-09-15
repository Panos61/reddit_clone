import React from 'react';
import './Post.css';
import {
  Card,
  CardBody,
  CardTitle,
  Row,
  Col,
  Media,
  CardText,
} from 'reactstrap';
import avatar from '../img/avatar.png';

const Post = ({ post }) => {
  return (
    <>
      <Card style={{ borderColor: '#cccccc' }}>
        <CardTitle>
          <div className='post-card-top'>
            <div className='post-card-sub'>
              <Media left href='#'>
                <img
                  src={avatar}
                  alt='avatar'
                  style={{ borderRadius: '40px', height: '23px' }}
                />
              </Media>
              r/javascript
            </div>

            <div className='post-card-name-date'>
              • Posted by u/{post.user_name} 11 hours ago
            </div>
          </div>
        </CardTitle>
        <Row>
          <Col md='1' className='upvote-counter-container'>
            <i class='fa fa-arrow-up' aria-hidden='true' />
            <div className='upvote-counter'>80</div>
            <i class='fa fa-arrow-down' aria-hidden='true' />
          </Col>
          <Col md='11'>
            <CardTitle className='post-card-title'>{post.title}</CardTitle>

            <CardBody>
              <span className='post-card-body'>
                {post.content}
                <br />
              </span>
            </CardBody>

            <CardText className='text-muted'>
              <div className='card-bottom-container'>
                <div className='card-bottom-container-opt'>
                  <i class='fa fa-comment' aria-hidden='true' /> 0 Comments
                </div>
                <div className='card-bottom-container-opt'>
                  <i class='fa fa-gift' aria-hidden='true' /> Give Award
                </div>
                <div className='card-bottom-container-opt'>
                  <i class='fa fa-share' aria-hidden='true' /> Share
                </div>
                <div className='card-bottom-container-opt'>
                  <i class='fa fa-bookmark' aria-hidden='true' /> Save
                </div>
              </div>
            </CardText>
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default Post;
