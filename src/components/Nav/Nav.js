import React from "react";
import navCss from './Nav.module.css'
import {NavLink} from "react-router-dom";

const setActive = ({isActive}) => isActive ? navCss.active_link : navCss.item;

const Nav =()=>{
    return (
        <nav className={navCss.nav}>
            <ul className={navCss.list}>
                <li className={navCss.item}>
                    <NavLink to="/profile" className={setActive}>Profile</NavLink>
                </li>
                <li className={navCss.item}>
                    <NavLink to="/dialogs" className={setActive}>Dialogs</NavLink></li>
                <li className={navCss.item}><NavLink to="/news" className={setActive}>News</NavLink>
                </li>
                <li className={navCss.item}>
                    <NavLink to="/music" className={setActive}>Music</NavLink>
                </li>
                <li className={navCss.item}>
                    <NavLink to="/settings" className={setActive}>Setting</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;