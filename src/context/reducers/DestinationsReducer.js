import { destinationsTypes } from "../types/DestinationsTypes";

const DestinationsReducer = (state, action) =>  {
   // console.log("state is : ",state.destinations)
   const { destinations } = state;
   const { type, payload } = action;
   // console.log("typeof payload is : ",typeof action.payload);
   // console.log("typeof destinations[1].id is : ",typeof destinations[1].id);

   switch(action.type) {
      case destinationsTypes.details:
         const destination = destinations.find((destination) =>  destination.id === parseInt(payload));
         return {...state, details: destination };

      case destinationsTypes.cities:
         const filtered =state.cities.filter((city) => parseInt(city.destinationId) === parseInt(payload));
         return {
            ...state, filteredCities:filtered
         }
      default: return state;
   }
}
export default DestinationsReducer;

