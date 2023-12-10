import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="Home">
            <h1>HOME PAGE</h1>

            <Link
                className='Link' to='/welcome'>
                <button>enter --></button>
            </Link>
        </div>
    )
}

export default Home;