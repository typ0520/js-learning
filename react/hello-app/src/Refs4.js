import React, { Component } from "react";

//可以在组件间传递回调形式的 refs，就像你可以传递通过 React.createRef() 创建的对象 refs 一样。
function CustomTextInput(props) {
  return (
    <div>
      <input type="text" ref={props.inputRef} />
    </div>
  );
}

class Parent extends Component {
  render() {
    return (
      <CustomTextInput inputRef={el => this.inputElement = el} />
    )
  }

  componentDidMount() {
    console.log(this.inputElement)
    this.inputElement.value = "啊哈哈哈"
  }
}

export default Parent;
