import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactPage(){
    return (
        <>
            <Navbar />
            <div className="contact-page">
                <h2>Contact Us</h2>
                <p>Feel free to reach out for any queries or suggestions.</p>
            </div>
            <Footer />
        </>
    )
}