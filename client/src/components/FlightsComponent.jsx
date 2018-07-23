import React, { Component } from 'react'
import FlightComponent from './FlightComponent'

class FlightsComponent extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    if (typeof this.props.flights !== 'string') {
      const flightComponents = this.props.flights.map((flight, index) => {
        return (
          <FlightComponent 
            key={index}
            flight={flight}
          />
        )
      })

      return (
        <div id="flights-component">
  	      <div id="flight-header">
  	      	<p className="arr-dep">Type</p>
  	        <p className="date">Date</p>
  	        <p className="time">Time</p>
  	        <p className="destination">Destination</p>
  	        <p className="flight-number">Flight Number</p>
  	        <p className="mini-logo"></p>
  	        <p className="airline">Airline</p>
  	        <p className="status">Status</p>
  	        <p className="info">Info</p>
  	        <p className="terminal">Terminal</p>
  	      </div>
  	      <div id="flight-each">
  	      	{flightComponents}
  	      </div>
        </div>
      )
    }
    else {
      return (
        <div id="flights-component">
          <p id="apology">{this.props.flights}</p>
        </div>
      )
    }
  }

}

export default FlightsComponent