import React from 'react'

class TodoForm extends React.Component {
    constructor(){
        super();
        this.state = {
            input: ''
        }
    }
    
    // this takes key values and then sets their value to the input state above
    // could you just pass the value to the app.js component
    handleChanges = e => {
        // update state with each keystroke
        this.setState({
            input:e.target.value
        })
    }

    // onsubmit this function passes the input state to the handleAddItem function 
    // that lives on App.js
    handleSubmit = e => {
        e.preventDefault();
        // console.log(this.state.input)
        this.props.handleAddItem(this.state.input)
    }
    
    

    render() {
        
        return(
            <div>
                <form onSubmit={this.handleSubmit} >
                    <h1>Todo List:</h1>
                    <input
                        name = 'ListItem'
                        value = {this.state.input}
                        type = 'text'
                        onChange = {this.handleChanges}
                    />
                    <button> Add Todo </button>
                    <button onClick={'2'}> Clear Completed </button>
                </form>
            </div>
        )
    }
}

export default TodoForm