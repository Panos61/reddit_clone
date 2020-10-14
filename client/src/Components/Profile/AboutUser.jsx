/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import './Profile.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Card,
  CardBody,
  CardHeader,
  Media,
  CardTitle,
  Button,
} from 'reactstrap';
import Moment from 'react-moment';
import avatar from '../../img/avatar.png';

const headerStyle = {
  backgroundColor: '#33a8ff',
  color: '#ffffff',
  fontWeight: 'bold',
};

const AboutUser = () => {
  const currentState = useSelector((state) => state);
  const { currentUser, isAuthenticated } = currentState.Auth;
  return (
    <>
      <Card>
        <CardHeader style={headerStyle}>
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
          </CardTitle>
        </CardHeader>

        <CardBody>
          <span style={{ fontSize: '14px', fontWeight: '500' }}>
            {' '}
            u/{currentUser ? currentUser.user.user_name : null}
          </span>
          <div className='about-user-container' style={{ marginTop: '2vh' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontWeight: '500', fontSize: '14px' }}>Karma</span>
              <span>1043</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontWeight: '500', fontSize: '14px' }}>
                Cake day
              </span>
              <span>
                <i className='fa fa-birthday-cake' aria-hidden='true'></i>{' '}
                {'  '}{' '}
                <Moment format='D MMM, YYYY' withTitle>
                  {currentUser ? currentUser.user.created_at : null}
                </Moment>
              </span>
            </div>
          </div>
          <Button
            color='primary'
            block
            style={{ marginTop: '15px', fontWeight: 'bolder' }}
          >
            <Link
              to='/submit'
              style={{ color: 'unset', textDecoration: 'none' }}
            >
              NEW POST
            </Link>
          </Button>
          <h6>more options</h6>
        </CardBody>
      </Card>
    </>
  );
};

export default AboutUser;
