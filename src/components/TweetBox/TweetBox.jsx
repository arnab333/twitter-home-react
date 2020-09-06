import React, { Fragment, useState } from 'react';
import { Button, Avatar } from '@material-ui/core';
import { firestore } from 'firebase';
import firebaseDB from '../../config/firebaseDB';

// import Image from '../../assets/images/my-img.jpg';

import './tweetBox.css';

const timestamp = firestore.FieldValue.serverTimestamp;

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState('');
  const [tweetImage, setTweetImage] = useState('');

  function sendTweet(e) {
    e.preventDefault();

    firebaseDB.collection('posts').add({
      createdAt: timestamp(),
      displayName: 'Arnab Debnath',
      username: '@arnab__12',
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        'https://pbs.twimg.com/profile_images/1246551315481690112/Fnv5yNb4_400x400.jpg',
    });

    setTweetMessage('');
    setTweetImage('');
  }

  return (
    <Fragment>
      <div className="tweetBox">
        <form>
          <div className="tweetBox__input">
            <Avatar
              src={`https://pbs.twimg.com/profile_images/1246551315481690112/Fnv5yNb4_400x400.jpg`}
            />
            <input
              value={tweetMessage}
              onChange={(e) => setTweetMessage(e.target.value)}
              type="text"
              placeholder="What's happening?"
            />
          </div>
          <input
            value={tweetImage}
            onChange={(e) => setTweetImage(e.target.value)}
            className="tweetBox__imageInput"
            type="text"
            placeholder="Optional: Enter image URL"
          />

          <Button
            onClick={sendTweet}
            type="submit"
            className="tweetBox__tweetButton">
            Tweet
          </Button>
        </form>
      </div>
    </Fragment>
  );
}
export default TweetBox;
