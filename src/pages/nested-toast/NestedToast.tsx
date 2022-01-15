import { Link } from "react-router-dom";

// Styles
import "./NestedToast.css";

const NestedToast = () => {
  return (
    <div className="nested-toast">
      Nested Toast Route
      <br />
      <button>Show toast</button>
      <br />
      <Link to="/">Go Back</Link>
    </div>
  );
};

export default NestedToast;
