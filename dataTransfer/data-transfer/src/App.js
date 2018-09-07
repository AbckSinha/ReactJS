import React, { Component } from 'react';
import Child from './child.js';
import AnotherChild from './another_child.js';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 0
    }
  }

  componentWillMount() {
    this.setState({ value: 4 });
    console.log("value is =>>>>", this.state.value);
  }

  myCallback = (dataFromCHild) => {
     console.log("dataFromCHild",dataFromCHild);
  };

  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <Child dataFromParent={this.state.value} />
        <AnotherChild  callBackFromParent={this.myCallback} />
      </div>
    );
  }
}

export default App;
