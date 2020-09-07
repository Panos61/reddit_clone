import React, { useState } from 'react';
import background from '../img/login_background.png';
import { Col, Row, Button, Form, FormGroup, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import './styles/LoginRegister.css';

const Login = () => {
  const [input, setInput] = useState({
    email: '',
    password: '',
  });

  const { email, password } = input;

  const onChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  // const onSubmitForm = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const body = { email, password };

  //     const response = await fetch('http://localhost:4000/auth/register', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },

  //       body: JSON.stringify(body),
  //     });
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return (
    <>
      <div className='login-register-content'>
        <img src={background} alt='' />
      </div>

      <div className='login-form'>
        <Row form>
          <Col md={12}>
            <h5>Login</h5>

            <p style={{ marginBottom: '50px' }}>
              By continuing, you agree to our <Link to='/'>User Agreement</Link>{' '}
              and <Link to='/'>Privacy Policy</Link> .{' '}
            </p>

            {/* SOCIAL BTNS */}
            <button className='btn-social'>CONTINUE WITH GOOGLE</button>
            <button className='btn-social'>CONTINUE WITH APPLE</button>

            <div className='dropdown-divider' style={{ margin: '30px' }}></div>
          </Col>
        </Row>
        <Form>
          <Row form>
            <Col md={12}>
              <FormGroup>
                <Input
                  type='email'
                  name='email'
                  placeholder='email'
                  value={email}
                  onChange={(e) => onChange(e)}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={12}>
              <FormGroup>
                <Input
                  type='password'
                  name='password'
                  placeholder='password'
                  value={password}
                  onChange={(e) => onChange(e)}
                />
              </FormGroup>
            </Col>
          </Row>
          <Button color='primary' block>
            LOG IN
          </Button>
          <small className='form-text text-muted'>
            Forgot your <Link to='/login'>username</Link> or{' '}
            <Link to='/login'>password</Link> ?{' '}
          </small>

          <small className='mt-5'>
            New to Reddit?{' '}
            <Link to='/register' style={{ fontWeight: 'bold' }}>
              SIGN UP
            </Link>{' '}
          </small>
        </Form>
      </div>
    </>
  );
};

export default Login;
