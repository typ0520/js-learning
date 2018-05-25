import React, { Component } from 'react';

//使用 ref 回调函数，在实例的属性中存储对 DOM 节点的引用。
class CustomTextInput extends Component {
    constructor(props) {
        super(props);
        this.textInput = null;
        this.setTextInputRef = element => {
            this.textInput = element;
        }
        this.focusTextInput = this.focusTextInput.bind(this)
    }

    focusTextInput() {
        this.textInput.current.focus();
    }

    render() {
        return (
            <div>
                <input type="text" ref={this.setTextInputRef} />
                <input type="button" value="Focus the text input" onClick={this.focusTextInput} />
            </div>
        )
    }
}

export default CustomTextInput