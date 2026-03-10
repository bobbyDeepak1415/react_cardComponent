import "./App.css";
import Badge from "./components/Badge";

function App() {
  return (
    <div className="App">
      <div className="card-container">
        <Badge filled={true} text="New Post" />
      </div>
    </div>
  );
}

export default App;
