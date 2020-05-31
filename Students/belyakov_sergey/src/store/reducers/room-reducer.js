import update from 'react-addons-update'

import {SEND_MESSAGE} from '../actions/message-actions'
import {ADD_ROOM} from "../actions/room-actions";

const initialStore = {
  rooms: {
    1: {title: 'Чат 1', messageList: [1]},
    2: {title: 'Чат 2', messageList: [2]},
    3: {title: 'Чат 3', messageList: []},
    4: {title: 'Чат 3', messageList: []}
  }
}

export default function roomReducer(store = initialStore, action) {
  switch (action.type) {
    case SEND_MESSAGE: {
      return update(store, {
        rooms: {
          $merge: {
            [action.roomId]: {
              title: store.rooms[action.roomId].title,
              messageList: [...store.rooms[action.roomId].messageList, action.messageId]
            }
          }
        }
      })
    }

    case ADD_ROOM: {
      const roomId = Object.keys(store.rooms).length + 1;
      return update(store, {
        rooms: {
          $merge: {
            [roomId]: {
              title: action.title,
              messageList: []
            }
          }
        }
      })
    }

    default:
      return store;
  }
}