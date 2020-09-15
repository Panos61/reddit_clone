import React from 'react';
import { Button, Card } from 'reactstrap';
import './Feed.css';
import home from '../../img/home.png';
import homereddit from '../../img/home-reddit.png';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Card body style={{ marginTop: '10%' }}>
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

        <Button
          color='primary'
          size='sm'
          style={{ fontWeight: '700', marginBottom: '10px' }}
        >
          <Link to='/submit' style={{ color: 'unset', textDecoration: 'none' }}>
            CREATE POST
          </Link>
        </Button>
        <Button outline color='primary' size='sm' style={{ fontWeight: '700' }}>
          <Link to='/' style={{ color: 'unset', textDecoration: 'none' }}>
            CREATE COMMUNITY
          </Link>
        </Button>
      </Card>
    </>
  );
};

export default Home;
