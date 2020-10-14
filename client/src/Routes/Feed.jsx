/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import Header from '../Components/Header';
import { useSelector } from 'react-redux';
import { getMe } from '../store/modules/auth/actions';
import Posts from '../Posts/Posts';
import { Row, Col, Container } from 'reactstrap';
import HelpBox from '../Components/HelpBox';
import SubmitPost from '../Components/Feed/SubmitPost';
import SortBar from '../Components/Feed/SortBar';
import Home from '../Components/Feed/Home';
import TrendingCom from '../Components/Feed/TrendingCom';
import MyFeedPosts from '../Posts/MyFeedPosts';
import VisitorTrending from '../Components/Feed/VisitorTrending';

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
        <Row style={{ marginBottom: '5vh' }}>
          <Col lg='8' xs='12' className='header-margin-top'>
            {isAuthenticated ? <SubmitPost /> : null}
            <SortBar />
            {/* If user is authenticated, fetch a list of a customized feed, else fetch all posts from any community */}
            {isAuthenticated ? <MyFeedPosts /> : <Posts />}

            <h6 style={{ color: 'red', marginTop: '2vh' }}>
              Disclaimer: A lot of details are missing or might be incomplete.
              Git-clone this repository and keep adding stuff in it!
            </h6>
          </Col>
          <Col lg='4'>
            {/* If user is authenticated, fetch a list of a all random communities to join, else fetch all random unjoined communities */}
            {isAuthenticated ? <TrendingCom /> : <VisitorTrending />}
            <Home />
            <HelpBox />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Feed;
