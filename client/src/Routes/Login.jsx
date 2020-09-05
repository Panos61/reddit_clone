import React from 'react';
import './styles/LoginRegister.css';
import background from '../img/login_background.png';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
      <div className='login-register-content'>
        <img src={background} alt='background' />
      </div>
      <div className='login-form'>
        <h5>Login</h5>
        <p style={{ marginBottom: '50px' }}>
          By continuing, you agree to our <Link to='/'>User Agreement</Link> and{' '}
          <Link to='/'>Privacy Policy</Link> .{' '}
        </p>

        {/* SOCIAL BTNS */}
        <button className='btn-social'>CONTINUE WITH GOOGLE</button>
        <button className='btn-social'>CONTINUE WITH APPLE</button>

        <div className='dropdown-divider' style={{ margin: '30px' }}></div>

        <form>
          <div className='form-group'>
            <input type='email' className='form-control' placeholder='email' />
          </div>
          <div className='form-group'>
            <input
              type='password'
              class='form-control'
              placeholder='password'
            />
          </div>
          <button type='submit' class='btn btn-primary btn-sm btn-block'>
            LOG IN
          </button>
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
