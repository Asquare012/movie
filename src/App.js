import "./App.scss";
import Hero from "./component/hero/Hero";
import Featured from "./component/featured/Featured";
import Footer from "./component/footer/Footer";

function App() {
  return (
    <div className="App">
      <Hero />
      <Featured />
      <Footer />
    </div>
  );
}

export default App;
