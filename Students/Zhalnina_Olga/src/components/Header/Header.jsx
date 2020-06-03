import React from "react";
import ReactDom from "react-dom";
import PropTypes from 'prop-types';
import './Header.css';

export default class Header extends React.Component {
  static propTypes = {
    chatId: PropTypes.number
  }
  static defaultProps = {
    chatId: 1
  }
  render() {
    return (
      <header className="header">
        <h1>Chat { this.props.chatId }</h1>
      </header>
    );
  }
}
