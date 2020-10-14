import React from 'react';
import Header from '../Components/Header';
import { Container, Row, Col } from 'reactstrap';
import AboutUser from '../Components/Profile/AboutUser';
import AuthPosts from '../Components/Profile/AuthPosts';

const Profile = () => {
  return (
    <>
      <Header />
      <Container style={{ marginTop: '10vh' }}>
        <Row>
          <Col lg='8'>
            <h2>Profile</h2>
            <AuthPosts />
          </Col>
          <Col lg='4'>
            <AboutUser />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Profile;
