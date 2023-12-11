import Navbar from "./Navbar";
import Header from "./Header";
import Footer from "./Footer";

const Contact = () => {
    return (
        <div className="Contact">
            <Navbar />
            <Header />
            <div className="ContactBody">
                <h1>Contact Us !</h1>
                <h4>Phone: 917.999.9999</h4>
                <h4>Fax: 917.999.9999</h4>
                <h4>Email: drink@gmail.com</h4>
                <h2>We Do Events !</h2>
                <h3>call, text, email, fax, carrier pigeon to plan your next event</h3>

            </div>
            <Footer />
        </div>
    )
}

export default Contact;