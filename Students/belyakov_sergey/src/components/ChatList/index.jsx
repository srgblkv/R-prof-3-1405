import React, {Component} from 'react'

import {bindActionCreators} from 'redux'
import connect from 'react-redux/es/connect/connect'
import PropTypes from 'prop-types'
import {addRoom} from '../../store/actions/room-actions'

import './style.css'

import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'

class ChatList extends Component {
  static propTypes = {
    rooms: PropTypes.object.isRequired,
    addRoom: PropTypes.func.isRequired
  }

  render() {
    return (
      <div className="chat-list">
        <div className="chat-list-rooms">
          <h2>Комнаты:</h2>
          <ul>
            <li className="active">Чат 1</li>
            <li>Чат 2</li>
            <li>Чат 3</li>
            <li>Чат 4</li>
          </ul>
        </div>
        <div className="chat-list-btn">
          <Button color="primary">
            <AddIcon/>
            Добавить комнату
          </Button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({roomReducer}) => ({
  rooms: roomReducer.rooms
})

const mapDispatchToProps = (dispatch) => bindActionCreators({addRoom}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ChatList)
