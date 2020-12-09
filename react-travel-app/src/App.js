import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/pages/Home";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} ></Route>

          {/* <Route path="/products" exact></Route>
          <Route path="/sign-up" exact></Route>
          <Route path="/services" exact></Route> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
