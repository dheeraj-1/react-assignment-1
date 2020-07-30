import React from 'react';
import './UserOutput.css';

const UserOutput = (props) => {
    return (
        <div className="UserOutput" onClick={(e) => props.clicked(props.username, e)}>
            <h2>{props.username + (props.children? props.children : '')}</h2>
            <p>Garrets because elderly new manners however one village she. </p>
            <p>Is at purse tried jokes china ready decay an. </p>
            <nav>
                <a href="">Author</a>
                <a href="">Books</a>
            </nav>
        </div>
    );
};

export default UserOutput;