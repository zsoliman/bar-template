import { Link } from 'react-router-dom'

const Navbar = () => {

    return (
        <div className='Navbar'>

            <Link
                className='Link' to='/'>
                <a>home</a>
            </Link>

            <Link
                className='Link' to='/about'>
                <a>about</a>
            </Link>

            <Link
                className='Link' to='/photos'>
                <a>photos</a>
            </Link>

            <Link
                className='Link' to='/hours'>
                <a>hours & location</a>
            </Link>

            <Link
                className='Link' to='/contact'>
                <a>contact</a>
            </Link>

        </div>
    )
}

export default Navbar;