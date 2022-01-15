import { Link } from "react-router-dom";
import { toast } from "../../components/toast/toast-container/ToastContainer";

// Styles
import "./App.css";

function App() {
  const handleClick = () => {
    toast({ content: "Yo", type: "success" });
  };

  return (
    <div className="app">
      Toast Example
      <br />
      <button onClick={handleClick}>show toast</button>
      <br />
      <Link to="/nested-toast">Nested Toast Example</Link>
    </div>
  );
}

export default App;
