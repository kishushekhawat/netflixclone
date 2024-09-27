import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Details from "./Pages/Details"
import PopularMovies from './Pages/PopularMovies'
function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:slug" element={<Details />} />
        <Route path="/popularmovies" element={<PopularMovies />} />


      </Routes>
    </>
  )
}

export default App
