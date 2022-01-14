import { Routes, Route } from "react-router-dom";

// Components
import Layout from "./components/layout/Layout";
import App from "./pages/app/App";
import NestedToast from "./pages/nested-toast/NestedToast";

const main = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/nested-toast" element={<NestedToast />} />
      </Routes>
    </Layout>
  );
};
export default main;
