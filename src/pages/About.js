import {useState, useEffect} from "react";
import {Helmet} from "react-helmet-async";
import PageContainer from "../components/pages-parts/PageContainer";
import AboutImage from "../components/pages-parts/AboutImage";

const About = () =>{
    const [state] = useState({
        heading: 'about us',
        pageHeading: 'world best travel agency company since 2005',
        message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto beatae enim, in magni quis sed tempore vitae voluptate voluptates!，Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto beatae enim, in magni quis sed tempore vitae voluptate voluptates!，Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto beatae enim, in magni quis sed tempore vitae voluptate voluptates!'
    })
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return (
        <>
            <Helmet>
                <title>About page</title>
                <meta name={"description"} content={"travel friends about page"}/>
            </Helmet>
            <PageContainer data={state}>
                <AboutImage/>
            </PageContainer>
        </>

    )
}

export default About;