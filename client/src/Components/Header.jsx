import React, { useState, Fragment } from 'react';
import {
  Collapse,
  Button,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Input,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';
import logo from '../img/reddit_logo.png';
import './Header.css';
import Logout from './Logout';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const authMenu = (
  <Fragment>
    <Logout />
  </Fragment>
);

const guestMenu = (
  <Fragment>
    <Link to='/login'>
      <button className='guest-btn-login'>LOG IN</button>
    </Link>

    <Link to='/register'>
      <button className='guest-btn-register'>SIGN UP</button>
    </Link>

    <UncontrolledDropdown>
      <DropdownToggle nav caret style={{ color: '#1c1c2a', fontSize: '15px' }}>
        <i
          className='fa fa-user'
          aria-hidden='true'
          style={{ marginRight: '10px', color: '#878a8c', fontSize: '17px' }}
        />
      </DropdownToggle>
      <DropdownMenu right>
        <DropdownItem header style={{ fontSize: '11px', fontWeight: 'bold' }}>
          VIEW OPTIONS
        </DropdownItem>

        <DropdownItem>
          <i
            className='fa fa-moon-o'
            aria-hidden='true'
            style={{ marginRight: '8px' }}
          ></i>
          Night Mode
        </DropdownItem>
        <DropdownItem divider></DropdownItem>
        <DropdownItem>
          <i
            className='fa fa-sign-out'
            aria-hidden='true'
            style={{ marginRight: '8px' }}
          ></i>
          Log In / Sign Up
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  </Fragment>
);

const Header = () => {
  const currentState = useSelector((state) => state);
  const { isAuthenticated } = currentState.Auth;

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color='light' light expand='md'>
        <NavbarBrand href='/' style={{ fontWeight: '500' }}>
          <img src={logo} alt='' />
          reddit
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='mr-auto ' navbar>
            <UncontrolledDropdown nav inNavbar className='nav-sub-dropdown'>
              <DropdownToggle nav caret>
                Home
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <NavItem>
              <Input
                className='nav-search center'
                type='text'
                name='search'
                placeholder='Search'
              />
            </NavItem>
          </Nav>
          <Nav>
            <NavbarText>
              <div className='header__middle'>
                <Link to='/' style={{ textDecoration: 'none' }}>
                  <div className='header__option'>
                    <i className='fa fa-line-chart' aria-hidden='true'></i>
                  </div>
                </Link>
                <Link to='/' style={{ textDecoration: 'none' }}>
                  <div className='header__option'>
                    <i className='fa fa-bar-chart' aria-hidden='true' />
                  </div>
                </Link>
                <Link to='/' style={{ textDecoration: 'none' }}>
                  <div className='header__option'>
                    <i className='fa fa-commenting-o' aria-hidden='true' />
                  </div>
                </Link>
                <Link to='/' style={{ textDecoration: 'none' }}>
                  <div className='header__option'>
                    <i className='fa fa-envelope' aria-hidden='true' />
                  </div>
                </Link>
                <Link to='/submit' style={{ textDecoration: 'none' }}>
                  <div className='header__option'>
                    <i className='fa fa-pencil-square-o' aria-hidden='true' />
                  </div>
                </Link>
              </div>
            </NavbarText>
          </Nav>
          {isAuthenticated ? authMenu : guestMenu}
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
