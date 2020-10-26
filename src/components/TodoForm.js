import React from 'react'

class TodoForm extends React.Component {
    constructor(){
        super();
    }
    
    onChange = e => {
        // this funtion is going to take event value and pass it back to App.js
        const { value } = e.target
        console.log(value)
        this.props.inputChange(value)

    }

    onSubmit = e => {
        e.preventDefault();
        console.log(e)
    }
    
    

    render() {
        
        return(
            <div>
                <form onSubmit={this.onSubmit} >
                    <h1>Todo List:</h1>
                    <input
                        name = 'ListItem'
                        value = {this.props.toDoList}
                        type = 'text'
                        onChange = {this.onChange}
                    />
                    <button> Add Todo </button>
                    <button onClick={'2'}> Clear Completed </button>
                </form>
            </div>
        )
    }
}

export default TodoForm