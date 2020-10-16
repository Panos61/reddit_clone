import React, { useState } from 'react';
import { Input } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { submitComment } from '../../store/modules/comments/actions';
import { withRouter } from 'react-router-dom';

const Submit = (props) => {
  const postID = props.match.params.id;
  const [input, setInput] = useState({
    comment: '',
    post_id: postID,
  });

  const dispatch = useDispatch();

  const { comment } = input;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);

    dispatch(submitComment(input));
  };

  const onChange = (e) => {
    e.preventDefault();
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          type='textarea'
          name='comment'
          value={comment}
          onChange={(e) => onChange(e)}
        />
        <button type='submit' className='comment-btn'>
          COMMENT
        </button>
      </form>
    </>
  );
};

export default withRouter(Submit);
