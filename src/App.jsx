import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import './App.css';
import Contactpage from "./pages/ContactPage";

const App = () => {
    return(
      <>
      <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/home" element={<HomePage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/contact" element={<Contactpage/>}/>
        </Routes>
      </Router>
      </div>
       </>
  )
}

export default App;