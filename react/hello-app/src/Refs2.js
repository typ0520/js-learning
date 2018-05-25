import React from "react";

//不能在函数式组件上使用 ref 属性，因为它们没有实例：
// function MyFunctionalComponent() {
//   return <input />;
// }

// class Parent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.textInput = React.createRef();
//   }
//   render() {
//     // 这将 *不会* 工作！
//     return <MyFunctionalComponent ref={this.textInput} />;
//   }
// }

function CustomTextInput(props) {
  let textInput = null;

  function handleClick() {
    textInput.focus();
  }

  //函数式组件内部使用 ref要依赖回调
  return (
    <div>
      <input
        type="text"
        ref={input => {
          textInput = input;
        }}
      />
      <input type="button" value="Focus the text input" onClick={handleClick} />
    </div>
  );
}

export default CustomTextInput;
