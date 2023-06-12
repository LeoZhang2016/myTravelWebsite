import {useState} from "react";
import {LazyLoadImage} from "react-lazy-load-image-component";

const FooterIntro = () => {
    const [state] = useState({
        logo: 'assets/footer/logo.png',
        intro: 'Travel friends is a traveling agency, we arrange' +
            '  tours to the world famous and most beautiful countries,' +
            ' Since 2015 we provide hight quality services to our vaulable ' +
            'customers.'
    })
    return (
        <div className="footer__intro">
            <div className="footer__intro__img animation">
                <LazyLoadImage src={state.logo} alt={"footer logo"} />
            </div>
            <div className="footer__intro__msg animation">
                {state.intro}
            </div>
        </div>
    )
}

export default  FooterIntro;