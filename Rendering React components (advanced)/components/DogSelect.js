import React from 'react';

//Define select list and pass selected breed(value) as props to App component
class DogSelect extends React.Component{
    render(){
        return <select onChange={this.props.changeOption}>
                <option value="boxer">Boxer</option>
                <option value="beagle">Beagle</option>
                <option value="husky">Husky</option>
               </select>
    }
}

export default DogSelect;