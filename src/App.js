import "./App.css";
import About from "./components/About/About";
import Career from "./components/Career/Career";
import Home from "./components/Home/Home";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import Touch from "./components/Touch/Touch";
import Work from "./components/Work/Work";
import Navbar from "./components/Navigation/Navbar";
import Aboutme from "./components/Aboutme/Aboutme";

function App() {
  return (
    <div>
      <Navbar /> <Home />
      <Aboutme />
      <About />
      <Career />
      <Work />
      <Touch />
    </div>
  );
}

export default App;
