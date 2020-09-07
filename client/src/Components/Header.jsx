import React, { useState } from 'react';
import {
  Collapse,
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

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color='light' light expand='md'>
        <NavbarBrand href='/'>
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

            <NavItem className='center'>
              <Input
                className='nav-search'
                type='email'
                name='email'
                id='exampleEmail2'
                placeholder='default'
              />
            </NavItem>
          </Nav>
          <Nav>
            <NavbarText>
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
            </NavbarText>
          </Nav>
          <UncontrolledDropdown>
            <DropdownToggle nav caret>
              Meddle61
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>Option 1</DropdownItem>
              <DropdownItem>Option 2</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Reset</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
