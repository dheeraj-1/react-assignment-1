import React from 'react';
import './UserInput.css';

const UserInput = (props) => {
    return (
        <div className="UserInput">
            UserInput Component: <input type="text" value={props.username} onChange= {props.changeHandler}></input>
        </div>
    );
};

export default UserInput;