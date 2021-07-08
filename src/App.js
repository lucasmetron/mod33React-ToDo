import React, { useState } from 'react';
import './Todo.css'
import List from './components/List';
import TodoForm from './components/TodoForm';
import Modal from './components/Modal';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import listReducer from './reducers/listReducer';

const SAVED_ITEMS = 'savedItems'

function persistState(state) {
    localStorage.setItem(SAVED_ITEMS, JSON.stringify(state))
}

function loadState() {
    const actualState = localStorage.getItem(SAVED_ITEMS);
    if (actualState) {
        return JSON.parse(actualState)
    } else {
        return [];
    }
}

const store = createStore(listReducer, loadState());

store.subscribe(() => {
    persistState(store.getState())
})

function App() {

    // const [items, setItems] = useState([]);
    const [showModal, setShowModal] = useState(false);

    // useEffect(() => {
    //     let savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS));
    //     if (savedItems) {
    //         setItems(savedItems);
    //     }

    //     setShowModal(false)
    // }, []);

    // useEffect(() => {
    //     localStorage.setItem(SAVED_ITEMS, JSON.stringify(items))
    // }, [items])


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

        setShowModal(showModal !== showModal)

    }

    return (
        <div className="container">
            <Provider store={store}>
                <header className="header">
                    <h1>To Do</h1> <button className="addButton" onClick={() => { setShowModal(true) }}>+</button>
                </header>
                <List></List>
                <Modal show={showModal} onHideModal={onHideModal}><TodoForm onHideModal={onHideModal} ></TodoForm></Modal>
            </Provider>
        </div>)

}


export default App;