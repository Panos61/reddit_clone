import React from 'react';
import { Card, CardText, Row, Col } from 'reactstrap';

const HelpBox = () => {
  return (
    <>
      <Card body style={{ marginTop: '10%' }}>
        <CardText>
          <Row
            style={{
              color: '#3f2a23',
              fontSize: '13px',
              cursor: 'pointer',
            }}
          >
            <Col sm={{ size: 4, offset: 0 }}>
              <ul>
                <li>Help</li>
                <li>Reddit App</li>
                <li>Reddit Coins</li>
                <li>Reddit Premium</li>
                <li>Reddit Gifts</li>
              </ul>
            </Col>
            <Col>
              <ul>
                <li>About</li>
                <li>Careers</li>
                <li>Press</li>
                <li>Advertise</li>
                <li>Blog</li>
                <li>Terms</li>
                <li>Content Policy</li>
                <li>Privacy Policy</li>
                <li>Mod Policy</li>
              </ul>
            </Col>
          </Row>
          <small>Reddit Inc © 2020. All rights reserved</small>
        </CardText>
      </Card>
    </>
  );
};

export default HelpBox;
