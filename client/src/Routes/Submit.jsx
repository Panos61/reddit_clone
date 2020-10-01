import React, { useState } from 'react';
import './styles/Submit.css';
import { Card, CardTitle, CardText, Row, Col, Input } from 'reactstrap';
import { useDispatch } from 'react-redux';
import Header from '../Components/Header';
import HelpBox from '../Components/HelpBox';
import help from '../img/help.png';
import SelectSub from './components/selectSub';

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
            <SelectSub />
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
              <CardText>
                <div className='bottom-line-container'>
                  <div className='extra-bottom'>
                    <button className='bottom-line-extra-btn'>OC</button>
                    <button className='bottom-line-extra-btn'>SPOILER</button>
                    <button className='bottom-line-extra-btn'>NSFW</button>
                    <button className='bottom-line-extra-btn'>FLAIR</button>
                  </div>
                  <div className='primary-bottom-btns'>
                    <button className='primary-bottom-btn-cancel'>
                      CANCEL
                    </button>
                    <button className='primary-bottom-btn-post'>POST</button>
                  </div>
                </div>
                <div
                  className='dropdown-divider'
                  style={{ margin: '10px' }}
                ></div>
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
