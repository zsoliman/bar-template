import { Link } from 'react-router-dom'

import Navbar from "./Navbar";
import Header from "./Header";
import Footer from './Footer';
import mojito3 from "./images/mojito3.png";

const Home = () => {
    return (
        <div className="Home">
            <Navbar />
            <Header />
            <h2>come try one !</h2>

            <div className='HomeBody'>

                <img className="HomeImg" src={mojito3} />
                <h1>
                    Brooklyn<br />Bars<br /> Baby
                </h1>


                {/* <Link
                    className='Link' to='/about'>
                    <button className='EnterButton'>enter &nbsp; ></button>
                </Link> */}

            </div>

            <Footer />
        </div>
    )
}

export default Home;