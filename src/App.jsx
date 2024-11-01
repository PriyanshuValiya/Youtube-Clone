import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import styles from "../public/style.module.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="app">
        <Header />
        <div className={`${styles.app__page}`}>
          <Sidebar />
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
