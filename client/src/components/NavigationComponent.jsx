import React, {Component} from 'react'

class NavigationComponent extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="navigation">
        <div id="logo-div">
          <img id="logo"src={require('file-loader!../../public/img/logolarge.png')}/>
        </div>
        <div id="choices-div">
          <p className="choice" onClick={this.props.handleFlightsClick}>Flights</p>
          <p className="choice" onClick={this.props.handleArrivalsClick}>Arrivals</p>
          <p className="choice" onClick={this.props.handleDeparturesClick}>Departures</p>
          <p className="choice" onClick={this.props.handleSearchClick}>Search</p>
        </div>
      </div>
    ) 
  }

}

export default NavigationComponent

