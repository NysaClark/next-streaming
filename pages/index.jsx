import Movies from "@/components/movies/Movies";
import Shows from "@/components/shows/Shows";
import { useState } from "react";
import '@coreui/coreui/dist/css/coreui.min.css'

export default function Home() {
const [showMovies, setShowMovies] = useState(true);

  return (
    <>
      <nav>
      <button onClick={() => setShowMovies(true)}>Movies</button>
      <button onClick={() => setShowMovies(false)}>Shows</button>
      </nav>
      <div>{showMovies ? <Movies /> : <Shows />}</div>
    </>
  )
}
