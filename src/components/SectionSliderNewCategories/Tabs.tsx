import React from "react";

export const Tabs= () =>{
    return(
        <div className="container-nav-tabs">
            <nav className="navTabs">
                <ul className="nav_list_Tabs">
                    <li>
                        <a href="#" className="BarcelonaTab">Barcelona</a>
                    </li>
                    <li>
                        <a href="#" className="MadridTab">Madrid</a>
                    </li>
                    <li>
                        <a href="#" className="IbizaTab">Ibiza</a>
                    </li>

                </ul>
            </nav>
        </div>
    );
}
export default Tabs;