import React from 'react';
import Header from '../Components/Header';
import { Container, Row, Col } from 'reactstrap';
import AboutUser from '../Components/Profile/AboutUser';
import AuthPosts from '../Components/Profile/AuthPosts';
import HelpBox from '../Components/HelpBox';

const Profile = () => {
  return (
    <>
      <Header />
      <Container style={{ marginTop: '10vh', marginBottom: '4vh' }}>
        <Row>
          <Col lg='8'>
            <h4 style={{ textDecoration: 'underline', color: '#33a8ff' }}>
              Posts
            </h4>
            <AuthPosts />
          </Col>
          <Col lg='4'>
            <AboutUser />
            <HelpBox />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Profile;
