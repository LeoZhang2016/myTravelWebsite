import FooterIntro from "./FooterIntro";
import FootLinks from "./FootLinks";


const Footer = () => {
    const footerStyles = {
        background: 'url(/assets/footer/footer.jpg)',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }
    return(
        <footer className="footer" style={footerStyles}>
            <div className="footer__container">
                <div className="container">
                    <div className="footer__container__block">
                        <div className="row ml-minus-15 mr-minus-15">
                            <div className="col-6 p-15">
                                <FooterIntro/>
                            </div>
                            <div className="col-6 p-15">
                                <FootLinks/>
                            </div>
                        </div>
                    </div>
                    <div className="footer__bottom">
                        <p>&copy; copy right travel friends {new Date().getFullYear()}</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;