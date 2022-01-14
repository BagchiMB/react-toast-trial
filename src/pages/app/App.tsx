import { Link } from "react-router-dom";

// Styles
import "./App.css";

function App() {
  return (
    <div className="app">
      Toast Example
      <br />
      <button>show toast</button>
      <br />
      <Link to="/nested-toast">Nested Toast Example</Link>
    </div>
  );
}

export default App;
