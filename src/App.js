import Navbar from "./components/Navbar";
import Meme from "./components/Meme";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Meme />
      </div>
    </div>
  );
}

export default App;
