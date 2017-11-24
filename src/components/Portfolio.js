import React from 'react';
import { Link } from 'react-router-dom';

class Portfolio extends React.Component{

    render(){
        return (

            <div>
            <h1>Portfolio List </h1>
            <div>
            My Portpolio number 1 
            <Link to="portfolio/1">FindOut</Link>
            My Portpolio number 2 
            <Link to="portfolio/2">FindOut</Link>
            My Portpolio number 3 
            <Link to="portfolio/3">FindOut</Link>
            </div>
            </div>
        )
    }
}

export default Portfolio;