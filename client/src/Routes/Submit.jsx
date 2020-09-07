import React from 'react';
import {
  Card,
  CardTitle,
  CardText,
  Row,
  Col,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Input,
} from 'reactstrap';
import Header from '../Components/Header';

const Submit = () => {
  return (
    <>
      <Header />
      <div className='container submit-container'>
        <Row>
          <Col sm='8'>
            <h5>Create a post</h5>
            <div className='dropdown-divider' style={{ margin: '10px' }}></div>
            <UncontrolledDropdown style={{ marginBottom: '10px' }}>
              <DropdownToggle
                caret
                style={{
                  backgroundColor: 'whitesmoke',
                  color: '#8686a9',
                  fontWeight: '500',
                  fontSize: '15px',
                }}
              >
                Choose a community
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem header>Header</DropdownItem>
                <DropdownItem disabled>Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Another Action</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <Card body>
              <CardTitle>
                <div className='submit-header'>
                  <div className='submit-option'>
                    <button>Post</button>
                  </div>
                  <div className='submit-option'>
                    <button>Images</button>
                  </div>
                  <div className='submit-option'>
                    <button>Link</button>
                  </div>
                  <div className='submit-option'>
                    <button>Poll</button>
                  </div>
                </div>
              </CardTitle>
              <CardText>
                <Input type='text' name='title' placeholder='Title' />
              </CardText>
              <CardText>
                <Input
                  type='textarea'
                  name='text'
                  placeholder='Text (optional)'
                />
              </CardText>
            </Card>
          </Col>

          <Col sm='4'>
            <Card body>
              <CardTitle style={{ color: '#1c1c1c' }}>
                Posting to Reddit
              </CardTitle>
              <CardText>
                <div className='dropdown-divider'></div>

                <span style={{ fontSize: '15px' }}>1. Remember the human</span>
                <div className='dropdown-divider'></div>
                <span style={{ fontSize: '15px' }}>
                  2. Behave like you would in real life
                </span>
                <div className='dropdown-divider'></div>
                <span style={{ fontSize: '15px' }}>
                  3. Look for the original source of content
                </span>
                <div className='dropdown-divider'></div>
                <span style={{ fontSize: '15px' }}>
                  4. Search for duplicates before posting
                </span>
                <div className='dropdown-divider'></div>
                <span style={{ fontSize: '15px' }}>
                  5. Read the community’s rules
                </span>
                <div className='dropdown-divider'></div>
              </CardText>
            </Card>
            <small style={{ color: '#7e7f82', fontWeight: '500' }}>
              Please be mindful of reddit's content policy and practice good
              reddiquette.
            </small>
          </Col>
          <Col sm={{ size: 4, offset: 8 }} style={{ marginTop: '2vh' }}>
            <Card body>
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
            <small style={{ color: '#7e7f82', fontWeight: '500' }}>
              Please be mindful of reddit's content policy and practice good
              reddiquette.
            </small>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Submit;
