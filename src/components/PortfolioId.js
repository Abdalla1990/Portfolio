import React from 'react';

class PortfolioId extends React.Component{

    render(props){
        return (

            <div>
            <h1>Portfolio Details</h1>
            <h1> Number : {this.props.match.params.id}</h1>
            </div>
        )
    }
}

export default PortfolioId;