import React from 'react';
import { useDispatch } from 'react-redux';
import Card from './Card';
import { deleteItem, changeDone } from '../actions/listAction';

function DoneImg(props) {
    if (props.done) {
        return <img className="icon" src="./assets/on.png" alt="do" />
    } else {
        return <img className="icon" src="./assets/off.png" alt="done" />
    }
}


function ListItem(props) {

    const dispatch = useDispatch()

    return (
        <li>
            <Card className={props.item.done ? 'done item' : 'item'}>
                {props.item.text}
                <div>
                    <button onClick={() => { dispatch(changeDone(props.item.id)) }}><DoneImg done={props.item.done}></DoneImg></button>
                    <button onClick={() => { dispatch(deleteItem(props.item.id)) }}> <img className="icon" src="../assets/bin.png" alt="lixeira" /></button>
                </div>
            </Card>
        </li>
    )

}

export default ListItem;