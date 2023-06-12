import {BsStopwatch} from "react-icons/bs";
import Facilities from "./Facilities";

const CityContents = ({city}) => {
    const format = (price) => {
        return `${price}.00`
    }
    return (
        <div className="cities__body__contents">
            <div className="cities__body__contents__top">
                <div className="cities__body__contents__top__name">
                    {city.name}
                </div>
                <div className="cities__body__contents__top__duration">
                    <BsStopwatch size={18} color={"#df2189"}/>
                    <div className="cities__body__contents__top__duration__time">{city.duration}
                    </div>
                </div>
            </div>

            <div className="cities__body__contents__price">
                <span className="cities__body__contents__price__dollar">$</span>
                { format(city.price) }
            </div>

            <Facilities name={"room"} value={city.room}/>
            <Facilities name={"food"} value={city.food}/>

            <div className="cities__body__contents__button">
                <button className={"btn-dark-sm"}>by now</button>
            </div>
        </div>
    )
}
export default CityContents;