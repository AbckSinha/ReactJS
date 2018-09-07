import React, { Component } from 'react';


class Child extends Component {

    constructor(props) {
        super(props);
        console.log("this.props.dataFromParent",this.props.dataFromParent);    
    }

    render() {
        return (
            <div className="App">
                <h3>I am Children</h3>

            </div>
        );
    }
}

export default Child;
