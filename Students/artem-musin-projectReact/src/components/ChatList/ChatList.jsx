import React from 'react';
import {bindActionCreators} from 'redux';
import connect from 'react-redux/es/connect/connect';
import { addChat } from '../../store/actions/chats_actions.js';

import { Link } from 'react-router-dom';

import { List, ListItem, ListItemText, Grid } from '@material-ui/core';
import { TextField } from 'material-ui';
import { Mail } from '@material-ui/icons';
import AddIcon from '@material-ui/icons/Add';

const inputStyle = {
    maxWidth: '12em',
    
}

const inputBlock = {
    alignSelf: 'center',
    color: 'whitesmoke'
}

const listStyles = {
    textDecoration: 'none'
}

class ChatList extends React.Component {

    state = {
        input: ''
    }


    handleAdd = () => { // Добавление чата в лист
            if (this.state.input) {
                this.props.addChat(this.state.input);
                    this.setState({ input: '' })
            }
     }

     handleChange = (evt) => { 
        if (evt.keyCode !== 13) this.setState({ [evt.target.name]: evt.target.value })
    }

    handleKeyUp = (evt) => {
        if (evt.keyCode == 13) this.handleAdd()
    }

    render() {

        let { chats } = this.props;

        let chatsArray = Object.keys(chats).map(key => (
            <Link to={`/chat/${ key }/`} key={ key } >
                        <ListItem button>
                            <ListItemText style={{padding: '0em 1em'}} primary={ chats[key].title } /> 
                                    <Mail />
                        </ListItem>
                    </Link> 
                    
        ))

        return (
                <List component="nav" 
                    style={listStyles}>
                            { chatsArray }
                                <ListItem
                                    key='Add new chat'
                                    onClick={ this.handleAdd }>
                                        <Grid 
                                            container
                                            item
                                            spacing={1}
                                            direction="row"
                                            >

                                                <Grid item
                                                    style={inputBlock}>
                                                        <AddIcon />
                                                    </Grid>

                                                <Grid item
                                                    >
                                                    <TextField
                                                        key='textField'
                                                        name='input'
                                                        hintText='Add new chat...'
                                                        id="input-with-icon-textfield"
                                                        onChange={ this.handleChange }
                                                        value={ this.state.input }
                                                        onKeyUp={ this.handleKeyUp }
                                                        style={inputStyle}
                                                    />
                                                    </Grid>
                                            
                                        </Grid>
                                    </ListItem>
                                        
                                       
                                        
                                    
                </List>
            
        )
    }
}

const mapStateToProps = ({ chatsReducer }) => ({
    chats: chatsReducer.chats
})

const mapDispatchToProps = dispatch => bindActionCreators({ addChat }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChatList)