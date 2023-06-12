import { useContext } from "react";
import ModalContext from "../context/ModalContext";
import { modalTypes } from "../context/types/ModalTypes";

const Modal = (props) => {
    // const {state, dispatch, closeModal} = useContext(ModalContext);
    const {state, dispatch} = useContext(ModalContext);
    // console.log("data is : ",data);
    // console.log(state);
    const close = (e) =>  {
        // console.log(e.target.getAttribute('class'))
        if(e.target.getAttribute('class')=== 'modal') {
            // closeModal();
            dispatch({type: modalTypes.close})
        }
    }

    return state.modalStatus && state.current === props.current ? (
        <div className="modal"  onClick={close}>
            <div className="modal__body">
                {props.children}
            </div>
        </div>) : '';
}
export default Modal;