import {useContext} from "react";
import {Link} from 'react-router-dom';
import NavContext from "../context/NavContext";
import {navTypes} from "../context/types/NavTypes";

const Nav = () => {
  const {state, dispatch } = useContext(NavContext);
  // console.log('nav state ', state);

    return (
        <>

        {state.navDisplay ? <div className="navLayer"></div> : ''}
                    <div className={state.navDisplay ? 'nav nav--open' : 'nav nav--close'}>
                        <div className="nav__content">
                            <li>
                                <Link to={"/"}>Home</Link>
                            </li>
                            <li>
                                <Link to={"/about"}>About</Link>
                            </li>
                            <li>
                                <Link to={"/contact"}>Contact</Link>
                            </li>
                        </div>
                    </div>
        </>
    )
}
export default Nav;