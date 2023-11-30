import React from "react";
import './NavBarCalendarRoom.scss';

export const NavBarCalendarRoom= () =>{
    return(
        <div className="container-nav-calendarroom">
            <nav className="nav">
                <ul className="nav_list">
                    <li>
                        <a href="#" className="navlink">Horario</a>
                    </li>
                    <li>
                        <a href="#" className="navlink">Capacidad</a>
                    </li>
                    <li>
                        <a href="#" className="navlink">+Filtros</a>
                    </li>
                    <li>
                        <a href="#" className="navlink">Borrar</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
export default NavBarCalendarRoom;