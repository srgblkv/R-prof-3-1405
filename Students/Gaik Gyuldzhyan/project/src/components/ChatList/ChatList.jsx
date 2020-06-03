import React from 'react';
import ReactDom from 'react-dom';

import { Link } from 'react-router-dom';

import { List, ListItem } from 'material-ui/List';
import ContentSend from 'material-ui/svg-icons/content/send'

import './style.css';

export default class ChatList extends React.Component {
    render() {
        return (
            <List>
                <Link to = "/chat/1/">
                    <ListItem className = 'text-light' primaryText = 'Jordan' leftIcon = {< ContentSend/ > } />
                </Link>
                <Link to = "/chat/2/">
                    <ListItem className = 'text-light' primaryText = "O'Neal" leftIcon = {< ContentSend/ > } />
                </Link>
                <Link to = "/chat/3/">
                    <ListItem className = 'text-light' primaryText = 'Bruno Mars' leftIcon = {< ContentSend/ > } />
                </Link>
                <Link to = "/chat/4/">
                    <ListItem className = 'text-light' primaryText = 'Ed Sheeran' leftIcon = {< ContentSend/ > } />
                </Link>
                <Link to = "/chat/5/">
                    <ListItem className = 'text-light' primaryText = 'Kanye West' leftIcon = {< ContentSend/ > } />
                </Link>
            </List>
        );
    }
}

