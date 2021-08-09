import { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

const Todo = (props) => {

    const [modalIsOpen, setModalIsOpen] = useState(false)

    const deleteHandle = () => {
        setModalIsOpen(true)
    }

    const closeModalHandle = () => {
        setModalIsOpen(false)
    }


    return (
        <div className="card">
            <h2>{ props.title }</h2>
                <div className="actions">
                <button className="btn" onClick={deleteHandle}>Delete</button>
            </div>
            { modalIsOpen && <Modal onCancel={closeModalHandle} onConfirm={closeModalHandle} /> }
            { modalIsOpen && <Backdrop onCancel={closeModalHandle} /> }            
        </div>
    )
}

export default Todo
