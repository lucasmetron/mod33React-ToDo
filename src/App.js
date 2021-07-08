import React, { useEffect, useState } from 'react';
import './Todo.css'
import List from './components/List';
import TodoForm from './components/TodoForm';
import Item from './components/Item';
import Modal from './components/Modal';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import listReducer from './reducers/listReducer';



const SAVED_ITEMS = 'savedItems'
const store = createStore(listReducer);

function App() {

    const [items, setItems] = useState([]);
    const [showModal, setShowModal] = useState('false');

    useEffect(() => {
        let savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS));
        if (savedItems) {
            setItems(savedItems);
        }

        setShowModal(false)
    }, []);

    useEffect(() => {
        localStorage.setItem(SAVED_ITEMS, JSON.stringify(items))
    }, [items])


    // function onAddItem(text) {

    //     let it = new Item(text)
    //     setItems([...items, it])
    //     setShowModal(false)

    // }

    // function onItemDeleted(item) {
    //     let filteredItems = items.filter(it => {
    //         console.log(it)
    //         return (
    //             it.id !== item.id
    //         )
    //     })
    //     setItems(filteredItems)
    // }

    // function onDone(item) {
    //     let updatedItems = items.map(it => {
    //         if (it.id === item.id) {
    //             it.done = !it.done;
    //         }

    //         return it;
    //     })

    //     setItems(updatedItems)
    // }


    function onHideModal(e) {
        let target = e.target;
        if (target.id === 'modal') {
            setShowModal(false)
        }
    }

    return (
        <div className="container">
            <Provider store={store}>
                <header className="header">
                    <h1>To Do</h1> <button className="addButton" onClick={() => { setShowModal(true) }}>+</button>
                </header>
                <List onDone={onDone} onItemDeleted={onItemDeleted} items={items}></List>
                <Modal show={showModal} onHideModal={onHideModal}><TodoForm onAddItem={onAddItem}></TodoForm></Modal>
            </Provider>
        </div>)

}


export default App;