import React, { Fragment } from 'react';
import {
  VerifiedUser as VerifiedUserIcon,
  ChatBubbleOutline as ChatBubbleOutlineIcon,
  Repeat as RepeatIcon,
  FavoriteBorder as FavoriteBorderIcon,
  Publish as PublishIcon,
} from '@material-ui/icons';
import { Avatar } from '@material-ui/core';

import './post.css';

function Post({ displayName, username, verified, text, image, avatar }) {
  return (
    <Fragment>
      <div className="post">
        <div className="post__avatar">
          <Avatar src="https://pbs.twimg.com/profile_images/1246551315481690112/Fnv5yNb4_400x400.jpg" />
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                Arnab Debnath{' '}
                <span className="post__headerSpecial">
                  <VerifiedUserIcon className="post__badge" /> @arnab__12
                </span>
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>I challenge you to build a Twitter Clone with React.</p>
            </div>
          </div>
          <img
            src="https://media3.giphy.com/media/65ATdpi3clAdjomZ39/giphy.gif"
            alt=""
          />
          <div className="post__footer">
            <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <PublishIcon fontSize="small" />
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default Post;
