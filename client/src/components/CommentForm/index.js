import {useMutation} from '@apollo/client';
import React, { useState } from 'react';
import { ADD_COMMENT } from '../../utils/mutations';

const commentForm = ({ commentId }) => {
    const [commentBody, setBody] = useState('');
    const [characterCount, setCharacterCount] = useState(0);
    const [addComment, { error }] = useMutation(ADD_COMMENT);

    const handleChange = event => {
        if (event.target.value.length <= 250) {
            setBody(event.target.value);
            setCharacterCount(event.target.value.length);
        }
    };

    const commentFormSubmit = async event => {
        event.preventDefault();

        try{
            await addComment({
                variables: { commentBody, commentId }
            });
            setBody('');
            setCharacterCount(0);
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <div>
            <p className={`m-0" ${characterCount === 250 ? 'text error' : ''}`}>
            Character Count: {characterCount}/250
            {error && <span className="ml-2">Something went wrong...</span>}
            </p>
            <form className="flex-row justify-center justify space-between-md align-stretch" onSubmit={commentFormSubmit}>
                <textarea
                    placeholder="Leave a comment..."
                    value={commentBody}
                    className="form-imput col-12 col-md-9"
                    onChange={handleChange}
                ></textarea>
                <button className="btn col-12 col-md-3" type="submit">
                    Submit
                </button>
            </form>
        </div>
    )

}

export default commentForm;