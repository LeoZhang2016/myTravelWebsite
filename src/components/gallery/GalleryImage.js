import {useContext} from "react";
import {LazyLoadImage} from "react-lazy-load-image-component";
import GalleryContext from "../../context/GalleryContext";
import {galleryTypes} from "../../context/types/GalleryTypes";

const GalleryImage = ({glr}) =>  {
    const { dispatch } = useContext(GalleryContext);
    const openLightBox = (imageObject) => {
            dispatch({type: galleryTypes.open, payload: imageObject})
    }

    return (
        <div className="col-3">
            <div className="gallery__image animation">
                <LazyLoadImage src={glr.image}
                               alt={glr.name}
                               onClick={() => openLightBox(glr)}
                />
            </div>
        </div>
    );
}

export default GalleryImage;