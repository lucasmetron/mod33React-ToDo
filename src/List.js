import React from 'react';

function List(props) {

    return (
        <ul >
            {props.items.map(item => {
                return (
                    <li key={item.id}>
                        {item.text}
                        <button onClick={() => { props.onItemDeleted(item) }}>Deletar</button>
                    </li>
                )
            })}
        </ul>

    )
}

export default List;