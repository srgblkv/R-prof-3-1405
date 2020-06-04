import React from 'react';
import './style.css';

import Header from '../Header/Header.jsx';
import ChatList from '../ChatList/ChatList.jsx';
import MessagesField from '../MessageField/MessageField.jsx';

export default (props) => {

    let { user } = props;

    return (
        <div className="layout__wrapper">
            <Header />
            <ChatList />
            <MessagesField user={ user } />
        </div>
    )
};