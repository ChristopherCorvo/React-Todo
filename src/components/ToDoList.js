import React from 'react'

import Todo from '../components/Todo'


const ToDoList = (props) => {

    const { List } = props

    // const handleClick = () => {
    //     props.handleClearItems();
    // }

}

return (
    <div>
        {props.List.map(item => (
            <Todo handleToggleItem={props.handleToggleItem} key={item.id} item={item}
        ))}

    </div>
)

export default ToDoList
