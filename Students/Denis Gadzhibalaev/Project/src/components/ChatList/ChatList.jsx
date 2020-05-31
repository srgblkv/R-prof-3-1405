import React from 'react';
import ReactDom from 'react-dom';

import { Link } from 'react-router-dom';

import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';

import './style.sass';

class ChatList extends React.Component {
    
    render() {
        return(
            <div className="chat-list w-25 h-100">
                <List>
                    <Subheader>Chats</Subheader>
                        <div className = "chat-list_list-item__wrapper">
                            <Link className = "chat-list_list-link" to = "/chat/1">
                                <ListItem
                                className = "chat-list_list-item"
                                primaryText="Chat 1"
                                leftAvatar={<Avatar src="https://placeimg.com/640/480/nature" />}
                                />
                            </Link>
                            <CommunicationChatBubble />
                        </div>
                        <div className = "chat-list_list-item__wrapper">
                            <Link className = "chat-list_list-link" to = "/chat/2">
                                <ListItem
                                primaryText="Chat 2"
                                leftAvatar={<Avatar src="https://placeimg.com/640/480/nature" />}
                                />
                            </Link>
                            <CommunicationChatBubble />
                        </div>
                        
                </List>
            </div>
        ) 
    }
}

export default ChatList;