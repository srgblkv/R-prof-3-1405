import React from 'react';
import PropTypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';

export default class Header extends React.Component {
    static propTypes = {
        chatId: PropTypes.number
    }
    static defaultProps = {
        chatId: 1
    }

    render() {
        return(
            <div className="header">
              <AppBar 
                  position='relative'
                  style={{ backgroundColor: '#00bcd4' }}>
                  <h1> Chat Room { this.props.chatId }</h1>
              </AppBar>
            </div>
        )
    };
};