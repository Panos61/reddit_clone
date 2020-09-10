import React, { useState } from 'react';
import background from '../img/login_background.png';
import { Col, Row, Button, Form, FormGroup, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './styles/LoginRegister.css';
import { login } from '../store/modules/auth/actions';

const Login = () => {
  const [input, setInput] = useState({
    email: '',
    password: '',
  });

  const { email, password } = input;

  const onChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    console.log(input);
    e.preventDefault();
    dispatch(login(input));
  };

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

        <form onSubmit={handleSubmit}>
          <input
            type='email'
            name='email'
            placeholder='email'
            className='form-control my-3'
            value={email}
            onChange={(e) => onChange(e)}
          />
          <input
            type='password'
            name='password'
            placeholder='password'
            className='form-control my-3'
            value={password}
            onChange={(e) => onChange(e)}
          />
          <Button color='primary' type='submit' block>
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
        </form>
      </div>
    </>
  );
};

export default Login;
