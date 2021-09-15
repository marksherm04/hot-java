import React from 'react';
import { Link } from 'react-router-dom';

const CommentList = ({ comments }) => {
  return (
    <div className="card mb-3">
      <div className="card-header">
        <span className="text-light">Comments</span>
      </div>
      <div className="card-body">
        {comments &&
          comments.map(comments => (
            <p className="pill mb-3" key={comments._id}>
              {comments.commentBody} {'//'}
              <Link to ={`profile/${comments.username}`}>
                {comments.username} on {comments.createdAt}
              </Link>
            </p>
          ))}
      </div>
    </div>
  );
};
export default CommentList;