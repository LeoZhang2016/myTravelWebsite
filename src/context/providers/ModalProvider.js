import { useState, useReducer } from "react";
import ModalContext from "../ModalContext";
import ModalReducer from "../reducers/ModalReducer";


const initModalState = { modalStatus: false , current: ''}

const initModal = () => {
    return {state: initModalState.modalStatus, current: initModalState.current}
}

const ModalProvider = (props) => {
    // console.log(" props.children is : ",props.children);
    const [state, dispatch] = useReducer(ModalReducer, initModalState, initModal)
    // const [state, dispatch] = useState({modalStatus: false});

    // const openModal = () => {
    //     dispatch({modalStatus: true})
    // }
    // const closeModal = () => {
    //     dispatch({modalStatus: false})
    // }
    return (
        <ModalContext.Provider value={{state, dispatch}}>
            {props.children}
        </ModalContext.Provider>
    )
}
export  default ModalProvider;