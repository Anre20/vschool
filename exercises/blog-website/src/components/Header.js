import React from 'react';
import Navbar from './Navbar';

const Header = () => {
    return (
        <header style={{ backgroundImage: `url('https://startbootstrap.github.io/startbootstrap-clean-blog/assets/img/home-bg.jpg')`, backgroundSize: 'cover', padding: '100px 0' }}>
            <Navbar />
            <div style={{ textAlign: 'center', color: '#fff' }}>
                <h1>Clean Blog</h1>
                <span>A Blog Theme by Start Bootstrap</span>
            </div>
        </header>
    );
};

export default Header;
