import { Link } from "react-router-dom";
import Header from "../component/Header/Header";

const AboutPage = () => {
        return(

            <div>
                <Header>
                <nav>
                    <Link to="/contact">Contact</Link>
                    <Link to="/home">Home</Link>
                </nav>
                </Header>
            </div>
        )
}

export default AboutPage;