import React from 'react';
import './styles/LoginRegister.css';
import background from '../img/login_background.png';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <>
      <div className='login-register-content'>
        <img src={background} alt='background' />
      </div>
      <div className='login-form'>
        <h5>Sign Up</h5>
        <p style={{ marginBottom: '50px' }}>
          By continuing, you agree to our <Link to='/'>User Agreement</Link> and{' '}
          <Link to='/'>Privacy Policy</Link> .{' '}
        </p>

        <div className='form-check'>
          <input
            className='form-check-input'
            type='checkbox'
            value=''
            id='defaultCheck1'
          />
          <label className='form-check-label' for='defaultCheck1'>
            I agree to get emails about cool stuff on Reddit
          </label>
        </div>

        {/* SOCIAL BTNS */}
        <button className='btn-social'>CONTINUE WITH GOOGLE</button>
        <button className='btn-social'>CONTINUE WITH APPLE</button>

        <div className='dropdown-divider' style={{ margin: '30px' }}></div>

        <form>
          <div className='form-group'>
            <input type='email' className='form-control' placeholder='email' />
          </div>

          <button type='submit' class='btn btn-primary btn-sm btn-block'>
            CONTINUE
          </button>

          <small className='mt-5'>
            Already a redditor?{' '}
            <Link to='/login' style={{ fontWeight: 'bold' }}>
              LOG IN
            </Link>{' '}
          </small>
        </form>
      </div>
    </>
  );
};

export default Register;
