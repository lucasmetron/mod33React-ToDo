import React, { useState } from 'react';
import './Todo.css'
import List from './components/List';
import TodoForm from './components/TodoForm';
import Item from './components/Item';


function Todo() {

    const [items, setItems] = useState([]);

    function onAddItem(text) {

        let it = new Item(text)
        setItems([...items, it])

    }

    function onItemDeleted(item) {
        let filteredItems = items.filter(it => {
            return (
                it.id !== item.id
            )
        })
        setItems(filteredItems)
    }

    function onDone(item) {
        let updatedItems = items.map(it => {
            if (it.id === item.id) {
                it.done = !it.done;
            }

            return it;
        })

        setItems(updatedItems)
    }

    return (
        <div className="container">
            <h1>To Do</h1>
            <TodoForm onAddItem={onAddItem}></TodoForm>
            <List onDone={onDone} onItemDeleted={onItemDeleted} items={items}></List>
        </div>)

}


export default Todo;