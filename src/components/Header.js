/*
 * @Descripttion: 
 * @version: 
 * @Author: smile
 * @Date: 2023-04-25 15:59:24
 * @LastEditors: smile
 * @LastEditTime: 2023-06-12 21:25:24
 */
import {useState} from 'react';
import {LazyLoadImage} from "react-lazy-load-image-component";
import {useNavigate} from "react-router-dom";


const Header = ({heading, image, paragraph,children}) =>  {
    const [state] = useState({
        // video: "/assets/videos/header.mp4",
        // poster: "/assets/videos/screen.png",
        // logo: "/assets/images/logo.png",
        video: "./assets/videos/header.mp4",
        poster: "./assets/videos/screen.png",
        logo: "./assets/images/logo.png",
    })
    const navigate = useNavigate();
    const goToHome = () => {
        console.log('navigate is : ', navigate);
        navigate('/', {replace: true})
    }
    return (
        <div className="header">
            <div className="container pr">
                <div className="header__logo">
                    <img src={state.logo} alt="logo" onClick={goToHome}/>
                </div>
            </div>
            <div className="header__video">
                {image ? <LazyLoadImage src={image} alt={image} /> :
                    <video src={state.video} autoPlay loop muted poster={state.poster}></video>}

            </div>
            <div className="header__contents">
                <div className="container">
                    <div className="header__contents__text">
                        <div className="header__contents__text__child">
                            <h1 className="header__contents__text__child__h1">
                                {heading}
                            </h1>
                            <p className="header__contents__text__child__p">
                                {paragraph}
                            </p>
                            <div className="header__contents__text__child__link">
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header;
