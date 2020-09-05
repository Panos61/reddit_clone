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
    // <div className='header'>
    //   <div className='header__left'>
    //     <img src={logo} alt='logo' />
    //     <span>Reddit Clone</span>
    //     <div className='header__input'>
    //       {/* <Select options={options} /> */}
    //     </div>
    //   </div>

    //   <form class='form-inline'>
    //     <input
    //       class='form-control mr-sm-2'
    //       type='search'
    //       placeholder='Search'
    //       aria-label='Search'
    //     />
    //   </form>

    //   <div className='header__middle'>
    //     <div className='header__option'>
    //       <i class='fa fa-line-chart' aria-hidden='true'></i>
    //     </div>
    //     <div className='header__option'>
    //       <i class='fa fa-bar-chart' aria-hidden='true'></i>
    //     </div>
    //     <div className='header__option'>
    //       <i class='fa fa-commenting-o' aria-hidden='true'></i>
    //     </div>
    //     <div className='header__option'>
    //       <i class='fa fa-envelope' aria-hidden='true'></i>
    //     </div>
    //     <div className='header__option'>
    //       <i class='fa fa-pencil-square-o' aria-hidden='true'></i>
    //     </div>
    //   </div>
    //   <div className='header_right'>
    //     <select name='' id=''>
    //       <option value=''>Meddle61</option>
    //       <option value='1'>1</option>
    //       <option value='1'>1</option>
    //       <option value='1'>1</option>
    //     </select>
    //   </div>
    // </div>

    <>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <a className='navbar-brand' href='#'>
          <img src={logo} alt='' style={{ height: '30px' }} />
          <span style={{ fontWeight: '500' }}>reddit</span>
        </a>
        <button
          class='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
            <li className='nav-item dropdown'>
              <a
                className='nav-link dropdown-toggle'
                href='#'
                id='navbarDropdown'
                role='button'
                data-toggle='dropdown'
                aria-haspopup='true'
                aria-expanded='false'
                style={{ width: '350px' }}
              >
                Dropdown
              </a>
              <div
                className='dropdown-menu'
                aria-labelledby='navbarDropdown'
                style={{ width: '350px' }}
              >
                <a className='dropdown-item' href='#'>
                  Action
                </a>
                <a className='dropdown-item' href='#'>
                  Another action
                </a>
                <div className='dropdown-divider'></div>
                <a className='dropdown-item' href='#'>
                  Something else here
                </a>
              </div>
            </li>
            <li>
              <form class='form-inline my-2 my-lg-0'>
                <input
                  className='form-control mr-sm-2'
                  type='search'
                  placeholder='Search'
                  aria-label='Search'
                  style={{ width: '75vh' }}
                />
              </form>
            </li>

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

            <li>
              <button
                type='button'
                class='btn btn-outline-warning'
                style={{ borderRadius: '30px' }}
              >
                Get Coins
              </button>
            </li>

            <li className='nav-item dropdown '>
              <a
                className='nav-link dropdown-toggle'
                href='#'
                id='navbarDropdown'
                role='button'
                data-toggle='dropdown'
                aria-haspopup='true'
                aria-expanded='false'
                style={{ width: '100px' }}
              >
                Dropdown
              </a>
              <div
                className='dropdown-menu '
                aria-labelledby='navbarDropdown'
                style={{ width: '100px' }}
              >
                <a className='dropdown-item' href='#'>
                  Action
                </a>
                <a className='dropdown-item' href='#'>
                  Another action
                </a>
                <div className='dropdown-divider'></div>
                <a className='dropdown-item' href='#'>
                  Something else
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
