import React, { useEffect, useState } from "react";

import { CCarousel, CCarouselItem, CImage  } from "@coreui/react";

const PopularList = () => {
  const [movies, setMovies] = useState([]);
  const fetchData = async () => {
    fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YzQ4YzAyZDdlNzAxNDE3YzVmN2QyYzY2OTQ1MjY5MCIsInN1YiI6IjY1NmU1MTQ4M2RjMzEzMDBhY2FiZDk1NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.P44TLiXVMTyw1Sp2Hi9OhE4dz0IxS0XB6_tY6dX8M0U",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        setMovies(data.results);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <CCarousel indicators interval="1000">
      {movies.length ? (
        movies.map((m, index) => {
          if (index < 5) {
            return (
              <CCarouselItem key={m.id}>
                <CImage 
                 style={{ width: "100vw", opacity: 0.6}}
                 
                  src={`https://image.tmdb.org/t/p/original${m.backdrop_path}`}
                />
              </CCarouselItem>
            );
          }
        })
      ) : (
        <p></p>
      )}
    </CCarousel>
  );
};

export default PopularList;
