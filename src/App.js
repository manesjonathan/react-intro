import React, {useEffect, useState} from "react";
import './App.css';
import InputForm from "./components/InputForm";
import TodoListDisplay from "./components/TodoListDisplay";

function App() {
    const [todoList, setTodoList] = useState(localStorage.getItem("todoList") ? JSON.parse(localStorage.getItem("todoList")) : []);

    const addTodo = (todo) => {
        const newTodoList = [...todoList, todo];
        setTodoList(newTodoList);
        localStorage.setItem("todoList", JSON.stringify(newTodoList));
    }

    useEffect(() => {
        localStorage.setItem("todoList", JSON.stringify(todoList));
    }, [todoList]);

    return (
        <>
            <InputForm add={addTodo}/>
            <TodoListDisplay list={todoList}/>
        </>
    );
}

export default App;
