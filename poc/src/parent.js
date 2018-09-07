import React from 'react';
import ReactDOM from 'react-dom';
import Child from './child.js'

class Parent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: []
        }
    }
}

export default Parent;