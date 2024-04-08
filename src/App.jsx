import { Routes, Route, HashRouter } from "react-router-dom";
import Home from "./components/home/components/Home";
import Movies from "./components/movies&series/movies/Movies";
import Series from "./components/movies&series/series/Series";
import Footer from "./Footer";
import "./styles/App.scss";
// movies description
import MovieReview from "./components/review/movieReview/MovieReview";
import SeriesReview from "./components/review/seriesReview/SeriesReview";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route exact path="/" Component={Home}></Route>
          <Route path="/movies" Component={Movies}></Route>
          <Route path="/series" Component={Series}></Route>
          <Route path="/movie/description/:id" Component={MovieReview}></Route>
          <Route
            path="/series/description/:id"
            Component={SeriesReview}
          ></Route>
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
