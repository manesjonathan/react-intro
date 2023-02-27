import React from 'react';

const TodoListDisplay = ({list}) => {

    return (
        <ul>
            {list.map((todo, index) => (
                <li key={index}>{todo}</li>
            ))}
        </ul>
    )
}

export default TodoListDisplay;