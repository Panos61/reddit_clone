import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col, Card, CardBody, CardTitle } from 'reactstrap';
import Header from '../Components/Header';
import Moment from 'react-moment';
import { getSubreddits } from '../store/modules/subs/actions';
import { Link } from 'react-router-dom';

const Explore = () => {
  const dispatch = useDispatch();

  const subsSelector = useSelector((state) => state.SubReddit);

  const getAllSubs = () => dispatch(getSubreddits());

  useEffect(() => {
    getAllSubs();
  }, []);

  const subreddits = subsSelector.subreddits.map((subreddit) => {
    return (
      <div
        key={subreddit.subreddit_id}
        style={{ marginTop: '5%', marginBottom: '5%' }}
        className='post-card-hover'
      >
        <Header />
        <Container>
          <Row>
            <Col>
              <Card>
                <CardTitle style={{ textAlign: 'center', color: '#0079d3' }}>
                  <Link
                    to={'/subreddits/r/' + subreddit.subreddit_id}
                    key={subreddit.subreddit_id}
                  >
                    <h3> r/{subreddit.subreddit_name}</h3>
                  </Link>
                </CardTitle>
                <CardBody style={{ textAlign: 'center' }}>
                  <h6>{subreddit.subreddit_desc}</h6>
                  <p>Created at:</p>
                  <Moment format='D MMM, YYYY' withTitle>
                    {subreddit.created_at}
                  </Moment>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  });

  return (
    <div>
      <div className='no-posts'>
        {subreddits.length > 0 ? (
          <>{subreddits}</>
        ) : (
          <div>
            <h6>There are no subreddits! </h6>
          </div>
        )}
      </div>
    </div>
  );
};

export default Explore;
