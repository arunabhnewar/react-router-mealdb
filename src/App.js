import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import NavMenuBar from './Components/NavMenuBar/NavMenuBar';
import Resturant from './Components/Resturant/Resturant';
import About from './Components/About/About';

function App() {
  return (
    <div>
      <Router>
        <NavMenuBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/resturant">
            <Resturant />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
