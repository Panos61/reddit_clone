import React, { useState } from 'react';
import './styles/CreateSub.css';
import createsub from '../img/create-sub.png';
import Header from '../Components/Header';
import { Col, Row, Label, Input, FormGroup } from 'reactstrap';
//import { createSub } from '../store/modules/subs/actions';

const CreateSub = () => {
  const [input, setInput] = useState({
    name: '',
    topic: '',
    description: '',
    nsfw: '',
  });

  const { name, topic, description, nsfw } = input;

  const onChange = (e) => {
    setInput({ ...input, [e.target.name]: [e.target.value] });
  };

  const handleSubmit = (e) => {
    console.log(input);
    e.preventDefault();
  };

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <>
      <Header />
      <section id='login-background'>
        <div className='create-sub-content'>
          <img src={createsub} alt='create-sub-background' />
        </div>
        <div className='create-sub-form'>
          <Row form>
            <Col md={12}>
              <h6>Create a community</h6>
            </Col>
          </Row>
          <div className='dropdown-divider' style={{ margin: '30px' }}></div>
          <form onSubmit={handleSubmit}>
            <h6>Name</h6>
            <small style={{ color: '#a9a49c' }}>
              Community names including capitalization cannot be changed.
            </small>
            <Input
              type='text'
              id='sub_name'
              className='form-control my-3'
              name='name'
              value={name}
              onChange={(e) => onChange(e)}
            />

            <h6>Topics</h6>
            <small style={{ color: '#a9a49c' }}>
              This will help relevant users find your community.
            </small>

            <select
              name='topic'
              value={topic}
              style={{
                padding: '1px 11vh',
                color: '#0784d8',
              }}
              onChange={(e) => onChange(e)}
            >
              <option value='' disabled>
                Choose a topic
              </option>
              <option value='Arts'>Arts</option>
              <option value='Anime'>Anime</option>
              <option value='Career'>Career</option>
              <option value='Financial'>Financial</option>
              <option value='History'>History</option>
              <option value='Technology'>Technology</option>
            </select>

            <h6 className='mt-4'>Description</h6>
            <small style={{ color: '#a9a49c' }}>
              This is how new members come to understand your community.
            </small>
            <Input
              type='textarea'
              className='mt-1'
              name='description'
              value={description}
              onChange={(e) => onChange(e)}
            />

            <h6 className='mt-4'>Community type</h6>
            <small style={{ color: '#a9a49c' }}>Not working.</small>
            <FormGroup check>
              <Label check>
                <Input type='radio' name='radio1' disabled />
                Public
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type='radio' name='radio2' disabled /> Restricted
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type='radio' name='radio3' disabled /> Private
              </Label>
            </FormGroup>

            <h6 className='mt-5'>Adult content</h6>
            <FormGroup check>
              <Label check>
                <Input
                  type='checkbox'
                  value={nsfw}
                  onChange={(e) => onChange(e)}
                  name='nsfw'
                  disabled
                />
                <span
                  style={{ color: 'red', fontWeight: 'bold' }}
                  className='mr-1'
                >
                  NSFW
                </span>
                <span style={{ fontSize: '16px' }}>18+ year old community</span>
              </Label>
            </FormGroup>

            <button
              className='guest-btn-register mt-4'
              style={{ left: '45%', position: 'relative' }}
            >
              CREATE COMMUNITY
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default CreateSub;
