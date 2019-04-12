<summary><code>FilterString.js</code></summary>
import React, { Component } from 'react';

export default class FilterString extends Component {
    constructor(){
        super();

        this.state={
            princess: ["Ariel", "Jasmine", "Rapunzel", "Belle", "Tiana", "Aurora", "Snow White", "Elsa", "Merida",
            "Anna", "Tinkerbell", "Moana", "Cinderella", "Mulan"],
            userInput: "",
            filteredPrincess: []
        }
    }
    handleChange(val){
        this.setState({ userInput: val });
    }
    filteredPrincess(userInput) {
        let princess = this.state.princess;
        let filteredPrincess = [];
    
        for ( let i = 0; i < princess.length; i++ ) {
          if ( princess[i].includes(userInput) ) {
            filteredPrincess.push(princess[i]);
          }
        }
        this.setState({ filteredPrincess: filteredPrincess });
    }
    render() {
        return <div className="puzzleBox filterStringPB">
            <h4>Filter String</h4>
            <span className="puzzleText">Princess:{JSON.stringify(this.state.princess,null,10)}</span>
            <input className="inputLine"onChange={(e) => this.handleChange(e.target.value)}></input>
            <button className="confirmationButton"onClick={()=> {this.filteredPrincess(this.state.userInput)}}>Filter</button>
            <span className="resultsBox filterStringRB">Filtered Princess:{JSON.stringify(this.state.filteredPrincess,null,10)}</span>
        </div>
    }
}