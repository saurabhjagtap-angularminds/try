import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./Components/Cart";
import Placeorder from "./Components/Placeorder";
import Home from "./Components/Home";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/cart" element={<Cart></Cart>} />
          <Route path="/placeorder" element={<Placeorder></Placeorder>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
