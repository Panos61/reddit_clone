/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import SubPosts from '../Posts/SubPosts';
import { getSubredditPage } from '../store/modules/subs/actions';
import { Row, Col, Container } from 'reactstrap';
import HelpBox from '../Components/HelpBox';
import Header from '../Components/Header';
import MainSubNav from '../Components/Sub-Components/MainSubNav';
import SubmitPost from '../Components/Feed/SubmitPost';
import SortBar from '../Components/Feed/SortBar';
import AboutSub from '../Components/Sub-Components/AboutSub';

const Subreddit = (props) => {
  const subredditID = props.match.params.id;

  const dispatch = useDispatch();
  const subreddit_link = (id) => dispatch(getSubredditPage(id));
  // const currentState = useSelector((state) => state);

  // const subreddit = currentState.SubReddit.subreddit;

  useEffect(() => {
    subreddit_link(subredditID);
  }, []);

  return (
    <>
      <Header />
      <MainSubNav />

      <Container>
        <Row>
          <Col sm='8'>
            <SubmitPost />
            <SortBar />
            <SubPosts />
          </Col>

          {/* SUBREDDIT SIDE COMPONENTS */}
          <Col sm='4' style={{ marginTop: '5%' }}>
            <AboutSub />
            <HelpBox />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Subreddit;
