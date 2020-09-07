import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={{ textAlign: 'center', position: 'relative', top: '40vh' }}>
      <h2>Oops! Error 404 - Not found</h2>
      <Link to='/'>Front Page</Link>
    </div>
  );
};

export default NotFound;
