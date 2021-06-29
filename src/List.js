import React from 'react';

function List(props) {
    return (
        <ul >
            {props.items.map((item, i) => {
                return (
                    <li key={i}>{item}</li>
                )
            })}
        </ul>

    )
}

export default List;