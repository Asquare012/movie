// Homepage components
import Header from "./Header";
import Upcoming from "./Upcoming";
import Trending from "./Trending";

import "../styles/Home.scss";

const Home = () => {
  return (
    <>
      <div className="Home">
        <Header />
        <Upcoming />
        <Trending />
      </div>
    </>
  );
};

export default Home;
