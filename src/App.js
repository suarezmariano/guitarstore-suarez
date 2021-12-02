import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import NavBar from "./components/NavBar/NavBar";
import Home from "./views/Home/Home";
import ItemDetail from "./views/ItemDetail/ItemDetail";
import CategoryList from "./components/CategoryList/CategoryList";
import Services from "./views/Services/Services";
import About from "./views/About/About";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/item/:id" element={<ItemDetail />} />
          <Route path="/category/:id" element={<CategoryList />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
