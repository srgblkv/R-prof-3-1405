import React, { Component } from 'react';

// import { getUserInfo } from '../../store/actions/profile_actions.js';
// import { bindActionCreators } from 'redux';
// import connect from 'react-redux/es/connect/connect';

class Profile extends Component {
  constructor(props){
    super(props);
  }
  render(){
    this.props.getUserInfo('1');
    const username = this.props.username;

    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col col-4">
              <img src={photo} alt={username}/>
            </div>
            <div className="col col-8">
              <h3>{name}</h3>
              <p>{age} years</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ profileReducer }) => ({
  userInfo: profileReducer.getUserInfo
});

const mapDispatchToProps = dispatch => bindActionCreators({ getUserInfo }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Profile);