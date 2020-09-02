import React, { Fragment } from 'react';
import { Button, Avatar } from '@material-ui/core';

// import Image from '../../assets/images/my-img.jpg';

import './tweetBox.css';

function TweetBox() {
  return (
    <Fragment>
      <div className="tweetBox">
        <form>
          <div className="tweetBox__input">
            <Avatar
              src={`https://pbs.twimg.com/profile_images/1246551315481690112/Fnv5yNb4_400x400.jpg`}
            />
            <input type="text" placeholder="What's happening?" />
          </div>
          <input
            className="tweetBox__imageInput"
            type="text"
            placeholder="Optional: Enter image URL"
          />

          <Button className="tweetBox__tweetButton">Tweet</Button>
        </form>
      </div>
    </Fragment>
  );
}
export default TweetBox;
