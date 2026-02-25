import axios from 'axios';
import React, { useEffect, useState } from 'react'
import '../styles/AllFlights.css';

const AllFlights = () => {
    const [flights, setFlights] = useState([]);
    const API_BASE = 'http://127.0.0.1:4000';
  
    
    const fetchFlights = async () =>{
      await axios.get(`${API_BASE}/fetch-flights`).then(
        (response)=>{
          setFlights(response.data);
          console.log(response.data)
        }
        )
      }
      
      useEffect(()=>{
        fetchFlights();
      }, [])
      
    return (
      <div className="allFlightsPage">
        <h1>All Flights</h1>
  
        <div className="allFlights">
  
          {flights.map((Flight)=>{
            return(
  
                <div className="allFlights-Flight" key={Flight._id}>
                  <p><b>_id:</b> {Flight._id}</p>
                  <span>
                    <p><b>Flight Id:</b> {Flight.flightId}</p>
                    <p><b>Flight name:</b> {Flight.flightName}</p>
                  </span>
                  <span>
                    <p><b>Starting station:</b> {Flight.origin}</p>
                    <p><b>Departure time:</b> {Flight.departureTime}</p>
                  </span>
                  <span>
                    <p><b>Destination:</b> {Flight.destination}</p>
                    <p><b>Arrival time:</b> {Flight.arrivalTime}</p>
                  </span>
                  <span>
                    <p><b>Base price:</b> {Flight.basePrice}</p>
                    <p><b>Total seats:</b> {Flight.totalSeats}</p>
                  </span>
                </div>
            )
          })}
  
  
  
  
  
   
        </div>
      </div>
    )
  }

export default AllFlights