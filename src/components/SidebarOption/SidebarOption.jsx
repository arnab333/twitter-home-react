import React, { Fragment } from 'react';

import './sidebarOption.css';

function SidebarOption({ text, icon: Icon, active }) {
  return (
    <Fragment>
      <div className={`sidebarOption ${active && 'sidebarOption--active'}`}>
        <Icon />
        <h2>{text}</h2>
      </div>
    </Fragment>
  );
}
export default SidebarOption;
