import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

import Avatar from 'material-ui/Avatar';
import ChatIcon from '@material-ui/icons/Chat';

import { List, ListItem } from 'material-ui/List';
// import ContentSend from 'material-ui/svg-icons/content/send';

export default class ChatList extends React.Component {
    render() {
        return(
            <div className="dialog-main-list">
                <List className="dialog-list" >
                    <Link to = "/chat/1/" style={ { textDecoration: 'none' } }>
                    <span className="dialog-name mb-1">Chat List:</span>
                    <ListItem className="dialog-list-item mb-1"
                        style={ { color: '#fff' } }
                        primaryText="Mick Gordon"
                        leftAvatar={<Avatar style={ { backgroundColor: '#00bcd4' } } />}
                        rightIcon={<ChatIcon style={ { color: '#00bcd4' } } />}
                        hoverColor="#3e4b5e"
                    />
                    </Link>
                    <Link to = "/chat/2/" style={ { textDecoration: 'none' } }>
                    <ListItem className="dialog-list-item mb-1"
                        style={ { color: '#fff' } }
                        primaryText="John Carmack"
                        leftAvatar={<Avatar style={ { backgroundColor: '#00bcd4' } } />}
                        rightIcon={<ChatIcon style={ { color: '#00bcd4' } } />}
                        hoverColor="#3e4b5e"
                    />
                    </Link>
                    <Link to = "/chat/3/" style={ { textDecoration: 'none' } }>
                    <ListItem className="dialog-list-item mb-1"
                        style={ { color: '#fff' } }
                        primaryText="David Falkner"
                        leftAvatar={<Avatar style={ { backgroundColor: '#00bcd4' } } />}
                        rightIcon={<ChatIcon style={ { color: '#00bcd4' } } />}
                        hoverColor="#3e4b5e"
                    />
                    </Link>
                    <Link to = "/chat/4/" style={ { textDecoration: 'none' } }>
                    <ListItem className="dialog-list-item mb-1"
                        style={ { color: '#fff' } }
                        primaryText="Cliff Bleszinski"
                        leftAvatar={<Avatar style={ { backgroundColor: '#00bcd4' } } />}
                        rightIcon={<ChatIcon style={ { color: '#00bcd4' } } />}
                        hoverColor="#3e4b5e"
                    />
                    </Link>
                    <Link to = "/chat/5/" style={ { textDecoration: 'none' } }>
                    <ListItem className="dialog-list-item mb-1"
                        style={ { color: '#fff' } }
                        primaryText="John Romero"
                        leftAvatar={<Avatar style={ { backgroundColor: '#00bcd4' } } />}
                        rightIcon={<ChatIcon style={ { color: '#00bcd4' } } />}
                        hoverColor="#3e4b5e"
                    />
                    </Link>
                    <Link to = "/chat/6/" style={ { textDecoration: 'none' } }>
                    <ListItem className="dialog-list-item"
                        style={ { color: '#fff' } }
                        primaryText="Drew Karpyshyn"
                        leftAvatar={<Avatar style={ { backgroundColor: '#00bcd4' } } />}
                        rightIcon={<ChatIcon style={ { color: '#00bcd4' } } />}
                        hoverColor="#3e4b5e"
                    />
                    </Link>
                </List>
            </div>
        )
    }
}