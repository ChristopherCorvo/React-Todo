import React, { useState } from 'react';

//------- import components ---------
import Todo from './components/Todo.js'
import TodoForm from './components/TodoForm'


const toDoList = []



class App extends React.Component {
  // Step 1: you will need to store your state in this component.
  constructor() {
    super();
    this.state = {
      // set state to something
      toDoList: toDoList,
    }
  }

  inputChange = (value) => {
    this.setState({
      toDoList:[...this.state.toDoList, {
        Task: value,
        id: "",
        completed: false
      }]
    })
    console.log(this.state)
  }
  
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>

        {/* rendering components */}
        <Todo/>
        <TodoForm inputChange={this.inputChange} toDoList={this.state.toDoList}/>
        

      </div>
    );
  }
}

export default App;
