import React, { Component } from 'react';
import Button from 'antd/lib/button';
import { Spin } from 'antd';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="example">
      <Spin />
     </div>
    </div>
    );
  }
}

export default App;
