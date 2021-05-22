import React, {useState} from "react";
import {Link, NavLink} from "react-router-dom";
import style from "./Navbar.module.scss";
import {IconContext} from "react-icons/lib";
import {sidebarData} from "../common/SidebarData";
import {VscThreeBars} from "react-icons/all";


export const Navbar = () => {

    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)

    return (
        <div className={style.navbar}>
            <IconContext.Provider value={{color: '#8c91b6'}}>
                <div>
                    <NavLink to={'#'} className={style.menuBars}>
                        <VscThreeBars onClick={showSidebar}/>
                    </NavLink>
                </div>
            </IconContext.Provider>
            <IconContext.Provider value={{color: '#007bff'}}>
            <nav className={sidebar ? `${style.navMenu} ${style.active}` : style.navMenu}>
                    <ul className={style.navMenuItems} onClick={showSidebar}>
                        {sidebarData.map((item, index) => {
                            return (
                                <li key={index} className={style.navText}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span className={style.navbarTitle}>{item.title}</span>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
        </div>
    )
}