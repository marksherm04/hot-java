import React, { useState } from 'react';
import { useMutation } from '@apollo/client';

import { ADD_POST } from '../../utils/mutations';
import { QUERY_POSTS, QUERY_ME } from '../../utils/queries';

const PostForm = () => {
  const [postText, setText] = useState('');
  const [characterCount, setCharacterCount] = useState(0);

  const [addPost, { error}] = useMutation(ADD_POST, {
    update(cache, { data: { addPost } }) {
      try {
        const { posts } = cache.readQuery({ query: QUERY_POSTS });
        cache.writeQuery({
          query: QUERY_POSTS,
          data: { thoughts: [addPost, ...posts] }
        });
      } catch (e) {
        console.error(e);
      }

      const { me } = cache.readQuery({ query: QUERY_ME });
      cache.writeQuery({
        query: QUERY_ME,
        data: { me: { ...me, posts: [...me.posts, addPost] } }
      });
    }
  });

  const handleChange = event => {
    if (event.target.value.length <= 300 ) {
      setText(event.target.value);
      setCharacterCount(event.target.value.length);
    }
  };

  const handleFormSubmit = async event => {
    event.preventDefault();

    try {
      await addPost({
        variables: { postText }
      });
      setText('');
      setCharacterCount(0);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div> 
      <p className={`m-0 ${characterCount === 300 ? 'text error' : ''}`}>
      Character Count: {characterCount}/300
      {error && <span className='ml-2'>Something went wrong...</span>}
      </p>
      <form className='flex-row justify-center justify-space-between-md align-stretch' onSubmit={handleFormSubmit}>
        <label for='shopname'>Business Name</label>
        <input type='text' name='shopname'></input>
        <textarea
         placeholder=""
         value={postText}
         className='form-input col-12 col-md-9'
         onChange={handleChange}
        ></textarea>
        <button className='btn col-12 col-md-3' type='submit'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default PostForm;