import update from 'react-addons-update'

import {SEND_MESSAGE} from '../actions/message-actions'


const initialStore = {
  messages: {
    1: {
      author: 'bot',
      message: 'Hello!',
      roomId: 1
    },
    2: {
      author: 'bot',
      message: 'Send me message)',
      roomId: 1
    }
  }
}

export default function msgReducer(store = initialStore, action) {
  switch (action.type) {
    case SEND_MESSAGE: {
      return update(store, {
        messages: {
          $merge: {
            [action.messageId]: {
              message: action.message,
              author: action.author,
              roomId: action.roomId
            }
          }
        }
      })
    }
    default: {
      return store
    }
  }
}