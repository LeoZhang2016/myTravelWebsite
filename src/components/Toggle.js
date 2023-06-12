import {useContext} from "react";
import NavContext from "../context/NavContext";
import {navTypes} from "../context/types/NavTypes";


const Toggle = () => {
    const { state, dispatch } = useContext(NavContext);
    // console.log('toggle state is : ',state.navDisplay)
    return (
        <div className={state.navDisplay? 'toggle-close' : 'toggle-open'}
             onClick={() => dispatch({type: navTypes.toggle})}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}
export default Toggle;

