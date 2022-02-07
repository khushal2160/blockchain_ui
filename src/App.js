import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import './App.css';
import Home from './components/Home';
import "./assets/fonts/CHIBOLD.ttf";
import Appbar from "./components/Appbar";
import Footer from "./components/Footer";
import TimeLine from "./components/HomeComponents/TimeLine"
import PortFolio from "./components/PortFolio"

function App() {
  return (
    <Router>
      <Appbar />
      <Route exact path="/">
        <Home />
      </Route>
      {/* <Route exact path="/timeline">
        <TimeLine />
      </Route>
      <Route exact path="/portfolio">
        <PortFolio />
      </Route> */}
      <Footer />
    </Router>
  );
}

export default App;
