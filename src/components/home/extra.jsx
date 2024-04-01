// import { useNavigate } from "react-router-dom";
// import star from "../assets/Star.png";
// import calendar from "../assets/calendar.png";

// const getMovie = () => {
//   fetch("https://api.themoviedb.org/3/movie/", options)
//     .then((response) => response.json())
//     .then((response) => setMovie(response.results))
//     .catch((err) => console.error(err));
// };

// useEffect(() => getMovie(), []);

{
  // .map((movie) => {
  //   const {
  //     id,
  //     poster_path,
  //     original_title,
  //     vote_average,
  //     release_date,
  //   } = movie;
  //   const handleClick = () => {
  //     navigate(`/${id}`);
  //   };
  //   return (
  //     <li key={id} onClick={handleClick}>
  //       <div className="Bottom-Left">
  //         <img
  //           src={`https://image.tmdb.org/t/p/w500${poster_path}`}
  //           alt={original_title}
  //           height="80%"
  //           width="130px"
  //         />
  //       </div>
  //       <div className="Bottom-Right">
  //         <div className="Title">{original_title}</div>
  //         <div className="Rating">
  //           <img src={star} alt="star" height="20px" />
  //           {Math.round(vote_average)}/10 IMDb
  //         </div>
  //         <div className="Genre">
  //           <span>HORROR</span>
  //           <span>MYSTERY</span>
  //           <span>THRILLER</span>
  //         </div>
  //         <div className="Release-date">
  //           <img
  //             src={calendar}
  //             alt="calendar"
  //             height="30px"
  //             width="30px"
  //           />
  //           {release_date}
  //         </div>
  //       </div>
  //       )
  //     </li>
  //   );
  // })
}
