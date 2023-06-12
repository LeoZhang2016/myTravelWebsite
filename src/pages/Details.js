import {useContext, useEffect} from 'react';
import {useParams} from "react-router-dom";
import { Helmet } from "react-helmet-async";
import DestinationsContext from "../context/DestinationsContext";
import {destinationsTypes} from "../context/types/DestinationsTypes";
import Header from "../components/Header";
import DestinationInfo from "../components/DestinationInfo";
import Cities from "../components/cities/Cities";
import Footer from "../components/footer/Footer";

const Details = () =>  {

    const { destinationsData, dispatch } = useContext(DestinationsContext);
    // console.log("useParams is : ",useParams())
    const { id } = useParams() // react router dom 6

    // console.log("destinationsData details is: ",destinationsData.details)
    const { details , filteredCities } =  destinationsData;

    useEffect( () => {
          dispatch({type: destinationsTypes.details, payload: id});
          dispatch({type: destinationsTypes.cities, payload: id});
          window.scrollTo(0,0)
        },[id])

    // console.log("destinationsData,filtered is : ",destinationsData.filteredCities);

    return (
        <>
            <Helmet>
                <title>{details.name}</title>
            </Helmet>
           <Header
               heading={details.name}
               image = {details.bigImage}
           />
            <DestinationInfo details={details}/>
            <Cities cities={filteredCities} name={details.name}/>
            <Footer/>
        </>
    )
}

export default Details;