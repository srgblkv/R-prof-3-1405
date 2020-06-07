import {SEND_MESSAGE, sendMessage} from '../store/actions/message-actions'

export default (store) => (next) => (action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      if (action.author !== 'bot') {
        setTimeout(() => {
          const id = Object.keys(store.getState().msgReducer.messages).length + 1

          return store.dispatch(
            sendMessage(id, 'Some text...','bot', action.roomId)
          )
        }, 1000)
      }
    }
  }

  return next(action);
}