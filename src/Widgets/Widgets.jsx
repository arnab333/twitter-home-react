import React, { Fragment } from 'react';
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from 'react-twitter-embed';
import { Search as SearchIcon } from '@material-ui/icons';

import './widgets.css';

function Widgets() {
  return (
    <Fragment>
      <div className="widgets">
        <div className="widgets__input">
          <SearchIcon className="widgets__searchIcon" />
          <input type="text" placeholder="Search Twitter" />
        </div>
        <div className="widgets__widgetContainer">
          <h2>What's happening</h2>

          <TwitterTweetEmbed tweetId="1301321422543953922" />

          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="HaileeSteinfeld"
            options={{ height: 400 }}
          />

          <TwitterShareButton
            url={'https://twitter.com/arnab__12'}
            options={{ text: '#rectjs is awesome', via: 'arnab__12' }}
          />
        </div>
      </div>
    </Fragment>
  );
}
export default Widgets;
