import "./App.css";
import Banner from "./componentes/Banner/Banner";
import Header from "./componentes/Header/Header";
import Player from "./componentes/Player/Player";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner/>
      <Player/>
    </div>
  );
}

export default App;
