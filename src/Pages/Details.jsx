import ReactPlayer from 'react-player'
import { useParams } from "react-router-dom"
import movies from '../movies'
import { useState } from 'react'
import { MuteIcon, UnmuteIcon } from '../Helper/iconhelper'
import MovieCard from '../Components/MovieCard'
import { Link } from 'react-router-dom'
import PopularMovies from './PopularMovies'
function Details() {
    let [volume, setVolume] = useState(true)
    let { slug } = useParams()
    let movie = movies.find((movie) => {
        return movie.slug == slug
    })
    let suggestions = movies.filter((data) => {
        return data.genre == movie.genre
    })
    function volumeHandler() {
        setVolume((prev) => !prev)
    }
    return (
        <>
            <div className="relative w-full h-[80vh] ">
                <ReactPlayer width="100vw" className="scale-[1.50]" muted={volume} playing="true" loop='true' height="70vh" url={movie.youtube_trailer} />
                <div className="absolute left-24 top-56 w-[400px]">
                    <div className='bg-orange-500 text-white px-4 py-1 rounded inline-block text-sm'>IMDB Ratings {movie.imdb_ratings}</div>
                    <h1 className="text-white text-5xl font-black mt-2">{movie.title}</h1>
                    <p className='text-white  mt-2'>{movie.description}</p>

                    <button className='px-5 py-2 mt-3 bg-white rounded-lg'>Add to watchlist</button>
                </div>


                <Link to='/' className="absolute px-4 py-2 text-white top-5 right-10 border border-neutral-200 rounded-md  ">Go back</Link>

                <button onClick={volumeHandler} className="absolute top-96 right-10 border border-white rounded-full h-10 w-10 flex items-center justify-center">
                    {volume ? <UnmuteIcon /> : <MuteIcon />}</button>
            </div>
            <div className='w-[80vw] mt-24 mx-auto'>
                <h1 className=" text-3xl text-white">More like these</h1>
                <div className="  mt-5 flex flex-wrap gap-5 ">
                    {
                        suggestions.map(movie => <MovieCard img={movie.img} slug={movie.slug} />)
                    }
                </div>
            </div>
        </>
    )
}

export default Details
