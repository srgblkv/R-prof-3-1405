import React from 'react';
import ReactDom from 'react-dom';
import './style.css';

export default (props) => {
    //props: sender, text
    let {sender, text} = props;

    //sender = sender ? sender: 'Bot';
    let Bot = 'Bot';
    return(
        <div className="d-flex flex-column msg">
           {sender && <strong>{ sender }</strong>}
           {!sender && <strong>{ Bot }</strong>}
            <p>{ props.sender || (!props.sender && text) ? text : 'cyber ansver...' }</p>
        </div>
    )
}
    