import React from "react";
import headerCss from './Header.module.css'

const Header = () =>{
    return(
        <header className={headerCss.header}>
            <img src="https://stickerboom.ru/files/2016/05/11/4165xcabc-300x300.png" alt=""/>
        </header>
    );
}

export default Header;