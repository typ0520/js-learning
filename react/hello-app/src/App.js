import React, { Component } from 'react';
import './App.css';
import CustomTextInput from './Refs'
import CustomTextInput2 from './Refs2'
import CustomTextInput3 from './Refs3'
import CustomTextInput4 from './Refs4'

class App extends Component {
  render() {
    return (
      <div className="App">
       <CustomTextInput />
       <CustomTextInput2 />
       <CustomTextInput3 />
       <CustomTextInput4 />
      </div>
    );
  }

  componentWillMount() {
    document.title = 'App'
  }
}
export default App;
