import MovieCard from "../Components/MovieCard";
import movies from "../movies";

function PopularMovies() {
    return (
        <>
            <div className="w-[90vw] mx-auto mt-24 flex flex-wrap justify-between items-center ">
                {
                    movies.filter(movie => movie.imdb_ratings > 8.6).map(movie => <MovieCard key={movie.id} slug={movie.slug} img={movie.img} />)
                }
                <Link to='/' className="absolute px-4 py-2 text-white top-5 right-10 border border-neutral-200 rounded-md  ">Go back</Link>
            </div>


        </>
    )
}
export default PopularMovies;