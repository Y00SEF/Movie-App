import React, { useEffect, useState } from "react";
import Loading from "../../components/Loading/Loading";
import PeopleInfo from "../../components/PeopleInfo/PeopleInfo";

export default function People() {
  const [person, setperson] = useState(null);

  async function getperson() {
    let response = await fetch(
      `https://api.themoviedb.org/3/person/popular?api_key=dd96d4abbe568a42507942802fc47719`
    );
    let data = await response.json();
    setperson(data.results);
  }

  useEffect(() => {
    getperson();
  }, []);

  return (
    <>
      {person !== null ? (
        <div className="container py-4">
          <div className="row g-4">
            {person.map((pe) => (
              <PeopleInfo key={pe.id} pe={pe} />
            ))}
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}
