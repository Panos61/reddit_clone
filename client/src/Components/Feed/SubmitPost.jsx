import React from 'react';
import { Card, CardBody, Input, Media } from 'reactstrap';
import history from '../../history';
import './Feed.css';
import avatar from '../../img/avatar.png';

const SubmitPost = () => {
  const onClick = () => {
    let path = '/submit';
    history.push(path);
  };

  return (
    <>
      <Card id='feed-submit-card'>
        <CardBody>
          <div className='submit__options'>
            <Media left href='#'>
              <img src={avatar} />
            </Media>

            <Input type='text' placeholder='Create Post' onClick={onClick} />

            <div className='submit__media'>
              <i class='fa fa-picture-o' aria-hidden='true' />
            </div>
            <div className='submit__link'>
              <i class='fa fa-link' aria-hidden='true' />
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default SubmitPost;
