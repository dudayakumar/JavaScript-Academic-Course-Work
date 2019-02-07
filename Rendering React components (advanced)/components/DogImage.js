import React from 'react';

//Pass image src as props to App component
class DogImage extends React.Component{
    render(){
        return <img src={this.props.dog} alt={this.props.altdog}/>
    }
}

export default DogImage;