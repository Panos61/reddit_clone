import React from 'react';
import { logout } from '../store/modules/auth/actions';
import { useSelector, useDispatch } from 'react-redux';
import {
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
  UncontrolledDropdown,
} from 'reactstrap';

const Logout = () => {
  const dispatch = useDispatch();
  const currentState = useSelector((state) => state);
  const { currentUser } = currentState.Auth;

  const logoutUser = () => dispatch(logout());

  return (
    <>
      <UncontrolledDropdown>
        <DropdownToggle
          nav
          caret
          style={{ color: '#1c1c2a', fontSize: '15px' }}
        >
          {currentUser ? currentUser.user.user_name : null}
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem>
            <i
              className='fa fa-user'
              aria-hidden='true'
              style={{ marginRight: '8px' }}
            ></i>
            My Profile
          </DropdownItem>
          <DropdownItem>
            <i
              className='fa fa-cog'
              aria-hidden='true'
              style={{ marginRight: '8px' }}
            ></i>
            Settings
          </DropdownItem>
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
          <DropdownItem onClick={logoutUser}>
            <i
              className='fa fa-sign-out'
              aria-hidden='true'
              style={{ marginRight: '8px' }}
            ></i>
            Log Out
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </>
  );
};

export default Logout;
