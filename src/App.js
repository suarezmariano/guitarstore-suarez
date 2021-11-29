import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <ItemListContainer />
        <Routes>
          <Route path="/detail/:id" element={<ItemDetailContainer />} />
        </Routes>
      </div>
      y
    </Router>
  );
}

export default App;
