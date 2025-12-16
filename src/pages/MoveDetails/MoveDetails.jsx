import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Loading from "../../components/Loading/Loading";

// https://api.themoviedb.org/3/movie/{movie_id}
// https://api.themoviedb.org/3/person/popular?api_key=dd96d4abbe568a42507942802fc47719

export default function MoveDetails() {
  const { id } = useParams();
  const [dataMovie, setdataMovie] = useState(null);

  async function getmovie() {
    let response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=dd96d4abbe568a42507942802fc47719`
    );
    let data = await response.json();
    console.log(data);
    setdataMovie(data);
  }
  useEffect(() => {
    getmovie();
  }, []);

  return (
    <>
      {dataMovie !== null ? (
        <div className="container py-4">
          {/* Backdrop */}
          <div
            className="rounded mb-4"
            style={{
              backgroundImage: `url('https://image.tmdb.org/t/p/original/${dataMovie.backdrop_path}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "300px",
              position: "relative",
            }}
          >
            <div
              className="position-absolute top-0 start-0 w-100 h-100"
              style={{ background: "rgba(0,0,0,0.5)" }}
            ></div>

            <h2 className="position-absolute bottom-0 text-white p-3 fw-bold">
              {dataMovie.title}
            </h2>
          </div>

          <div className="row g-4">
            {/* Poster */}
            <div className="col-md-4">
              <img
                src={`https://image.tmdb.org/t/p/w500/${dataMovie.poster_path}`}
                alt="Movie Poster"
                className="img-fluid rounded shadow"
              />

              <div className="mt-3">
                <span className="badge bg-dark me-2">
                  <i className="bi bi-star-fill text-warning me-1"></i>
                  7.3
                </span>

                <span className="badge bg-secondary">{dataMovie.status}</span>
              </div>
            </div>

            {/* Details */}
            <div className="col-md-8">
              {/* Tagline */}
              <p className="fs-5 fst-italic text-white">
                "{dataMovie.tagline}"
              </p>

              {/* Overview */}
              <h5 className="fw-bold">Overview</h5>
              <p className="text-white">{dataMovie.overview}</p>

              {/* Genres */}
              <div className="mb-3">
                <span className="badge bg-primary me-2">
                  {dataMovie.genres[0].name}
                </span>
                <span className="badge bg-primary me-2">
                  {dataMovie.genres[1]?.name}
                </span>
                <span className="badge bg-primary me-2">
                  {dataMovie.genres[2]?.name}
                </span>
              </div>

              {/* Info Grid */}
              <div className="row mt-3">
                <div className="col-6 mb-2">
                  <i className="bi bi-calendar-event me-2"></i>
                  <strong>Release Date:</strong> {dataMovie.release_date}
                </div>

                <div className="col-6 mb-2">
                  <i className="bi bi-clock me-2"></i>
                  <strong>Runtime:</strong> {dataMovie.runtime} min
                </div>

                <div className="col-6 mb-2">
                  <i className="bi bi-translate me-2"></i>
                  <strong>Language:</strong> {dataMovie.original_language}
                </div>

                <div className="col-6 mb-2">
                  <i className="bi bi-globe-americas me-2"></i>
                  <strong>Country:</strong>{" "}
                  {dataMovie.production_countries[0]?.name}
                </div>

                <div className="col-6 mb-2">
                  <i className="bi bi-cash-stack me-2"></i>
                  <strong>Budget:</strong> ${dataMovie.budget?.toLocaleString()}
                </div>

                <div className="col-6 mb-2">
                  <i className="bi bi-currency-dollar me-2"></i>
                  <strong>Revenue:</strong> $
                  {dataMovie.revenue?.toLocaleString()}
                </div>

                <div className="col-12 mb-2">
                  <i className="bi bi-collection-play me-2"></i>
                  <strong>Collection:</strong>{" "}
                  {dataMovie.belongs_to_collection?.name}
                </div>

                <div className="col-12 mb-2">
                  <i className="bi bi-building me-2"></i>
                  <strong>Production:</strong>{" "}
                  {dataMovie.production_companies[0]?.name}
                </div>
              </div>

              {/* Buttons */}
              <div className="mt-4 d-flex gap-3">
                <a
                  href={dataMovie.homepage}
                  target="_blank"
                  className="btn btn-primary"
                >
                  <i className="bi bi-link-45deg me-1"></i>
                  Official Website
                </a>

                <a
                  href={`https://www.imdb.com/title/${dataMovie.imdb_id}`}
                  target="_blank"
                  className="btn btn-warning text-dark"
                >
                  <i className="bi bi-film me-1"></i>
                  IMDb Page
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}
