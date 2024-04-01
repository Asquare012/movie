// Homepage components
import Header from "./Header";
import Showing from "./Showing";
import Popular from "./Popular";
import Footer from "./Footer";
// style
import "./styles/Home.scss";

const Home = () => {
  return (
    <>
      <div className="Home">
        <Header />
        <Showing />
        <Popular />
      </div>
      <Footer />
    </>
  );
};

export default Home;
