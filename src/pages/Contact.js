import {useEffect, useState} from "react";
import {Helmet} from "react-helmet-async";
import PageContainer from "../components/pages-parts/PageContainer";
import ContactForm from "../components/pages-parts/ContactForm";


const Contact = () => {
    const [state] = useState({
        heading: 'contact us',
        pageHeading: 'leave your message in the contact form',
        message: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n' +
            '            Aliquam molestiae nulla odio qui rem sapiente veritatis.\n' +
            '            Ad aperiam debitis doloremque itaque provident, quo \n' +
            '            recusandae reiciendis sunt totam vel! Beatae eligendi\n' +
            '            molestias quisquam tempora. Deserunt, labore quae recusandae \n' +
            '            repudiandae tenetur velit.'})
    useEffect(() => {
        window.scrollTo(0,0)
    },[]);
    return (
        <>
            <Helmet>
                <title>Contact page</title>
                <meta name={"description"} content={"travel friends about page"}/>
            </Helmet>
            <PageContainer data={state}>
                <ContactForm/>
            </PageContainer>
        </>

    )
}
export default Contact;