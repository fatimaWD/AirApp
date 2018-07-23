import React, { Component } from 'react'

class FlightComponent extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let arrDep = ""
    if (this.props.flight.ArrDep === "A") {
      arrDep = "Arrival"
    }
    else {
      arrDep = "Departure"
    }
    
    return (
      <div id="flight">
        <p className="arr-dep">{arrDep}</p>
        <p className="date">{this.props.flight.Date}</p>
        <p className="time">{this.props.flight.Time}</p>
        <p className="destination">{this.props.flight.PortOfCallA}</p>
        <p className="flight-number">{this.props.flight.FlightNo}</p>
        <div className="mini-logo">
          <img  src={this.props.flight.Image} alt="Airline Logo"/>
        </div>
        <p className="airline">{this.props.flight.Airline}</p>
        <p className="status">{this.props.flight.Status}</p>
        <p className="other-info">{this.props.flight.OtherInfo}</p>
        <p className="add-info">{this.props.flight.Additional}</p>
        <p className="terminal">{this.props.flight.ArrHall}</p>
      </div>
    )
  }

}

export default FlightComponent