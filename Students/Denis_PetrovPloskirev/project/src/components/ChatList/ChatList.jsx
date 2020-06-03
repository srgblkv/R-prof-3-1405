import React from 'react';

import './ChatList.css';

import { Link } from 'react-router-dom';
import Avatar from 'material-ui/svg-icons/social/sentiment-satisfied';
import AvatarBad from 'material-ui/svg-icons/social/sentiment-dissatisfied';
import AvatarThree from 'material-ui/svg-icons/social//sentiment-very-dissatisfied';
import AvatarFour from 'material-ui/svg-icons/social/sentiment-very-satisfied';
import DeleteIcon from 'material-ui/svg-icons/navigation/cancel';

export default class ChatList extends React.Component {
  render() {
    return (
      <div className = "chatList">
        <Link to = "/chat/1/">
          <div className = { this.props.active == 'Mark Zuckerberg' ? 'chatListItem chatListItemActive' : 'chatListItem' }>
            <AvatarFour style = { {width: '20px', height: '20px'} } color = "antiquewhite" /> 
            Mark Zuckerberg 
            <span className="deleteIcon">
              <DeleteIcon viewBox="0 0 24 24" style = { {"width": "12px", "height": "12px"} } color = "antiquewhite" hoverColor = "darkred" />
            </span>
          </div>
        </Link>
        <Link to = "/chat/2/">
          <div className = { this.props.active == 'John Doe' ? 'chatListItem chatListItemActive' : 'chatListItem' }>
            <Avatar style = { {width: '20px', height: '20px'} } color = "antiquewhite" /> 
            John Doe 
            <span className = "deleteIcon"> 
              <DeleteIcon viewBox = "0 0 24 24" style = { {"width": "12px", "height": "12px"} } color = "antiquewhite" hoverColor = "darkred" /> 
            </span>
          </div>
        </Link>
        <Link to = "/chat/3/">
          <div className = { this.props.active == 'Bill Gates' ? 'chatListItem chatListItemActive' : 'chatListItem' }>
            <Avatar style = { {width: '20px', height: '20px'} } color = "antiquewhite" /> 
            Bill Gates 
            <span className = "deleteIcon"> 
              <DeleteIcon viewBox = "0 0 24 24" style = { {"width": "12px", "height": "12px"} } color = "antiquewhite" hoverColor = "darkred" /> 
            </span>
          </div>
        </Link>
        <Link to = "/chat/4/">
          <div className = { this.props.active == 'Steve Jobs' ? 'chatListItem chatListItemActive' : 'chatListItem' }>
            <AvatarThree style = { {width: '20px', height: '20px'} } color = "antiquewhite" /> 
            Steve Jobs 
            <span className = "deleteIcon"> 
              <DeleteIcon viewBox = "0 0 24 24" style = { {"width": "12px", "height": "12px"} } color = "antiquewhite" hoverColor = "darkred" /> 
            </span>
          </div>
        </Link>
        <Link to = "/chat/5/">
          <div className = { this.props.active == 'Pavel Durov' ? 'chatListItem chatListItemActive' : 'chatListItem' }>
            <AvatarBad style = { {width: '20px', height: '20px'} } color = "antiquewhite" /> 
            Pavel Durov 
            <span className = "deleteIcon"> 
              <DeleteIcon viewBox = "0 0 24 24" style = { {"width": "12px", "height": "12px"} } color = "antiquewhite" hoverColor = "darkred" /> 
            </span>
          </div>
        </Link>
      </div>
    )
  }
}
