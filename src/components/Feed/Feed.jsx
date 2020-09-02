import React, { Fragment } from 'react';

import './feed.css';
import TweetBox from '../TweetBox/TweetBox';
import Post from '../Post/Post';

function Feed() {
  return (
    <Fragment>
      <div className="feed">
        <div className="feed__header">
          <h2>Home</h2>
        </div>
        <TweetBox />

        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </Fragment>
  );
}
export default Feed;
