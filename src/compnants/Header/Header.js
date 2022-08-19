import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header-div' style={{ display: "flex" }}>
            <div>
                <h2 className='test'>Office Manager</h2>
            </div>
            <div>
                <ul className='navigation-list'>
                    <li>Home</li>
                    <li>Schedule</li>
                    <li>Meeting</li>
                    <li>About</li>
                    <li>Dashboard</li>
                    <li>Profile</li>
                </ul>
            </div>

        </div>
    );
};

export default Header;