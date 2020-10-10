import React from 'react';

const divStyle = {
  textAlign: 'center',
  marginTop: '9vh',
  marginBottom: '4vh',
  display: 'flex',
  flexDirection: 'column',
};

const iStyle = {
  color: 'rgba(0,121,211,0.5)',
  fontSize: '30px',
};

const spanStyle = {
  color: '#878a8c',
  fontWeight: 500,
  fontSize: '18px',
};

const pStyle = {
  color: '#878a8c',
  fontWeight: 400,
  fontSize: '14px',
  marginTop: '7px',
};

const NoComments = () => {
  return (
    <div style={divStyle}>
      <i class='fa fa-comments' aria-hidden='true' style={iStyle}></i>
      <span style={spanStyle}>No Comments Yet</span>
      <p style={pStyle}>Be the first to share what you think!</p>
    </div>
  );
};

export default NoComments;
