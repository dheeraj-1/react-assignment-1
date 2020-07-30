import React, { Component } from 'react';
import Auxiliary from '../Auxiliary/Auxiliary';

const Wrapper = (WrappedComponent, data, secondData) => {
    return class extends Component {
        render() {
            return (
                <Auxiliary>
                    <WrappedComponent 
                        {...this.props}
                        wrappedMsg={data}
                    />
                    <p>{secondData}</p>
                </Auxiliary>
            )
        }
    }
}

export default Wrapper;