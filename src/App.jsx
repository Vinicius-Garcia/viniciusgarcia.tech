import { Sidebar } from "./components/sidebar/Sidebar";
import { Home } from "./components/home/Home";
import "./styles.css";
import "./global.css";
function App() {
  return (
    <>
      <div className="wrapper">
        <div className="sidebars">
          <Sidebar />
        </div>
        <div className="content">
          <Home />
        </div>
      </div>
    </>
  );
}

export default App;
