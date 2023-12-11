import Navbar from "./Navbar";
import Header from "./Header";
import Footer from "./Footer";
import mojito from "./images/mojito.png";

const About = () => {
    return (
        <div className="About">
            <Navbar />
            <Header />

            <div className="AboutBody">
                {/* stay inside this <div> to use display: flex */}

                <img className="AboutImg" src={mojito} />

                <div className="AboutText">
                    <h1>About Us</h1>

                    <h4> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, velit? Sit repellendus expedita veritatis voluptates minus suscipit itaque voluptas. Quos assumenda animi laboriosam eum, ipsam inventore natus ullam nostrum aperiam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quae explicabo maxime consectetur, repudiandae et accusantium eius adipisci quod eum ullam quibusdam nemo voluptates ipsum dolore debitis perspiciatis! Laudantium, ducimus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, architecto vel ducimus sit iure reiciendis ipsum dignissimos eos. Aperiam molestias architecto ipsam alias officia ad fugit error? Placeat, pariatur inventore!</h4>

                </div>
            </div>

            <Footer />
        </div>
    )
}

export default About;