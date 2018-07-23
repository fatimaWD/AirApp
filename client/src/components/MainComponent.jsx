import React, {Component} from 'react'
import FlightsComponent from './FlightsComponent'

class MainComponent extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    if (this.props.shownInfo!="") {
      const flightsComponent = 
        <FlightsComponent
          flights={this.props.shownInfo}
        />

      return (
        <div id="user-choice">
          {flightsComponent}
        </div>
      )
    }

    else {
      return (
      <div id="user-choice">
      </div>
      )
    }
    
  }

}

export default MainComponent