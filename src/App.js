import "./App.css";
import Home from "./components/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
import Plan from "./components/plan/Plan";
function App() {
  return (
    <div className="App">
      <Nav></Nav>
      {/* <Home></Home> */}
      {/* <About></About> */}

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/plan" element={<Plan />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
