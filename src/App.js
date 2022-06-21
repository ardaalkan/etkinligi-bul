import Header from "./components/Header/Header";
import PopSlider from "./components/PopSlider/PopSlider";
import EventItems from "./components/EventItems/EventItems";
import "./styles/App.css";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  return (
    <div className="App">
      <Header />
      <PopSlider />
      <div className="api-card-container-card">
        <div className="api-card-container-top-card">
          <img src="" alt="alk" />
        </div>
        <div className="api-card-container-bottom-card">
          <p>konser</p>
          <p>zaman</p>
          <p>şehir</p>
        </div>
      </div>
    </div>
  );
}

export default App;
