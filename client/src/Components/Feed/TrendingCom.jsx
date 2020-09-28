import React, { useEffect } from 'react';
import './Trending.css';
import { Card, CardTitle, CardBody } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getSubreddits } from '../../store/modules/subs/actions';
import TrendingComLink from './TrendingComLink';

const TrendingCom = () => {
  const dispatch = useDispatch();

  const subredditSelector = useSelector((state) => state.SubReddit);
  const getaListOfSubs = () => dispatch(getSubreddits());

  useEffect(() => {
    getaListOfSubs();
  }, []);

  const subreddits = subredditSelector.subreddits.map((subreddit) => {
    return (
      <div key={subreddit.subreddit_id}>
        {' '}
        <TrendingComLink
          subreddit={subreddit}
          key={subreddit.subreddit_id}
        />{' '}
      </div>
    );
  });

  return (
    <>
      <Card body style={{ marginTop: '27%' }}>
        <CardTitle>
          <h6 style={{ fontWeight: 'bold' }}>Trending Communities</h6>
        </CardTitle>
        <CardBody>{subreddits}</CardBody>
      </Card>
    </>
  );
};

export default TrendingCom;
