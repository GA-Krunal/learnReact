import Navbar from './pages/Navbar';
import TopBar from './pages/TopBar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import About from './pages/About';
import Homee from './pages/Home';
import Service from './pages/Service';
import Price from './pages/Price';
import Location from './pages/Location';
import Blog from './pages/Blog';
import Footer from './pages/Footer';

function App() {
  return (

    <Router>
      <TopBar />
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Homee />
        </Route>
        <Route exact path="/About">
          <About />
        </Route>
        <Route exact path="/Service">
          <Service />
        </Route>
        <Route exact path="/Price">
          <Price />
        </Route>
        <Route exact path="/Location">
          <Location />
        </Route>
        <Route exact path="/Blog">
          <Blog />
        </Route>
      </Switch>
      <Footer />
    </Router>



  );
}

export default App;
