import React from "react";
import Card from "./Card";

function Modal(props) {

    return (
        <div id="modal" className={props.show ? "modal" : "modal hide"}>
            <Card className="cardModal">
                {props.children}  {/* Desta maneira, o que for colocado dentro de <Modal>aqui</Modal>, será mostrado na tela*/}
            </Card>
        </div>
    )
}


export default Modal;