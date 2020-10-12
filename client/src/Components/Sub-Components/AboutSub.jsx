/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import '../Post-Components/sub.css';
import {
  Card,
  CardTitle,
  CardBody,
  CardHeader,
  Media,
  Button,
} from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import avatar from '../../img/avatar.png';
import Moment from 'react-moment';
import { getSubredditPage } from '../../store/modules/subs/actions';

const headerStyle = {
  backgroundColor: 'gray',
  color: '#ffffff',
  fontWeight: 'bold',
};

const AboutSub = (props) => {
  const subredditID = props.match.params.id;

  const dispatch = useDispatch();
  const subreddit_link = (id) => dispatch(getSubredditPage(id));
  const currentState = useSelector((state) => state);

  const subreddit = currentState.SubReddit.subreddit;

  useEffect(() => {
    subreddit_link(subredditID);
  }, []);

  return (
    <>
      <Card>
        <CardHeader style={headerStyle}>About Community</CardHeader>
        <CardTitle className='about-comm-title'>
          <Media left href='#'>
            <img
              src={avatar}
              alt='avatar'
              style={{
                borderRadius: '20px',
                height: '50px',
                marginTop: '10px',
                marginLeft: '10px',
              }}
            />
          </Media>
          r/{subreddit.subreddit_name}
        </CardTitle>
        <CardBody>{subreddit.subreddit_desc}</CardBody>

        <div className='dropdown-divider' style={{ marginTop: '5px' }}></div>
        <CardBody>
          <i className='fa fa-birthday-cake' aria-hidden='true'></i> {'  '}
          Created{' '}
          <Moment format='D MMM, YYYY' withTitle>
            {subreddit.created_at}
          </Moment>
          <Button
            color='primary'
            block
            style={{ marginTop: '15px', fontWeight: 'bolder' }}
          >
            <Link
              to='/submit'
              style={{ color: 'unset', textDecoration: 'none' }}
            >
              CREATE POST
            </Link>
          </Button>
        </CardBody>
      </Card>
    </>
  );
};

export default withRouter(AboutSub);
