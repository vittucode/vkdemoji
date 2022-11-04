
import { Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import Homepage from "./Homepage";
import Signin from "./Signin";
import Signup from "./Signup";
import Contact from "./Contact";
import About from "./About";
import Terms from "./Terms";
import Privacy from "./Privacy";
import Signupcopy from "./Signupcopy";
const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/Hero" element={<Hero />} />
        <Route path="/" element={< Homepage />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/Terms" element={<Terms />} />
        <Route path="/Privacy" element={<Privacy />} />
        <Route path="Signupcopy" element={<Signupcopy />} />
      </Routes>
      <Footer />



    </>
  );
};

export default App;
