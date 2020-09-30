import React, { useEffect } from 'react';
import Header from '../Components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { SET_CURRENT_USER } from '../store/modules/auth/types';
import { getMe } from '../store/modules/auth/actions';

import store from '../store';
import Posts from '../Posts/Posts';
import { Row, Col, Container } from 'reactstrap';
import HelpBox from '../Components/HelpBox';
import SubmitPost from '../Components/Feed/SubmitPost';
import SortBar from '../Components/Feed/SortBar';
import Home from '../Components/Feed/Home';
import TrendingCom from '../Components/Feed/TrendingCom';

const Feed = () => {
  const currentState = useSelector((state) => state);
  const { isAuthenticated } = currentState.Auth;

  useEffect(() => {
    getMe();
  }, []);

  return (
    <>
      <Header />
      <Container className='themed-container'>
        <Row>
          <Col lg='8' className='header-margin-top'>
            {isAuthenticated ? <SubmitPost /> : null}
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
            <TrendingCom />
            <Home />
            <HelpBox />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Feed;
