const express = require('express')
const app = express()
const http = require('http').Server(app)
const path = require('path')
const fs=require('fs')
const flightsData=fs.readFileSync('./flights.json')
const flights=JSON.parse(flightsData)

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/client/build/index.html'))
})

app.get('/flights', function (req, res) {
	res.send(flights)
})

app.route('/flights/arrivals')
 	.get(function (req, res) {
 		let arrivals = flights.filter((flight) => {
      		return flight.ArrDep === "A"
    	})
  	res.send(arrivals)
	})

app.route('/flights/departures')
	.get(function(req, res) {
		let departures = flights.filter((flight) => {
      		return flight.ArrDep === "D"
    	})
		res.send(departures)
	})

app.route('/flights/flight/:flightNo') 
	.get(function(req, res) {
		let flight = flights.filter((flight) => {
      	return flight.FlightNo === req.params.flightNo.toUpperCase()
    	})
    	res.send(flight)
		})

http.listen(process.env.PORT || 3000, function(){
  console.log('listening on *:3000')
})

app.use(express.static('client/build'))