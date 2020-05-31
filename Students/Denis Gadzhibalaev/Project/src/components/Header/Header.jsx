import React from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';

import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import { Link } from 'react-router-dom';

import './style.sass';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.menuWindow = React.createRef();
    }
    static propTypes = {
        chatId: PropTypes.number
    }
    static defaultProps = {
        chatId: 1
    }

    state = {
        showMenu: false
    }


    handleClick = () => {
             document.addEventListener('click', this.hiddenMenu);
             this.setState ({
            showMenu: !this.state.showMenu
        });
        
    }
        

    hiddenMenu = () => {  
        document.removeEventListener('click', this.hiddenMenu);
             this.setState ({
                showMenu: false
            });   
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.hiddenMenu);
    }

    render() {
        let menu =  <div className = "header_menu">
                        <Link to = '/profile/'>
                            <p>User Profile</p>
                        </Link>
                        <p>Settings</p>
                    </div>;
                    
        return(
            <div className="header w-100">
                <h1 className="header_title w-100"> Chat Room { this.props.chatId } </h1>
                <div className = 'header_menu__wrapper'>    
                    <button onClick = { this.handleClick } className= "header_menu__btn"><MoreVertIcon /></button>
                    <TransitionGroup>
                        {this.state.showMenu && <CSSTransition classNames = "option" timeout = {1000}>{menu}</CSSTransition>}
                    </TransitionGroup>
                </div>
            </div>
        ) 
    }
}

export default Header;
