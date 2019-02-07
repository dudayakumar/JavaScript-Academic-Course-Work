import React, { Component } from 'react';
import DogImage from './DogImage';
import DogSelect from './DogSelect';

class App extends Component {

  //Defining constructor
  constructor() {
    super();
    this.state = {
      breeds: '',
      breed: ''
    }
    this.fetchBreed = this.fetchBreed.bind(this);
    this.fetchNewBreed = this.fetchNewBreed.bind(this);
  }

  //Loading random boxer on initial load
  componentDidMount() {
    console.log('entered component did mount');

    const startBreed = "boxer";

    fetch('https://dog.ceo/api/breed/boxer/images/random').then((response) => {
      return response.json();
    })
      .then((response2) => {
        console.log("response.json()" + response2)
        this.setState({
          breeds: response2.message,
          breed: startBreed
        });
      });
  }

  //Fetch different dog of selected breed, on click of fetch button
  fetchBreed() {
    console.log("entered fetch breed method");

    let url1 = "https://dog.ceo/api/breed/";
    let selectedBreed = this.state.breed;
    console.log("selected breed: " + selectedBreed);
    let url2 = "/images/random";

    fetch(url1 + selectedBreed + url2).then((response) => {
      return response.json();
    })
      .then((response2) => {
        console.log("response.json()" + response2)
        this.setState({
          breeds: response2.message
        });
      });
  }

  //Function to select different breed and then fetch different dog of selected breed
  fetchNewBreed(e) {
    console.log('entered fetch new breed');
    const val = e.target.value;
    console.log("val = " + val);

    let url1 = "https://dog.ceo/api/breed/";
    let selectedBreed = val;
    let url2 = "/images/random";
    fetch(url1 + selectedBreed + url2).then((response) => {
      return response.json();
    })
      .then((response2) => {
        console.log("response.json()" + response2.message)
        this.setState({
          breeds: response2.message,
          breed: val
        });
      });
  }

  //Display the output
  render() {
    let selectBreed = this.state.breed;
    console.log("in render function, selected breed = " + selectBreed);
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>{selectBreed} Dog Image Generator</h1>
        <h2>Dhivya Udaya Kumar - dudayakumar@hawk.iit.edu - ITMD - 565</h2>
        <p>Please press the button to generate a new random image.</p>
        <DogSelect changeOption={this.fetchNewBreed} />
        <button type="button" onClick={this.fetchBreed}>Fetch</button>
        <hr />
        <DogImage dog={this.state.breeds} altdog={this.state.breed} />
      </div>
    );
  }
}

export default App;