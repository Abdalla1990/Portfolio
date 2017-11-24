
import {BrowserRouter,Route, Switch } from 'react-router-dom'
import React from 'react';
import About from '../components/About'
import Portfolio from '../components/Portfolio'
import PortfolioId from '../components/PortfolioId'
import NotFound from '../components/NotFound'
import Home from '../components/Home'
import Header from '../components/Header'



/*
 
the way Router works is that it goes inside the router and finds the first match letter of the route url ex. /create and / are equal 
in react. so we have to set exact = true in the props for react to match the exact same given url. 

BROWSERROUTER : Is the main directory component API which looks for rouets 
SWITCH : Is used to look for the specific route and if nothing matches it will show the component with no path prop
Routes : We render it to the DOM so that it goes to the routes before anything else and then the router will chose which component to
render based on the URL .
 */

const AppRouter = () => (
    <BrowserRouter>
        <div>
        <Header/>
            <Switch>
                <Route  path="/" component={Home} exact={true}/> 
                <Route  path="/about" component={About} />
                <Route  path="/portfolio/:id" component={PortfolioId} /> 
                <Route  path="/portfolio/" component={Portfolio} /> 
                <Route  component={NotFound} />
            </Switch>
        </div>
    </BrowserRouter>

) ;

export default AppRouter ;