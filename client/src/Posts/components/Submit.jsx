import React, { useState } from 'react';
import { Input } from 'reactstrap';

const Submit = () => {
  const [input, setInput] = useState({
    comment: '',
  });

  const { comment } = input;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
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
