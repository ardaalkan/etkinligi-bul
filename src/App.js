import Header from "./components/Header/Header";
import PopSlider from "./components/PopSlider/PopSlider";
import EventItems from "./components/EventItems/EventItems";
import "./styles/App.css";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://my-api-alk.herokuapp.com/etkinlik?")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((err) => {
        setError(err.message);
        setData(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <Header />
      <PopSlider />
      <EventItems />
    </div>
  );
}

export default App;
