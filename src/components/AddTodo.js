import React, { Component } from "react";

class AddTodo extends Component{
  constructor(props){
    super(props);
    this.state = { input : "" };
  }

  updateInput = input => {
    this.setState({ input });
  }

  handleAddTodo = () => {
    // todo 추가하기 위한 action을 dispatch 
    // state를 empty string으로 변경
  }

  render(){
    return(
      <div>
        <input
          onChange={e => this.updateInput(e.target.value)}
          value={this.state.input}
        />
        <button className="add-todo" onClick={this.handleAddTodo}>
          Add Todo
        </button>
      </div>
    )
  }
}

export default AddTodo;