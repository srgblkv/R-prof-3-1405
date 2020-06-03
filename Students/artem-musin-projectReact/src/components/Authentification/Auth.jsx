import React from 'react';

import PropTypes from 'prop-types'

import { setName, setBio, setDate, setCity } from '../../store/actions/profile_actions.js'
import { bindActionCreators } from 'redux';
import connect from 'react-redux/es/connect/connect';

import { Link } from 'react-router-dom';

import { Paper, Typography, Input, InputLabel, Grid, TextField } from '@material-ui/core';
import { RaisedButton } from 'material-ui';


const backStyles = {
    margin: 'auto',
    maxWidth: '55em',
    padding: '1em',
    backgroundColor: '#e4ccff'
}

const inputBlock = {
    maxWidth: '25em',
    margin: 'auto',
    alignContent: 'center',
    justifyContent: 'center'
}

const buttonsBlock = {
    padding: '1em',
    justifyContent: 'center',
    alignContent: 'center'
}


class Auth extends React.Component {
    static propTypes = {
        user: PropTypes.string,
        bio: PropTypes.string,
        date: PropTypes.string,
        
    }

    static defaultProps = {
        user: '',
        bio: '',
        date: '',
        city: ''
    }

    handleChange = (evt) => {
        if (evt.keyCode == 13) {
          this.setState({ [evt.target.name]: evt.target.value })
        }
      }

    handleInfo = (user, date, bio) => {
        user && this.props.setName(user);
        date && this.props.setDate(text);
        bio && this.props.setBio(text);
        console.log('Name: ' + this.props.user);
        console.log('Date: ' + this.props.date);
        console.log('Bio: ' + this.props.bio);
    }

    handleName = (user) => {
        return this.props.setName(user);
    }

    handleBio = (text) => {
        return this.props.setBio(text);
    }

    handleDate = (text) => {
        return this.props.setDate(text);
    }

    handleCity = (text) => {
        return this.props.setCity(text);
    }

    handleKeyUp = (evt) => {
        if (evt.keyCode == 13) this.handleInfo()
    }

    render() {
        return (
            <Paper
                style={backStyles}>

                <Grid
                    container
                    direction="column">

                    <Grid 
                        item
                        xs> 
                            <Typography variant="h6">
                                Hello, new user!
                            </Typography>

                        </Grid>
                        
                        <Grid
                            container
                            item
                            direction="column"
                            spacing={3}
                            style={inputBlock}
                            >

                            <Grid item>
                                <InputLabel htmlFor="component-helper">Your nickname</InputLabel>
                                    <Input
                                        fullWidth
                                        aria-describedby="component-helper-text"
                                        onChange={ (e) => { this.handleName(e.target.value) } }
                                    />  
                                </Grid>

                            <Grid item>
                                <InputLabel htmlFor="component-helper">Your city</InputLabel>
                                    <Input 
                                        fullWidth
                                        aria-describedby="component-helper-text"
                                        onChange={ (e) => { this.handleCity(e.target.value) } }
                                    />
                                </Grid>

                                <Grid item>
                                    <InputLabel htmlFor="component-helper">Your date of born</InputLabel>
                                        <Input 
                                            fullWidth
                                            aria-describedby="component-helper-text"
                                            onChange={ (e) => { this.handleDate(e.target.value) } }
                                        />
                                    </Grid>
                            
                            <Grid item>
                                    <TextField
                                        label="Tell us about yourself"
                                        fullWidth
                                        multiline
                                        variant="outlined"
                                        rows={4}
                                        onChange={ (e) => { this.handleBio(e.target.value) } }
                                    />
                                </Grid>    

                            </Grid>
                        
                                <Grid
                                container
                                item
                                spacing={3}
                                alignItems="center"
                                style={buttonsBlock}>
                                            <Grid item>
                                                    <Link to='/profile/'>
                                                        <RaisedButton
                                                            variant="contained"
                                                            color="primary"
                                                            onClick={ () => this.handleInfo() }
                                                            onKeyUp={ (evt) => { this.handleBio(evt.target.value) } } >
                                                                SUBMIT
                                                            </RaisedButton>
                                                        </Link>
                                                </Grid>

                                                    <Grid item>
                                                        <Link to='/'>
                                                                Go to the chats!
                                                            </Link>
                                                        </Grid>
                                    </Grid>
                    </Grid>
                </Paper>
        )
    }
}

const mapStateToProps = ({ prflReducer }) => ({
    user: prflReducer.user,
    date: prflReducer.date,
    bio: prflReducer.bio,
    city: prflReducer.city
  });  

  const mapDispatchToProps = dispatch => bindActionCreators({ setName, setBio, setDate, setCity }, dispatch);
  
  export default connect(mapStateToProps, mapDispatchToProps)(Auth); 