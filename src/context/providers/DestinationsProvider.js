import {useReducer} from "react";
import DestinationsContext from "../DestinationsContext";
import DestinationsReducer from "../reducers/DestinationsReducer";
import {destinations} from "../../data/destinations";
import Cities from "../../data/cities";

const initDestinationsState = {
    destinations: destinations,
    details: {},
    cities: Cities,
    filteredCities: '',
}

const initDestinations = () => {
    return {
        destinations: initDestinationsState.destinations,
        details: initDestinationsState.details,
        cities: initDestinationsState.cities,
        filteredCities: initDestinationsState.filteredCities,
    }
}

const DestinationsProvider = (props) => {
    const [destinationsData, dispatch] = useReducer(DestinationsReducer,initDestinationsState, initDestinations)
    // console.log("DestinationsProvider destinationsData is: ",destinationsData)
    return (
        <DestinationsContext.Provider value={{destinationsData, dispatch}}>
            {props.children}
        </DestinationsContext.Provider>
    )
}

export default DestinationsProvider;