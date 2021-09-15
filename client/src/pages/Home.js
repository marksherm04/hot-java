import React from 'react';
import { useQuery } from '@apollo/client';

import { QUERY_POSTS, QUERY_ME_BASIC } from '../utils/queries';
// import PostList from '../components/PostList';
import Auth from '../utils/auth';
import PostForm from '../components/PostForm';

const Home = () => {
  const { loading, data } = useQuery(QUERY_POSTS);

  const posts = data?.posts || [];
  console.log(posts);

  const loggedIn = Auth.loggedIn();

  return (
    <main>
      <div className='flex-row justify-space-between'>
        {loggedIn && (
          <div className='col-12 mb-3'>
            <PostForm />
          </div>
        )}
        <div className={`col-12 mb-3 ${loggedIn && 'col-lg-8'}`}>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <PostList posts={posts} title="Here's the hottest cups in town..." />
          )}
        </div>
      </div>
    </main>
  )
}

export default Home;