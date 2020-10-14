import React from 'react';
import { Card, CardBody, Input, Media } from 'reactstrap';
import { useSelector } from 'react-redux';
import history from '../../history';
import './Feed.css';
import avatar from '../../img/avatar.png';
import { Link } from 'react-router-dom';

const SubmitPost = () => {
  const onClick = () => {
    let path = '/submit';
    history.push(path);
  };

  const currentState = useSelector((state) => state);
  const { isAuthenticated } = currentState.Auth;

  const userProfile = isAuthenticated
    ? `/users/${currentState.Auth.currentUser.user.user_id}`
    : '';

  return (
    <>
      <Card id='feed-submit-card' style={{ borderColor: '#cccccc' }}>
        <CardBody>
          <div className='submit__options'>
            <Media left href='#'>
              <Link to={userProfile}>
                <img src={avatar} alt='avatar' />
              </Link>
            </Media>

            <Input type='text' placeholder='Create Post' onClick={onClick} />

            <div className='submit__media'>
              <i className='fa fa-picture-o' aria-hidden='true' />
            </div>
            <div className='submit__link'>
              <i className='fa fa-link' aria-hidden='true' />
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default SubmitPost;
