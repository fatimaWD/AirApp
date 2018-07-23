import React, { Component } from 'react'
import MainComponent from '../components/MainComponent'
import NavigationComponent from '../components/NavigationComponent'
import SearchContainer from './SearchContainer'

class MainContainer extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      flights: [],
      shownInfo: "",
      search: false,
      searchFor: ""
    }

    this.handleFlightsClick=this.handleFlightsClick.bind(this)
    this.handleArrivalsClick=this.handleArrivalsClick.bind(this)
    this.handleDeparturesClick=this.handleDeparturesClick.bind(this)
    this.handleSearchClick=this.handleSearchClick.bind(this)
    this.handleSearchChange=this.handleSearchChange.bind(this)
    this.runSearch=this.runSearch.bind(this)
  }

  componentDidMount() {
    let url = 'http://localhost:3000/flights'
    let request = new XMLHttpRequest()
    request.open('GET', url)
    request.onload = function() {
      if (request.status !== 200) return
      var data = JSON.parse(request.responseText)
      this.setState({flights: data})
    }.bind(this)
    request.send()
  }

  render() {
    let navigation = 
    <NavigationComponent
      handleFlightsClick={this.handleFlightsClick}
      handleArrivalsClick={this.handleArrivalsClick}
      handleDeparturesClick={this.handleDeparturesClick}
      handleSearchClick={this.handleSearchClick}
    />

    let mainComponent = 
    <MainComponent
      shownInfo = {this.state.shownInfo}
      />

    let searchContainer =
    <SearchContainer
      handleSearchChange={this.handleSearchChange}
      runSearch={this.runSearch}
      searchFor={this.state.searchFor}
    />
    
    if (!this.state.search) {
      return (
        <div>
          {navigation}
          {mainComponent}
        </div>
      )
    }
    else {
      return (
        <div>
          {navigation}
          {searchContainer}
          {mainComponent}
        </div>
      )
    }
  }

  handleFlightsClick() {
    let allFlights = this.state.flights
    this.setState({shownInfo: allFlights, search: false})
  }

  handleArrivalsClick() {
    let allFlights = this.state.flights.filter((flight) => {
      return flight.ArrDep === "A"
    })
    this.setState({shownInfo: allFlights, search: false})
  }

  handleDeparturesClick() {
    let allFlights = this.state.flights.filter((flight) => {
      return flight.ArrDep === "D"
    })
    this.setState({shownInfo: allFlights, search: false})
  }

  handleSearchClick() {
    this.setState({shownInfo: "", search: true})
  }

  handleSearchChange(searchedFlight) {
    let allFlights = this.state.flights.filter((flight) => {
      return flight.FlightNo.includes(searchedFlight.toUpperCase())
    })
    if (allFlights.length>0) {
      this.setState({searchFor: searchedFlight, shownInfo: allFlights})
    }
    else {
      let apology = `We are sorry, but there is no such flight currently on schedule.`
      this.setState({searchFor: searchedFlight, shownInfo: apology})
    }
  }

  runSearch() {
    let allFlights = this.state.flights.filter((flight) => {
      return flight.FlightNo === this.state.searchFor.toUpperCase()
    })
    if (allFlights.length>0) {
      this.setState({shownInfo: allFlights})
    }
    else {
      let apology = `We are sorry, but there is no such flight currently on schedule.`
      this.setState({shownInfo: apology})
    }
  }

}

export default MainContainer