import {Link} from 'react-router-dom';

const Header = () => {
        return(
            <div className='mainhead'>
                <Header/>
                    <nav className='headnav'>
                        <Link to="/home">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/contact">Contact</Link>
                        <Link to="/courses">Courses</Link>
                    </nav>
            </div>
        )
}

export default Header;
