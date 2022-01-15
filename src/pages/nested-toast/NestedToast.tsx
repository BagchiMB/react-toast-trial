import { Link } from "react-router-dom";

// Components
import ToastContainer, {
  toast,
} from "../../components/toast/toast-container/ToastContainer";

// Styles
import "./NestedToast.css";

const NestedToast = () => {
  const handleClick = () => {
    toast({ content: "Nope!", type: "error", toastContainerId: "aaa" });
  };

  return (
    <div className="nested-toast">
      <ToastContainer delayInMs={3000} position="top-left" id={"aaa"} />
      Nested Toast Route
      <br />
      <button onClick={handleClick}>Show toast</button>
      <br />
      <Link to="/">Go Back</Link>
    </div>
  );
};

export default NestedToast;
