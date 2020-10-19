/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import './Profile.css';
import { Link, withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Card,
  CardBody,
  CardHeader,
  Media,
  CardTitle,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';
import Moment from 'react-moment';
import avatar from '../../img/avatar.png';
import { deleteUser, getUser } from '../../store/modules/auth/actions';

const headerStyle = {
  backgroundColor: '#33a8ff',
  color: '#ffffff',
  fontWeight: 'bold',
};

const AboutUser = (props) => {
  const userID = props.match.params.id;

  const currentState = useSelector((state) => state);

  const user = currentState.Auth.user;
  const { currentUser } = currentState.Auth;
  const AuthID = currentState.currentUser ? currentState.currentUser.id : '';

  const dispatch = useDispatch();
  const getUserInfo = (id) => dispatch(getUser(id));
  const deleteAccount = (id) => dispatch(deleteUser(id));

  // Get user
  useEffect(() => {
    getUserInfo(userID);
  }, []);

  const onDelete = (e) => {
    e.preventDefault();
    deleteAccount(AuthID);
  };

  const [modal, setModal] = useState(false);
  const toggle = () => {
    setModal(!modal);
  };

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
            {/* u/{currentUser ? currentUser.user.user_name : null} */}
          </span>
          <div className='about-user-container' style={{ marginTop: '2vh' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontWeight: '500', fontSize: '14px' }}>Karma</span>
              <span>[..]</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontWeight: '500', fontSize: '14px' }}>
                Cake day
              </span>
              <span>
                <i className='fa fa-birthday-cake' aria-hidden='true'></i>{' '}
                {'  '}{' '}
                {/* <Moment format='D MMM, YYYY' withTitle>
                  {currentUser ? currentUser.user.created_at : null}
                </Moment> */}
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
          {/* <p
            style={{
              textAlign: 'center',
              marginTop: '15px',
              textDecoration: 'underline',
              cursor: 'pointer',
              color: 'red',
            }}
            onClick={toggle}
          >
            Delete account
          </p> */}
        </CardBody>
      </Card>

      {/* Settings Modal */}
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Delete account</ModalHeader>
        <ModalBody>
          By deleting your account, you will permanently lose access of your
          account info! Are you sure?
        </ModalBody>
        <ModalFooter>
          <Button color='danger' block onClick={onDelete}>
            Delete my account
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default withRouter(AboutUser);
