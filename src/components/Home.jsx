import { Link } from 'react-router-dom'

import Navbar from "./Navbar";
import Header from "./Header";
import Footer from './Footer';

const Home = () => {
    return (
        <div className="Home">
            <Navbar />
            <Header />

            <h2>come try one !</h2>

            <Link
                className='Link' to='/about'>
                <button className='EnterButton'>enter &nbsp; ></button>
            </Link>

            <Footer />
        </div>
    )
}

export default Home;