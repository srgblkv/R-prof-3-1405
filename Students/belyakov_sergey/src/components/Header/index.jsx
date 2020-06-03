import React from 'react'

import './style.css'

import MenuIcon from '@material-ui/icons/Menu'
import MenuOpenIcon from '@material-ui/icons/MenuOpen'

export default (props) => {
  const {showChatList} = props
  return (
    <div className="header">
      <div className="menu-icon">
        <div onClick={showChatList} className="menu-icon__open">
          <MenuIcon/>
        </div>
        <div onClick={showChatList} className="menu-icon__close hidden">
          <MenuOpenIcon/>
        </div>
      </div>
      <div className="header-bg">
        <h1>Chat-App</h1>
      </div>
    </div>
  )
}