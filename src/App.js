import "./App.css";
import { Route } from "react-router";
import Launchscreen from "./Views/Launchscreen/Launchscreen";
import Home from "./Views/Home/Home";
import Menu from "./components/Menu/Menu";
function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Launchscreen} />
      <Route path="/home" component={Menu} />
      <Route exact path="/home" component={Home} />
    </div>
  );
}

export default App;
