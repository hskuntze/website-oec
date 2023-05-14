import Footer from "components/Footer";
import Navbar from "components/Navbar";
import About from "pages/About";
import Contact from "pages/Contact";
import Home from "pages/Home";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";

const Routes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default Routes;
