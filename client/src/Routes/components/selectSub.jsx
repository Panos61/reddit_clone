import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
} from 'reactstrap';
import { getSubreddits } from '../../store/modules/subs/actions';

// Span Style
const spanStyle = {
  fontWeight: '500',
  fontSize: '15px',
};

const SelectSub = () => {
  const dispatch = useDispatch();
  const subredditSelector = useSelector((state) => state.SubReddit);

  const getaListOfSubs = () => dispatch(getSubreddits());

  useEffect(() => {
    getaListOfSubs();
  }, []);

  const subreddits = subredditSelector.subreddits.map((subreddit) => {
    return (
      <div key={subreddit.subreddit_id}>
        <DropdownItem>
          {' '}
          <span style={spanStyle}>r/{subreddit.subreddit_name}</span>
        </DropdownItem>
      </div>
    );
  });

  return (
    <>
      <UncontrolledDropdown style={{ marginBottom: '10px' }}>
        <DropdownToggle
          caret
          style={{
            backgroundColor: 'whitesmoke',
            color: '#8686a9',
            fontWeight: '500',
            fontSize: '15px',
          }}
        >
          Choose a community
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header style={{ fontSize: '10px', fontWeight: 'bold' }}>
            MY COMMUNITIES
          </DropdownItem>
          {subreddits}
        </DropdownMenu>
      </UncontrolledDropdown>
    </>
  );
};

export default SelectSub;
