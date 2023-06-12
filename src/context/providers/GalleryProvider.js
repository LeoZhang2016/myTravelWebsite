import {useReducer} from "react";
import GalleryContext from "../GalleryContext";
import GalleryReducer from "../reducers/GalleryReducer";
import gallery from "../../data/gallery";

const initGalleryState = {
    gallery: gallery,
    lightBoxStatus: false,
    currentLightBox: {}
}

const initGallery = () =>  {
   return {
       gallery: initGalleryState.gallery,
       lightBoxStatus: initGalleryState.lightBoxStatus,
       currentLightBox: initGalleryState.initGalleryState
   }
}

const GalleryProvider = (props) =>  {
    const [galleryStore, dispatch]= useReducer(GalleryReducer ,initGalleryState, initGallery);

    return (
        <GalleryContext.Provider value={{galleryStore, dispatch}}>
            { props.children }
        </GalleryContext.Provider>
    )
}

export default  GalleryProvider