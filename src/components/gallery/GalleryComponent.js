import {useContext, useState} from "react";
import GalleryContext from "../../context/GalleryContext";
import galleryContext from "../../context/GalleryContext";
import GalleryImage from "./GalleryImage";
import LightBox from "./LightBox";

const GalleryComponent = () => {
    const { galleryStore:{ gallery, lightBoxStatus }, dispatch } = useContext(galleryContext)
    const [heading] =  useState('Travelers captured images');

    return (
        <>
            {lightBoxStatus ? <LightBox/> : ''}
            <div className="gallery">
                <div className="container">
                    <h2 className="heading mb-55 headingAnimation">{heading}</h2>
                    <div className="row">
                        {gallery.length > 0 ?
                            gallery.map((glr, index) =>  {
                                return (
                                    <GalleryImage glr={glr} key={index}/>
                                )
                            })
                            : ''}
                    </div>
                </div>
            </div>
        </>

    )
}
export default GalleryComponent;