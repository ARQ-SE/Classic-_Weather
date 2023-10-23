import Home from "./Pages/Home";
import Vid4 from "./assets/bgvid4.mp4";
import "./App.css";

function App() {

  return (
    <div className="App">
      <div className="vid">
        <video
          id="background-video"
          autoPlay
          loop
          muted
        >
          <source
            src={Vid4}
            type="video/mp4"
          />
        </video>
        <div className="colr">
          
          <Home/>
        </div>
      </div>
    </div>
  );
}

export default App;
