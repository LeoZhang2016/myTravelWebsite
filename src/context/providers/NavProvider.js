import {useReducer} from "react";
import NavContext from "../NavContext";
import NavReducer from "../reducers/NavReducer";

const initNavState = {NavStatus: false}

const initNav = () => {
    return {navDisplay: initNavState.NavStatus}
}

const NavProvider = (props) =>  {

    const [state, dispatch] = useReducer(NavReducer,initNavState,initNav);
    return (
        <NavContext.Provider value={{state, dispatch}}>
            {props.children}
        </NavContext.Provider>
    )
}

export default NavProvider;