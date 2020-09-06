import React, { Fragment, useState, useEffect } from 'react';
import FlipMove from 'react-flip-move';
import firebaseDB from '../../config/firebaseDB';

import './feed.css';
import TweetBox from '../TweetBox/TweetBox';
import Post from '../Post/Post';

function Feed() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const unsubscribe = firebaseDB
      .collection('posts')
      .orderBy('createdAt', 'desc')
      .onSnapshot((snapshot) => {
        return setPosts(
          snapshot.docs.map((doc) => {
            const data = {
              id: doc.id,
              ...doc.data(),
            };
            return data;
          })
        );
      });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <Fragment>
      <div className="feed">
        <div className="feed__header">
          <h2>Home</h2>
        </div>
        <TweetBox />

        <FlipMove>
          {posts.map((item) => {
            return <Post key={item.id} {...item} />;
          })}
        </FlipMove>
      </div>
    </Fragment>
  );
}
export default Feed;
