/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SubPosts from '../Posts/SubPosts';
import { getSubredditPage } from '../store/modules/subs/actions';
import { Row, Col, Container } from 'reactstrap';
import HelpBox from '../Components/HelpBox';
import Header from '../Components/Header';

const Subreddit = (props) => {
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
      <span>{subreddit.subreddit_name}</span>
      <Header />

      <Container>
        <Row style={{ marginTop: '5%' }}>
          <Col sm='8'>
            <SubPosts />
          </Col>

          {/* SUBREDDIT SIDE COMPONENTS */}
          <Col sm='4' style={{ marginTop: '5%' }}>
            <HelpBox />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Subreddit;
