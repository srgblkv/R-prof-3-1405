export const ADD_ROOM = '@@chat/ADD_ROOM'

export const addRoom = (title) => ({
  type: ADD_ROOM,
  title
})