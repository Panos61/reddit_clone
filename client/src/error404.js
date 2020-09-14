import React from 'react';
import { Link } from 'react-router-dom';
import notfound from './img/not-found.png';

const NotFound = () => {
  return (
    <>
      <section id='login-background' style={{ height: '100vh' }}>
        <div style={{ textAlign: 'center', position: 'relative', top: '12vh' }}>
          <img src={notfound} alt='not-found' style={{ height: '50vh' }} />
          <h2>Oops! Error 404 - Not found</h2>
          <Link to='/' style={{ textAlign: 'center' }}>
            Front Page
          </Link>
        </div>
      </section>
    </>
  );
};

export default NotFound;
