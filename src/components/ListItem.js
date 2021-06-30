import React from 'react';
import Card from './Card';


function DoneImg(props) {
    if (props.done) {
        console.log(props.done, 'feito')
        return <img className="icon" src="./assets/on.png" alt="do" />
    } else {
        console.log(props.done, "aguardando fazer")
        return <img className="icon" src="./assets/off.png" alt="done" />
    }
}


function ListItem(props) {

    return (
        <li>
            <Card className={props.item.done ? 'done item' : 'item'}>
                {props.item.text}
                <div>
                    <button onClick={() => { props.onDone(props.item) }}><DoneImg done={props.item.done}></DoneImg></button>
                    <button onClick={() => { props.onItemDeleted(props.item) }}> <img className="icon" src="../assets/bin.png" alt="lixeira" /></button>
                </div>
            </Card>
        </li>
    )

}

export default ListItem;