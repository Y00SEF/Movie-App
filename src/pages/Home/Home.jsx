//  dd96d4abbe568a42507942802fc47719

import { useEffect, useState } from "react";
import Loading from "../../components/Loading/Loading";
import MovieCard from "../../components/MovieCard/MovieCard";

export default function Home() {
  const [trendingMovies, settrendingMovies] = useState(null);

  async function Movies(params) {
    let responce = await fetch(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=dd96d4abbe568a42507942802fc47719`
    );

    let data = await responce.json();
    settrendingMovies(data.results);
    console.log(data.results);
  }

  useEffect(() => {
    Movies();
  }, []);

  return (
    <>
      {trendingMovies !== null ? (
        <div className="container mt-5">
          <div className="row g-5">
            {trendingMovies.map((movie,curr) => (
              <MovieCard key={movie.id} movie={movie} index={ curr} />
            ))}
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}
