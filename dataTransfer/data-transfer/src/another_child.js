import React, { Component } from 'react';


class AnotherChild extends Component {

    componentWillMount() {
        this.props.callBackFromParent("Hello Parents");
    }

    render() {
        return (
            <div className="App">
                <h3>I am Another Children</h3>
            </div>
        );
    }
}

export default AnotherChild;
