import {LazyLoadImage} from "react-lazy-load-image-component";
import {useContext} from "react";
import galleryContext from "../../context/GalleryContext";
import {galleryTypes} from "../../context/types/GalleryTypes";

const LightBox = () => {
   const {galleryStore: { currentLightBox}, dispatch} =  useContext(galleryContext)

    const closeLightBox = (e)=> {
       const className = e.target.getAttribute("class")
        if (className === 'gallery__lightbox') {
            dispatch({type: galleryTypes.close})
        }
    }
    return (
        <div className="gallery__lightbox"
             onClick = {closeLightBox}
             // onClick={(e)=>{closeLightBox(e)}}
        >
            <h4>{currentLightBox.name}</h4>
            <div className="gallery__lightbox__card">
                <div className="gallery__lightbox__card__image">
                    <LazyLoadImage src={currentLightBox.image} alt={currentLightBox.name}/>
                </div>
            </div>
        </div>
    )
}
export default LightBox;