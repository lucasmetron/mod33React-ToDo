import React, { useState } from 'react';

function TodoForm(props) {

    const [text, setText] = useState("");

    function handleChange(event) {
        let t = event.target.value;
        setText(t)
    }

    function addItem(event) {
        event.preventDefault(); //este metodo evita que o button dentro do form envie para o action;
        if (text) {
            // setItems([...items, text])
            props.onAddItem(text)
            setText("");
        }
    }

    return (
        <form>
            <input onChange={handleChange} type="text" value={text} />
            <button onClick={addItem}>Add</button>
        </form>
    )
}

export default TodoForm;