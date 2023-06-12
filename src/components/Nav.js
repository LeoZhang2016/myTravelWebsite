/*
 * @Descripttion: 
 * @version: 
 * @Author: smile
 * @Date: 2023-05-02 21:58:41
 * @LastEditors: smile
 * @LastEditTime: 2023-06-12 23:19:04
 */

import {useContext} from "react";
import {Link} from 'react-router-dom';
import NavContext from "../context/NavContext";
import {navTypes} from "../context/types/NavTypes";

const publicUrl = process.env.PUBLIC_URL;

const Nav = () => {
  const {state, dispatch } = useContext(NavContext);
  // console.log('nav state ', state);
  console.log("process.env.PUBLIC_URL is : ",process.env.PUBLIC_URL);

    return (
        <>

        {state.navDisplay ? <div className="navLayer"></div> : ''}
                    <div className={state.navDisplay ? 'nav nav--open' : 'nav nav--close'}>
                        <div className="nav__content">
                            <li>
                                <Link to={publicUrl + "/"}>Home</Link>
                            </li>
                            <li>
                                <Link to={publicUrl + "/about"}>About</Link>
                            </li>
                            <li>
                                <Link to={publicUrl + "/contact"}>Contact</Link>
                            </li>
                        </div>
                    </div>
        </>
    )
}
export default Nav;