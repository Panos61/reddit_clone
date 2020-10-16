import React from 'react';
import './Comments.css';
import Moment from 'react-moment';
import { Media } from 'reactstrap';
import { Link } from 'react-router-dom';
import avatar from '../../img/avatar.png';

const userStyle = {
  fontSize: '15px',
};

const dateStyle = {
  fontSize: '12px',
  marginLeft: '6px',
  fontWeight: '300',
  display: 'inline-block',
};

const avatarStyle = {
  borderRadius: '40px',
  height: '25.5px',
  marginRight: '10px',
};

const Comments = ({ comment }) => {
  return (
    <div>
      <div className='comment-container'>
        <div className='comment-top'>
          <div className='comment-user-avatar'>
            <Media left href='#'>
              <img src={avatar} alt='avatar' style={avatarStyle} />
            </Media>
          </div>
          <Link
            to={'/users/' + comment.user_id}
            key={comment.user_id}
            style={{ color: 'unset' }}
          >
            <span style={userStyle}>{comment.user_name}</span>
          </Link>
          <span style={dateStyle}>
            <Link
              to={'/post/' + comment.post_id}
              key={comment.post_id}
              style={{ color: 'unset' }}
            >
              <Moment fromNow ago>
                {comment.submitted_at}
              </Moment>{' '}
              ago
            </Link>
          </span>
        </div>
        <div className='comment-bottom'>
          <div className='comment-body'>{comment.comment}</div>
          <div className='comment-options'>
            <i
              className='fa fa-arrow-up'
              aria-hidden='true'
              id='comment-upvote'
            />
            <i
              style={{
                marginRight: '10px',
                marginLeft: '10px',
                color: 'black',
              }}
            >
              •
            </i>
            <i
              className='fa fa-arrow-down'
              aria-hidden='true'
              id='comment-downvote'
            />

            <i
              class='fa fa-reply'
              aria-hidden='true'
              style={{ marginLeft: '10px' }}
            >
              <span style={{ marginLeft: '5px', fontWeight: 'bold' }}>
                Reply
              </span>
            </i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
