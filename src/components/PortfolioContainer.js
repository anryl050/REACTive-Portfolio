import React, { useState } from 'react';
import Navbar from './Navbar';
import Home from './Pages/Home';
import AboutMe from './Pages/AboutMe';
import Portfolio from './Pages/Portfolio';
import Contact from './Pages/Contact';
import Resume from './Pages/Resume';


export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Home');


    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home />;
        }
        if (currentPage === 'AboutMe') {
            return <AboutMe />;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
        return <Resume />;
    };


    const handlePageChange = (page) => setCurrentPage(page);

    return (
    
        <div style={{
            backgroundColor:"#F3EEE8"}}>

            <Navbar currentPage={currentPage} handlePageChange={handlePageChange}  />
            {renderPage()}

        </div>
    );
}


