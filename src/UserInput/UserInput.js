import React from 'react';

const UserInput = (props) => {
    return (
        <div>
            UserInput Component: <input type="text" value={props.username} onChange= {props.changeHandler}></input>
        </div>
    );
};

export default UserInput;