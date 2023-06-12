import {navTypes} from "../types/NavTypes";

const NavReducer = (state, action) => {
     // console.log("Nav Reducer state is : ", state.navDisplay);
     // console.log("Nav Reducer action is : ", action);
     switch(action.type) {
          case navTypes.toggle:  return {...state, navDisplay: !state.navDisplay }
          default: return state;
     }
}
export default NavReducer;