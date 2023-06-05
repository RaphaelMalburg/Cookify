import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
function App() {
  return (
    <main className="h-full  w-screen  font-sans  bg-light">
      <Navbar />

      <Outlet />
      <Footer />
    </main>
  );
}

export default App;
