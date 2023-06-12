import { useReducer } from "react";
import SharedContext from "../SharedContext";
import SharedReducer from "../reducers/SharedReducer";
import services from "../../data/services";
import reviews from "../../data/reviews";



const initSharedState = {
    servicesData: services,
    reviews: reviews,
}

const initShared = () =>  {
    return {servicesData: initSharedState.servicesData, reviews: initSharedState.reviews}
}

const SharedProvider = (props) =>  {
    const [sharedData, dispatch] = useReducer(SharedReducer, initSharedState, initShared)
    return (
        <SharedContext.Provider value={{sharedData, dispatch}}>
            {props.children}
        </SharedContext.Provider>
    )
}

export default SharedProvider;