import { useEffect, useState } from 'react';
import './Todo.css'


function Todo() {

    const [text, setText] = useState("");
    const [items, setItems] = useState([]);

    function handleChange(event) {
        let t = event.target.value;
        setText(t)
    }


    function addItem(event) {
        event.preventDefault(); //este metodo evita que o button dentro do form envie para o action;
        if (text) {
            setItems([...items, text])
            console.log(items)
            setText("");
        }
    }


    return (
        <div className="container">
            <h1>To Do</h1>
            <form>
                <input onChange={handleChange} type="text" value={text} />
                <button onClick={addItem}>Add</button>
            </form>

            <ul >
                {items.map((item, i) => {
                    return (
                        <li key={i}>{item}</li>
                    )
                })}
            </ul>

        </div>)

}






export default Todo;