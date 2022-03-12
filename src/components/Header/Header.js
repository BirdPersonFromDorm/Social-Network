import React from "react";
import headerCss from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) =>{
    return(
        <header className={headerCss.header}>
            <img src="https://stickerboom.ru/files/2016/05/11/4165xcabc-300x300.png" alt=""/>
            <div className={headerCss.loginBlock}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
}

export default Header;