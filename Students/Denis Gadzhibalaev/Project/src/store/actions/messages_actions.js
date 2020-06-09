import { RSAA, getJSON } from 'redux-api-middleware';    

export const START_MESSAGES_LOADING = '@@message/START_MESSAGES_LOADING';
export const SUCCESS_MESSAGES_LOADING = '@@message/SUCCES_MESSAGES_LOADING';
export const ERROR_MESSAGES_LOADING = '@@message/ERROR_MESSAGES_LOADING';

export const START_MESSAGE_SEND = '@@messages/START_MESSAGE_SEND';
export const SUCCESS_MESSAGE_SEND = '@@messages/SUCCESS_MESSAGE_SEND';
export const ERROR_MESSAGE_SEND = '@@messages/ERROR_MESSAGE_SEND';

export const START_MESSAGE_DELETE = '@@messages/START_MESSAGE_DELETE';
export const SUCCESS_MESSAGE_DELETE = '@@messages/SUCCESS_MESSAGE_DELETE';
export const ERROR_MESSAGE_DELETE = '@@messages/ERROR_MESSAGE_DELETE';

export let sendMessage = (messageId, sender, text, chatId, deleted = false) => ({
    [RSAA]: {
        endpoint: '/api/messages',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messageId, sender, text, chatId, deleted }),
        types: [
            START_MESSAGE_SEND,
            {
                type: SUCCESS_MESSAGE_SEND,
                payload: (action, state, res) => getJSON(res)
                            .then(json => ({ response: json, msg: { messageId, sender, text, chatId, deleted } } ) )
            },
            ERROR_MESSAGE_SEND
        ]
    }
});

export let deleteMessage = (messageId, chatId, msgIndexInMessageList) => ({
    [RSAA]: {
        endpoint: '/api/messages',
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messageId, chatId, msgIndexInMessageList }),
        types: [
            START_MESSAGE_DELETE,
            {
                type: SUCCESS_MESSAGE_DELETE,
                payload: (action, state, res) => getJSON(res)
                            .then(json => ({ response: json, msg: { messageId, chatId, msgIndexInMessageList } } ) )
            },
            ERROR_MESSAGE_DELETE
        ]
    }
});

export const loadMessages = (chatId) => ({
    chatId,
    [RSAA]: {
        endpoint: '/api/messages',
        method: 'GET',
        types: [
            START_MESSAGES_LOADING,
            {
                type: SUCCESS_MESSAGES_LOADING,
                payload: (action, state, res) => getJSON(res).then(
                    json => json
                ),
            },
            ERROR_MESSAGES_LOADING
        ]
    }
});

