import {Link} from 'react-router-dom';

const Header = () => {
        return(
            <div className='mainhead'>
                <header>
                    <nav className='headnav'>
                        <Link to="/home" className='home-nav-box'>Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/contact">Contact</Link>
                        <Link to="/courses">Courses</Link>
                    </nav>
                </header>
            </div>
            )
}

export default Header;
