import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Loading from "../../components/Loading/Loading";

export default function Actor() {
  const { id } = useParams();
  const [dataActor, setdataActor] = useState(null);
  async function actordet(id) {
    let response = await fetch(
      `https://api.themoviedb.org/3/person/${id}?api_key=dd96d4abbe568a42507942802fc47719`
    );
    let data = await response.json();
    setdataActor(data);
    console.log(data);
  }

  useEffect(() => {
    actordet(id);
  }, []);

  return (
    <>
      {dataActor !== null ? (
        <div className="container py-4">
          {/* Top Section */}
          <div className="row g-4">
            {/* Profile Image */}
            <div className="col-md-4">
              <img
                src={`https://image.tmdb.org/t/p/w500/${dataActor?.profile_path}`}
                alt={dataActor?.name || "Unknown"}
                className="img-fluid rounded shadow"
                style={{ objectFit: "cover" }}
              />

              <div className="mt-3">
                <span className="badge bg-primary me-2">
                  <i className="bi bi-star-fill text-dark me-1"></i>
                  Popularity: {dataActor?.popularity}
                </span>

                <span className="badge bg-secondary">
                  <i className="bi bi-gender-female me-1"></i>
                  {dataActor?.gender === 1 ? "Female" : "Male"}
                </span>
              </div>
            </div>

            {/* Actor Info */}
            <div className="col-md-8">
              <h2 className="ff text-center p-2 rounded">{dataActor?.name}</h2>

              <p className="text-white mb-2">
                <i className="bi bi-person-workspace me-2"></i>
                {dataActor?.known_for_department}
              </p>

              <div className="mb-3">
                <p className="mb-1">
                  <i className="bi bi-calendar-event me-2"></i>
                  Born: {dataActor?.birthday || "N/A"}
                </p>

                <p className="mb-1">
                  <i className="bi bi-geo-alt me-2"></i>
                  {dataActor?.place_of_birth || "N/A"}
                </p>

                <p className="mb-1">
                  <i className="bi bi-film me-2"></i>
                  IMDb ID: nm5611121
                </p>
              </div>

              <hr />

              {/* Biography */}
              <h4 className="fw-bold mb-3">Biography</h4>

              <p
                className="text-dark  bg-white rounded p-3 fw-bold"
                style={{ whiteSpace: "pre-line" }}
              >
                {dataActor?.biography || "Biography not available."}
              </p>

              <hr />

              {/* Additional Info */}
              <h4 className="fw-bold mb-3">Additional Information</h4>
              <p className="mb-1">
                <strong>Also Known As:</strong>{" "}
                {dataActor?.also_known_as.length > 0
                  ? dataActor.also_known_as.join(", ")
                  : "N/A"}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}
