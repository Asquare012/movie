import TrendingMovie from "./TrendingMovie";
import TrendingSeries from "./TrendingSeries";

const Trending = () => {
  return (
    <div className="Trending">
      <h1>Trending</h1>
      <TrendingMovie />
      <TrendingSeries />
    </div>
  );
};

export default Trending;
