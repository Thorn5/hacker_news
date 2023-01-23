import React from 'react';
import {Outlet, Link, NavLink} from 'react-router-dom';

const Navbar = () => {
    <div>
        <nav>
            <span>
                <NavLink to='/'>
                    Home
                </NavLink>
                </span>
                <span>
                <NavLink to='/fixedquery'>
                    Fixed Query
                </NavLink>
                </span>
                <span>
                <NavLink to='/dynamicquery'>
                    Dynamic Query
                </NavLink>
                </span>
        </nav>
    </div>
}

export default Navbar;