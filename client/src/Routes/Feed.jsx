import React, { useEffect } from 'react';
import Header from '../Components/Header';
import { useDispatch } from 'react-redux';
import { SET_CURRENT_USER } from '../store/modules/auth/types';
import setAuthorizationToken, { getMe } from '../store/modules/auth/actions';

import store from '../store';
import Posts from '../Posts/Posts';
import { Row, Col, Container } from 'reactstrap';
import HelpBox from '../Components/HelpBox';
import SubmitPost from '../Components/Feed/SubmitPost';
import SortBar from '../Components/Feed/SortBar';
import Home from '../Components/Feed/Home';

const Feed = () => {
  const dispatch = useDispatch();

  if (localStorage.token) {
    setAuthorizationToken(localStorage.token);
    dispatch(getMe());
    store.dispatch({ type: SET_CURRENT_USER });
  }

  useEffect(() => {
    getMe();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col lg='8' className='header-margin-top'>
            <SubmitPost />
            <SortBar />
            <Posts />
            .. <br />
            .. <br />
            .. <br />
            .. <br />
            .. <br />
            .. <br />
            .. <br />
            .. <br />
            .. <br />
            .. <br />
            .. <br />
            .. <br />
            .. <br />
            .. <br />
            .. <br />
            .. <br />
            .. <br />
            .. <br />
            .. <br />
            .. <br />
            .. <br />
            .. <br />
            .. <br />
            .. <br />
            .. <br />
            .. <br />
            .. <br />
            .. <br />
            .. <br />
            .. <br />
            .. <br />
          </Col>
          <Col lg='4'>
            <Home />
            <HelpBox />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Feed;
