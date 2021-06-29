import React, { useState } from 'react';
import './Todo.css'
import List from './List';
import TodoForm from './TodoForm';

function Todo() {

    const [items, setItems] = useState([]);

    function onAddItem(item) {
        setItems([...items, item])
    }

    return (
        <div className="container">
            <h1>To Do</h1>
            <TodoForm onAddItem={onAddItem}></TodoForm>
            <List items={items}></List>
            {console.log(items)}
        </div>)

}


export default Todo;