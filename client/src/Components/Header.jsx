import React from 'react';
import './Header.css';
import logo from '../img/reddit_logo.png';
import Select from 'react-select';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const Header = () => {
  return (
    <div className='header'>
      <div className='header__left'>
        <img src={logo} alt='logo' />

        <div className='header__input'>
          {/* <Select options={options} /> */}
        </div>
      </div>

      <div className='header__middle'>
        <div className='header__option'>
          <i class='fa fa-line-chart' aria-hidden='true'></i>
        </div>
        <div className='header__option'>
          <i class='fa fa-bar-chart' aria-hidden='true'></i>
        </div>
        <div className='header__option'>
          <i class='fa fa-commenting-o' aria-hidden='true'></i>
        </div>
        <div className='header__option'>
          <i class='fa fa-envelope' aria-hidden='true'></i>
        </div>
        <div className='header__option'>
          <i class='fa fa-pencil-square-o' aria-hidden='true'></i>
        </div>
      </div>
      <div className='header_right'>
        <select name='' id=''>
          <option value='1'>1</option>
          <option value='1'>1</option>
          <option value='1'>1</option>
          <option value='1'>1</option>
        </select>
      </div>
    </div>
  );
};

export default Header;
