import React from 'react';
import { Card } from 'reactstrap';
import './Feed.css';
import home from '../../img/home.png';
import homereddit from '../../img/home-reddit.png';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Card body style={{ marginTop: '20%' }}>
        <img src={home} alt='home' />
        <img
          src={homereddit}
          alt='home-reddit'
          style={{
            width: '40px',
            height: '60px',
            top: '-12px',
            position: 'relative',
            zIndex: 3,
          }}
        />
        <span style={{ position: 'relative', top: '-50px', left: '20%' }}>
          Home
        </span>
        <span
          style={{
            textAlign: 'center',
            position: 'relative',
            top: '-25px',
            fontSize: '15px',
          }}
        >
          Your personal Reddit frontpage. Come here to check in with your
          favorite communities.
        </span>

        <button className='home-btn-post'>
          <Link to='/submit'>CREATE POST </Link>
        </button>

        <button className='home-btn-community'>
          <Link to='/'>CREATE COMMUNITY</Link>
        </button>
      </Card>
    </>
  );
};

export default Home;
