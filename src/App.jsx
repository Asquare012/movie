import { Routes, Route, HashRouter } from "react-router-dom";

import Home from "./components/home/Home";
import Review from "./components/review/Review";
import "./App.scss";
function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route exact path="/" Component={Home}></Route>
          <Route path="/:id" Component={Review}></Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
