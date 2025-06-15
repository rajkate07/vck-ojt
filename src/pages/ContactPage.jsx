import { Link } from "react-router-dom";
import Header from "../component/Header/Header";

const Contactpage = () => {
        return(
            <div>
                <Header>
                <nav>
                    <Link to="/home">Home</Link>
                    <Link to="/about">About</Link>
                </nav>
                </Header>
            </div>
        )
}

export default Contactpage;