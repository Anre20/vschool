import React from 'react';

const Navbar = () => {
    return (
        <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 50px', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <a href="/">Start Bootstrap</a>
            <div>
                <a href="/">HOME</a>
                <a href="/">ABOUT</a>
                <a href="/">SAMPLE POST</a>
                <a href="/">CONTACT</a>
            </div>
        </nav>
    );
};

export default Navbar;
