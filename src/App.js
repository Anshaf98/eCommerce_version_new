import { Route, Switch } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/header/Navbar";
import Home from "./components/home/Home";
import Nav from "./components/navBtmBar.js/Nav";

function App() {
  return (
    <>
      <Navbar />
      <Nav />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
