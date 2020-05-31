import React from 'react'

import './style.css'

import Messages from '../Messages/index.jsx'
import SendMessage from "../SendMessage/index.jsx"

export default (props) => {
  const {messages, onChange, onSend, inputValue} = props

  return (
    <div className="messages-field">
      <Messages messages={messages}/>
      <SendMessage
        onChange={onChange}
        onSend={onSend}
        inputValue={inputValue}
      />
    </div>
  )
}