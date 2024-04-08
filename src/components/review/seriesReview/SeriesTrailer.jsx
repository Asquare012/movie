import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const SeriesTrailer = () => {
  const { id } = useParams();
  const [trailer, setTrailer] = useState([]);

  const getTrailer = () => {
    const url = `https://api.themoviedb.org/3/tv/${id}/videos?language=en-US&api_key=72222c9924c7699dfcd891c6395530f0`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setTrailer(data.results);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => getTrailer(), []);

  // filter key
  const key = trailer
    .filter((data) => {
      return data.type === "Trailer";
    })
    .map((data) => {
      return data.key;
    });

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <iframe
        width="90%"
        height="100%"
        src={`https://www.youtube.com/embed/${key[0]}?controls=0`}
      ></iframe>
    </div>
  );
};

export default SeriesTrailer;
