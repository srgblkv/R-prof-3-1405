import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom';
import './style.css';

export default class Header extends React.Component {
    static propTypes = {
        chatId: PropTypes.number
    }
    static defaultProps = {
        chatId: 1
    }
    render() {
        return (
            <div className="text-center w-100 header">
                <h1 className="text-light header-name">Chat Room { this.props.chatId }</h1>
            </div>
        );
    }
}
