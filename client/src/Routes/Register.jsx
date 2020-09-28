import React, { useState, Fragment } from 'react';
import background from '../img/login_background.png';
import { Col, Row, Button, FormGroup, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { register } from '../store/modules/auth/actions';
import './styles/LoginRegister.css';
import { REGISTER_ERROR, REGISTER_SUCCESS } from '../store/modules/auth/types';
import history from '../history';

const Register = () => {
  const [input, setInput] = useState({
    email: '',
    username: '',
    password: '',
  });

  const { email, username, password } = input;

  const onChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const body = { email, password, username };

      const response = await fetch('http://localhost:4000/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },

        body: JSON.stringify(body),
      });

      const parseRes = await response.json();
      dispatch({ type: REGISTER_SUCCESS, payload: parseRes });

      localStorage.setItem('token', parseRes.token);
      history.push('/');
    } catch (error) {
      dispatch({ type: REGISTER_ERROR });
      console.error(error);
    }
  };

  return (
    <Fragment>
      <section id='register-background'>
        <div className='login-register-content'>
          <img src={background} alt='' />
        </div>

        <div className='login-form'>
          <Row form>
            <Col md={12}>
              <h5>Sign Up</h5>

              <p style={{ marginBottom: '50px' }}>
                By continuing, you agree to our{' '}
                <Link to='/'>User Agreement</Link> and{' '}
                <Link to='/'>Privacy Policy</Link> .{' '}
              </p>

              <div className='form-check'>
                <input
                  className='form-check-input'
                  type='checkbox'
                  value=''
                  id='defaultCheck1'
                />
                <label className='form-check-label' htmlFor='defaultCheck1'>
                  I agree to get emails about cool stuff on Reddit
                </label>
              </div>

              {/* SOCIAL BTNS */}
              <button className='btn-social'>CONTINUE WITH GOOGLE</button>
              <button className='btn-social'>CONTINUE WITH APPLE</button>

              <div
                className='dropdown-divider'
                style={{ margin: '30px' }}
              ></div>
            </Col>
          </Row>
          <form onSubmit={handleSubmit}>
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
                    type='text'
                    name='username'
                    placeholder='username'
                    value={username}
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
            <Button color='primary' type='submit' block>
              SIGN UP
            </Button>
            <small className='form-text text-muted'>
              Forgot your <Link to='/login'>username</Link> or{' '}
              <Link to='/login'>password</Link> ?{' '}
            </small>

            <small className='mt-5'>
              Already a redditor?{' '}
              <Link to='/login' style={{ fontWeight: 'bold' }}>
                LOG IN
              </Link>{' '}
            </small>
          </form>
        </div>
      </section>
    </Fragment>
  );
};

export default Register;
