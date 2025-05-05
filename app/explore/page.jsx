'use client';
import { useEffect,useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SearchDestination from "../components/SearchDestination";
import { fetchFlights } from "../utils/fetchFlights";

export default function ExplorePage(){
    const [flights,setFlights] = useState([]);
    const [loadingFlights, setLoadingFlights] = useState(true);

    useEffect(() => {
        const getFlights = async () => {
          try {
            const response = await fetchFlights("london");
            console.log("Flight API response:", response);
            setFlights(response.data); 
            setLoadingFlights(false);
          } catch (err) {
            console.error("Error fetching flights:", err);
            setLoadingFlights(false);
          }
        };
    
        getFlights();
      }, []);
    return (
        <>
            <Navbar />
            <div className="explore-page">
                <section className="hero-explore">
                    <h1>🌍 Let's Explore Your Next Adventure!</h1>
                    <p>Find itineraries, flights, stays - custom tailored for you!</p>
                </section>

                <SearchDestination/>
                <section className="itinerary-section">
                    <h2>Suggested Itinerary</h2>
                    {/* will map itinerary cards here */}
                    <div className="section-grid">
                        <div className="card">Itinerary 1</div>
                        <div className="card">Itinerary 2</div>
                        <div className="card">Itinerary 3</div>
                    </div>
                </section>

                <section className="flights-section">
          <h2>Available Flights 🛫</h2>
          {loadingFlights ? (
            <p>Loading flights...</p>
          ) : (
            <div className="section-grid">
              {flights.map((flight, index) => (
                <div className="card" key={index}>
                  <h3>{flight.airline}</h3>
                  <p>{flight.departureCity} ➡️ {flight.arrivalCity}</p>
                  <p>Departure: {flight.departureTime}</p>
                  <p>Arrival: {flight.arrivalTime}</p>
                  <p>Price: ₹{flight.price}</p>
                </div>
              ))}
            </div>
          )}
        </section>

                <section className="hotels-section">
                    <h2>Top Stays 🏨</h2>
                    {/* will map hotel cards here */}
                    <div className="section-grid">
                        <div className="card">Hotel 1</div>
                        <div className="card">Hotel 2</div>
                        <div className="card">Hotel 3</div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    )
}