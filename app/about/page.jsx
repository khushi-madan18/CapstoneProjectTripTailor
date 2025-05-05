import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About(){
    return (
        <>
            <Navbar />
            <div className="about-page">
                <h2>About TripTailor</h2>
                <p>We make your travel dreams come true!</p>
            </div>
            <Footer />
        </>
    )
}