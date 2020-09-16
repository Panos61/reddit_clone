import React, { useState } from 'react';
import './styles/CreateSub.css';
import createsub from '../img/create-sub.png';
import Header from '../Components/Header';
import { Col, Row, Button, Label, Input, FormGroup } from 'reactstrap';
import { Link } from 'react-router-dom';
import Select from 'react-select';

const CreateSub = () => {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

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
          <form>
            <h6>Name</h6>
            <small style={{ color: '#a9a49c' }}>
              Community names including capitalization cannot be changed.
            </small>
            <Input type='text' id='sub_name' className='form-control my-3' />

            <h6>Topics</h6>
            <small style={{ color: '#a9a49c' }}>
              This will help relevant users find your community.
            </small>
            <Select options={options} className='mt-2' />

            <h6 className='mt-4'>Description</h6>
            <small style={{ color: '#a9a49c' }}>
              This is how new members come to understand your community.
            </small>
            <Input type='textarea' className='mt-1' />

            <h6 className='mt-4'>Community type</h6>
            <FormGroup check>
              <Label check>
                <Input type='radio' name='radio1' />
                Public
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type='radio' name='radio1' /> Restricted
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type='radio' name='radio3' /> Private
              </Label>
            </FormGroup>

            <h6 className='mt-5'>Adult content</h6>
            <FormGroup check>
              <Label check>
                <Input type='checkbox' />{' '}
                <span
                  style={{ color: 'red', fontWeight: 'bold' }}
                  className='mr-1'
                >
                  NSFW
                </span>
                <span style={{ fontSize: '16px' }}>8+ year old community</span>
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
