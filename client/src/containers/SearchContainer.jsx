import React, { Component } from 'react'

class SearchContainer extends Component {
  constructor(props) {
    super(props)
    this.handleSearchChange=this.handleSearchChange.bind(this)
  }

  render() {
    return (
      <div id="search">
        <form>
          Flight Number:    
          <input className="flight-input" 
            type="text"
            placeholder="E.g. BA1440"
            value={this.props.searchFor}
            onChange={this.handleSearchChange}/>
        </form>
        <p onClick={this.props.runSearch}> Search </p>
      </div>
    )
  }

  handleSearchChange(event) {
    let searchedFlight = event.target.value
    this.props.handleSearchChange(searchedFlight)
  }
  
}

export default SearchContainer
    