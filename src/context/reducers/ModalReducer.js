import { modalTypes } from '../types/ModalTypes';

const ModalReducer = (state, action) =>  {
    switch(action.type) {
        case modalTypes.open:  return {...state, modalStatus: true, current: action.payload};
        case modalTypes.close: return {...state, modalStatus: false, current: ''};
        default: return state;
    }
}

export default ModalReducer;