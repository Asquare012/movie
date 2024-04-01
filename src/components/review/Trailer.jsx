import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Trailer = () => {
  const { id } = useParams();
  const [trailer, setTrailer] = useState([]);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MjIyMmM5OTI0Yzc2OTlkZmNkODkxYzYzOTU1MzBmMCIsInN1YiI6IjY1MDBlMjYzZjI5ZDY2MDEzYTNiM2U5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.weQOfRExY3OF3lcYVrp7-ShSHpelM0AUGhxoUObDblM",
    },
  };

  const getTrailer = () => {
    const url = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`;
    fetch(url, options)
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

export default Trailer;
