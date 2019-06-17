import React, { Component } from "react";
import { connect } from 'react-redux';
import { addTodo } from '../redux/actions';

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
    this.props.addTodo(this.state.input)
    // state를 empty string으로 변경 
    this.setState({ input: '' })
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

export default connect(
  null, // 필요한 state를 props로 받을 때
  { addTodo }
)(AddTodo);
/* redux store의 값을 읽을 수 있도록 connect 함수 제공  */