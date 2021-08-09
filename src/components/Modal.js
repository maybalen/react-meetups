
const Modal = (props) => {

    const cancelHandel = () => {
        props.onCancel();
    } 

    const confirmHandel = () => {
        props.onConfirm();
    } 

    return (
        <div className="modal">
            <p>Are you sure?</p>
            <button className="btn btn--alt" onClick={cancelHandel}>Cancel</button>
            <button className="btn" onClick={confirmHandel}>Confirm</button>
        </div>
    )
}

export default Modal
