import React, { useState } from 'react';
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
import HelpBox from '../Components/HelpBox';
import help from '../img/help.png';

const Submit = () => {
  const [input, setInput] = useState({
    title: '',
    content: '',
  });

  const { title, content } = input;

  const onChange = (e) => {
    e.preventDefault();
    setInput({ ...input, [e.target.name]: [e.target.value] });
  };

  return (
    <>
      <Header />
      <div className='container submit-container' style={{ marginTop: '3%' }}>
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
                <Input
                  type='text'
                  name='title'
                  value={title}
                  placeholder='Title'
                  onChange={(e) => onChange(e)}
                />
              </CardText>
              <CardText>
                <Input
                  type='textarea'
                  name='content'
                  value={content}
                  placeholder='Text (optional)'
                  onChange={(e) => onChange(e)}
                />
              </CardText>
            </Card>
          </Col>

          <Col sm='4'>
            <Card body>
              <CardTitle style={{ color: '#1c1c1c' }}>
                <img
                  src={help}
                  alt=''
                  style={{ height: '40px', backgroundColor: 'red' }}
                />
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
            <HelpBox />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Submit;
