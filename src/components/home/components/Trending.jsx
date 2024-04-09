import TrendingMovie from "./TrendingMovie";
import TrendingSeries from "./TrendingSeries";

const Trending = () => {
  return (
    <div className="Trending">
      <TrendingMovie />
      <TrendingSeries />
    </div>
  );
};

export default Trending;
