import update from 'react-addons-update'

import {SEND_MESSAGE, SUCCESS_MESSAGES_LOADING} from '../actions/message-actions'


const initialStore = {
  messages: {}
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

    case SUCCESS_MESSAGES_LOADING: {
      return update(store, {
        messages: {
          $set: action.payload
        }
      })
    }

    default: {
      return store
    }
  }
}