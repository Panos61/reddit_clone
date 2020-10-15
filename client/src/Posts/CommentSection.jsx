import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchComments } from '../store/modules/comments/actions';
import Comments from './components/Comments';

const CommentSection = (props) => {
  const postID = props.match.params.id;
  const dispatch = useDispatch();
  const fetchAllComments = (id) => dispatch(fetchComments(id));

  const commentsSelector = useSelector((state) => state.Comments);

  useEffect(() => {
    fetchAllComments(postID);
  }, []);

  const comments = commentsSelector.comments.map((comment) => {
    return (
      <div key={comment.comment_id}>
        <Comments comment={comment} key={comment.comment_id} />{' '}
      </div>
    );
  });

  return (
    <>
      {comments.length > 0 ? (
        <> {comments}</>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span>No more communities to display. :(</span>
        </div>
      )}
    </>
  );
};

export default withRouter(CommentSection);
