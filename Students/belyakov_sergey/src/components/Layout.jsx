import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {bindActionCreators} from 'redux'
import connect from 'react-redux/es/connect/connect'

import {sendMessage, loadMessages} from '../store/actions/message-actions'

import MessageField from './MessageField/index.jsx'
import Header from './Header/index.jsx'
import ChatList from './ChatList/index.jsx'

import {Container} from "@material-ui/core"

class Layout extends Component {
  static propTypes = {
    roomId: PropTypes.number,
    sendMessage: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired
  }

  static defaultProps = {
    roomId: 1
  }

  state = {
    inputValueMessage: '',
    botMessageState: {
      botQueue: false,
      inProcess: false
    }
  }

  componentDidMount() {
    this.props.loadMessages()
  }

  onScroll() {
    const mess = document.querySelector('.messages');
    mess.scrollTop = mess.scrollHeight;
  }

  onChange(e) {
    if (e.key !== "Enter") {
      const inputValue = e.target.value
      this.setState((prevState) => ({
        ...prevState,
        inputValueMessage: inputValue
      }))
    } else {
      const user = this.props.user.name
      this.onSend(this.state.inputValueMessage, user)
    }
  }

  onSend(message, author) {
    if (this.state.inputValueMessage !== '') {
      this.sendNewMessage(message, author)

      this.setState((prevState) => ({
        ...prevState,
        inputValueMessage: '',
        botMessageState: {
          ...prevState.botMessageState,
          botQueue: true
        }
      }))
    }
    setTimeout(() => this.onScroll())

  }

  sendNewMessage(message, author) {
    const {messages, roomId, sendMessage} = this.props
    const messageId = Object.keys(messages).length + 1
    sendMessage(messageId, message, author, roomId)
  }

  showChatList() {
    const chatList = document.querySelector('.chat-list');
    const messageField = document.querySelector('.messages-field')
    const menuIconOpen = document.querySelector('.menu-icon__open')
    const menuIconClose = document.querySelector('.menu-icon__close')

    chatList.classList.toggle('show')
    messageField.classList.toggle('hidden')
    menuIconOpen.classList.toggle('hidden')
    menuIconClose.classList.toggle('hidden')
  }

  render() {
    const {roomId, user, rooms} = this.props
    const {inputValueMessage} = this.state

    return (
      <Container
        maxWidth="lg"
        disableGutters={true}
      >
        <Header
          rooms={rooms}
          user={user.name}
          showChatList={this.showChatList}
          roomId={roomId}
        />
        <div className="wrapper">
          <ChatList
            showChatList={this.showChatList}
            roomId={roomId}/>
          <MessageField
            user={user.name}
            roomId={roomId}
            onChange={this.onChange.bind(this)}
            onSend={() => this.onSend(inputValueMessage, user.name)}
            inputValue={inputValueMessage}
          />
        </div>
      </Container>
    )
  }
}

const mapStateToProps = ({msgReducer, userReducer, roomReducer}) => ({
  messages: msgReducer.messages,
  rooms: roomReducer.rooms,
  user: userReducer.user
})

const mapDispatchToProps = (dispatch) => bindActionCreators({sendMessage, loadMessages}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Layout)
