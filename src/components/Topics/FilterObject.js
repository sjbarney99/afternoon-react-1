<summary><code>FilterObject.js</code></summary>
import React, { Component } from 'react';

export default class FilterObject extends Component {
    constructor() {
        super();

        this.state={
            dogs: [
            {
                name: 'Buzz',
                age: 2,
                favoritePers: 'Mom'
            },
            
            {
                name: 'Jessie',
                age: 2,
                favoritePers: 'Depends on the day'
            },

            {
                name: 'Meanie',
                age: 8,
            }
        ],
            userInput: "",
            filteredDogs: []
        }
    }

    handleChange(val){
        this.setState({ userInput: val });
    }
    filteredDogs(prop) {
        let dogs = this.state.dogs;
        let filteredDogs = [];
    
        for ( let i = 0; i < dogs.length; i++ ) {
          if ( dogs[i].hasOwnProperty(prop) ) {
            filteredDogs.push(dogs[i]);
          }
        }

        this.setState({ filteredDogs: filteredDogs });
    }
    render() {
        return <div className="puzzleBox filterObjectPB">
            <h4>Filter Objects</h4>
            <span className="puzzleText">Original:{JSON.stringify(this.state.dogs,null,10)}</span>
            <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}></input>
            <button className="confirmationButton" onClick={()=> {this.filteredDogs(this.state.userInput)}}>Filter</button>
            <span className="resultsBox filterObjectRB">Filtered:{JSON.stringify(this.state.filteredDogs,null,10)}</span>
        </div>
    }
}