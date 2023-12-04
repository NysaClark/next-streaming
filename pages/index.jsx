import Movies from "@/components/movies/Movies";
import Shows from "@/components/shows/Shows";
import { useState } from "react";

export default function Home() {
const [showMovies, setShowMovies] = useState(true);

  return (
    <>
      <nav>
      <button onClick={() => setShowMovies(false)}>Shows</button>
      <button onClick={() => setShowMovies(true)}>Movies</button>
      </nav>
      <div>{showMovies ? <Movies /> : <Shows />}</div>
    </>
  )
}
