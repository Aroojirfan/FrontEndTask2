import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import RoutesPages from "./Pages/RoutesPages";

const App = () => {
  return (
    <Router>
     <RoutesPages/>
    </Router>
  );
};

export default App;
