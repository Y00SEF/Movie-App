import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function PeopleInfo({ pe }) {
  const { id } = pe;
  const navigatore = useNavigate();

  async function actordet() {
    let response = await fetch(
      `https://api.themoviedb.org/3/person/${id}?api_key=dd96d4abbe568a42507942802fc47719`
    );
    let data = await response.json();
    navigatore(`/actor/${data.id}`);
  }

  return (
    <>
      <div key={pe.id} className="col-md-4" onClick={() => actordet()}>
        <div className="card shadow-sm border-0 h-100 p-3">
          {/* Header Section */}
          <div className="d-flex align-items-center gap-3 mb-3">
            <img
              src={`https://image.tmdb.org/t/p/w500${pe.profile_path}`}
              alt={pe.name}
              className="rounded shadow"
              style={{
                width: "120px",
                height: "160px",
                objectFit: "cover",
              }}
            />

            <div>
              <h5 className="fw-bold mb-1">{pe.name}</h5>

              <p className="text-muted mb-1">
                <i className="bi bi-person-workspace me-2"></i>
                {pe.known_for_department}
              </p>

              <span className="badge bg-primary me-2">
                <i className="bi bi-star-fill text-warning me-1"></i>
                Popularity: {pe.popularity}
              </span>

              <span className="badge bg-secondary">
                <i className="bi bi-gender-male me-1"></i>
                {pe.gender === 2 ? "Male" : "Female"}
              </span>
            </div>
          </div>

          <hr />

          {/* Known For Section */}
          <h6 className="fw-bold mb-2">Known For</h6>

          <div className="row g-3">
            {pe.known_for.slice(0, 1).map((movie) => (
              <div key={movie.id} className="col-12">
                <div className="card border-0 shadow-sm h-100">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    className="card-img-top"
                    alt={movie.title}
                  />

                  <div className="card-body">
                    <h6 className="fw-bold">{movie.title}</h6>

                    <p className="text-muted small mb-1">
                      <i className="bi bi-calendar-event me-1"></i>
                      {movie.release_date}
                    </p>

                    <p
                      className="card-text small"
                      style={{
                        maxHeight: "3.5rem",
                        overflow: "hidden",
                      }}
                    >
                      {movie.overview}
                    </p>

                    <span className="badge bg-dark">
                      <i className="bi bi-star-fill text-warning me-1"></i>
                      {movie.vote_average}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
