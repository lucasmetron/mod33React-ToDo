import React from 'react';

function List(props) {

    return (
        <ul >
            {props.items.map(item => {
                return (
                    <li key={item.id}>
                        {item.text}
                        <button onClick={() => { props.onItemDeleted(item) }}> <img src="./assets/bin.png" alt="lixeira" /></button>
                    </li>
                )
            })}

        </ul>

    )
}

export default List;