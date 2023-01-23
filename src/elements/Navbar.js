import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav>
                <span>
                    &nbsp; &nbsp; &nbsp;
                    <NavLink to='/'>
                        Home
                    </NavLink>
                </span>
                <span>
                    &nbsp; &nbsp; &nbsp;
                    <NavLink to='/fixedquery'>
                        Fixed Query
                    </NavLink>
                </span>
                <span>
                    &nbsp; &nbsp; &nbsp;
                    <NavLink to='/dynamicquery'>
                        Dynamic Query
                    </NavLink>
                </span>
            </nav>
            <Outlet />
        </div>
        // <div>
        //     <nav>
        //         <ul>
        //             <li>
        //                 <NavLink to='/'>
        //                     Home
        //                 </NavLink>
        //             </li>
        //             <li>
        //                 <NavLink to='/fixedquery'>
        //                     Fixed Query
        //                 </NavLink>
        //             </li>
        //             <li>
        //                 <NavLink to='/dynamicquery'>
        //                     Dynamic Query
        //                 </NavLink>
        //             </li>
        //         </ul>
        //     </nav>
        //     <Outlet />
        // </div>
    )
}

export default Navbar;