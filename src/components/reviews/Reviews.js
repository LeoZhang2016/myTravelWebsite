import { useContext, useState } from "react";
import SharedContext from "../../context/SharedContext";
import ReviewBody from "./ReviewBody";

const Reviews = () => {
    const [heading] = useState('What our customers are saying?')
    const { sharedData: { reviews }} = useContext(SharedContext);
    // console.log("review data is : ", reviews)

    return(
       <div className="reviews">
           <div className="container">
               <h2 className="heading headingAnimation">{heading}</h2>
                <div className="row ml-minus-15 mr-minus-15">
                    {reviews.length > 0 ? reviews.map((review, index) =>{
                        return (
                            <ReviewBody review={review} key={index}/>
                        )
                        })
                        : ''}
                </div>
           </div>
       </div>
    )
}

export default Reviews;