import { Outlet } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import { useGlobalState } from "../context";

const Layout = () => {
  const { spaceInfo } = useGlobalState();

  return (
    <>
      <Navbar />
      <Outlet context={{ ...spaceInfo }} />
    </>
  );
};

export default Layout;
