import React from 'react';
import {Link} from 'react-router-dom';
class NotFound extends React.Component{

    render(){
        return (

            <div>
            <h1>NotFound 404</h1>
            <Link to="/">HOME</Link>
            </div>
        )
    }
}

export default NotFound;