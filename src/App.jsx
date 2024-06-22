import { Routes, Route } from "react-router-dom";
import Layout from "./component/Layout";

// pages
import SpaceHome from "./pages/home/SpaceHome";
import SpaceDestination from "./pages/destination/SpaceDestination";
import SpaceCrew from "./pages/crew/SpaceCrew";
import SpaceTechnology from "./pages/technology/SpaceTechnology";
import ErrorPage from "./pages/error/ErrorPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<SpaceHome />} />
        <Route path="destination" element={<SpaceDestination />} />
        <Route path="crew" element={<SpaceCrew />} />
        <Route path="technology" element={<SpaceTechnology />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

export default App;
