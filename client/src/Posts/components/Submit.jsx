import React, { useState } from 'react';
import { Input } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { submitComment } from '../../store/modules/comments/actions';

const Submit = ({ postID }) => {
  const [input, setInput] = useState({
    comment: '',
  });

  const dispatch = useDispatch();

  const { comment } = input;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);

    dispatch(
      submitComment({
        post_id: Number(postID),
        comment,
      })
    );
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

export default Submit;
