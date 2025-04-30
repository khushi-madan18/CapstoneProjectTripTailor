'use client';

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SearchDestination from "../components/SearchDestination";

export default function ExplorePage(){
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
                    {/* will map flight cards here */}
                    <div className="section-grid">
                        <div className="card">Flight 1</div>
                        <div className="card">Flight 2</div>
                        <div className="card">Flight 3</div>
                    </div>
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