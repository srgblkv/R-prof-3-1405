import React, {Component} from 'react'

import connect from 'react-redux/es/connect/connect'

import Message from '../Message/index.jsx'

import './style.css'

class Messages extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {messages} = this.props
    let msgArr = []

    Object.keys(messages).forEach(key => {
      msgArr.push({
          messageId: key,
          message: messages[key].message,
          author: messages[key].author,
          roomId: messages[key].roomId
        }
      )
    })

    return (
      <div className="messages">
        {
          msgArr.map((message, index) => (
            <Message author={message.author} message={message.message} key={index}/>
          ))
        }
      </div>
    )
  }
}

const mapStateToProps = ({msgReducer}) => ({
  messages: msgReducer.messages
})

export default connect(mapStateToProps)(Messages)