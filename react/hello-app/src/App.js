import React, { Component } from 'react';
import './App.css';
import CustomTextInput from './Refs'

class App extends Component {
  render() {
    return (
      <div className="App">
       <CustomTextInput />
      </div>
    );
  }

  componentWillMount() {
    document.title = 'App'
  }
}
export default App;
