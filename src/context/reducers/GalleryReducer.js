import {galleryTypes} from "../types/GalleryTypes";

const GalleryReducer = (state, action) => {
    switch(action.type) {
        case galleryTypes.open:
            return {...state, lightBoxStatus: true, currentLightBox: action.payload}
        case galleryTypes.close:
            return {...state, lightBoxStatus: false, currentLightBox: {}}
    }
    return state;
}
export  default GalleryReducer;