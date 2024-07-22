import React from 'react';
import Header from './components/Header';
import BlogList from './components/BlogList';
import Footer from './components/Footer';
import './App.css';
import './index.css';


function App() {
    return (
        <div>
            <Header />
            <BlogList />
            <Footer />
        </div>
    );
}

export default App;
