import React, { Fragment } from 'react';
import {
  Twitter as TwitterIcon,
  Home as HomeIcon,
  Search as SearchIcon,
  NotificationsNone as NotificationsNoneIcon,
  MailOutline as MailOutlineIcon,
  BookmarkBorder as BookmarkBorderIcon,
  ListAlt as ListAltIcon,
  PermIdentity as PermIdentityIcon,
  MoreHoriz as MoreHorizIcon,
} from '@material-ui/icons';

// import { FaTwitter as TwitterIcon } from 'react-icons/fa';
import { Button } from '@material-ui/core';
import SidebarOption from '../SidebarOption/SidebarOption';

import './sidebar.css';

function Sidebar() {
  return (
    <Fragment>
      <div className="sidebar">
        <TwitterIcon className="sidebar__twitterIcon" />
        <SidebarOption icon={HomeIcon} text="Home" active />
        <SidebarOption icon={SearchIcon} text="Explore" />
        <SidebarOption icon={NotificationsNoneIcon} text="Notifications" />
        <SidebarOption icon={MailOutlineIcon} text="Message" />
        <SidebarOption icon={BookmarkBorderIcon} text="Bookmarks" />
        <SidebarOption icon={ListAltIcon} text="Lists" />
        <SidebarOption icon={PermIdentityIcon} text="Profile" />
        <SidebarOption icon={MoreHorizIcon} text="More" />

        <Button variant="outlined" className="sidebar__tweet" fullWidth>
          Tweet
        </Button>
      </div>
    </Fragment>
  );
}
export default Sidebar;
