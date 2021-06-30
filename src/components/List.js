import React from 'react';
import Card from './Card';

function List(props) {

    function DoneImg(props) {
        if (props.done) {
            return <img className="icon" src="./assets/on.png" alt="do" />
        } else {
            return <img className="icon" src="./assets/off.png" alt="done" />
        }
    }

    return (
        <ul >
            {props.items.map(item => {
                return (
                    <li key={item.id}>
                        <Card className={item.done ? 'done item' : 'item'}>
                            {item.text}
                            <div>
                                <button onClick={() => { props.onDone(item) }}><DoneImg done={item.done}></DoneImg></button>
                                <button onClick={() => { props.onItemDeleted(item) }}> <img className="icon" src="../assets/bin.png" alt="lixeira" /></button>
                            </div>
                        </Card>
                    </li>
                )
            })}

        </ul>

    )
}

export default List;