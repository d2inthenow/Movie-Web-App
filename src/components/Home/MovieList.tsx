import { MovieCardType } from "../../utils/constant"
import MovieCard from "./MovieCard"
import MovieCardSkeleton from "../Skeleton/MovieCardSkeleton"
interface MovieListProps {
    movies: MovieCardType[]
    title?: string
}
const MovieList = ({ movies, title }: MovieListProps) => {
    return (
        <div className="md:mt-14 sm:mt-8 mt-2 px-8">
            {
                <h1 className="md:text-3xl sm:text-2xl text-xl font-bold text-yellow-500">{title}</h1>
            }
            <div className="row row-cols-xl-6 row-cols-lg-5 row-cols-md-4 row-cols-sm-3 row-cols-2">
                {
                    movies.length > 0 ?
                        movies.length > 0 && movies.map((data) => (
                            <MovieCard key={data.id} movieData={data} />
                        ))
                        :
                        [...Array(12)].map(_ =>
                            <MovieCardSkeleton />
                        )
                }
            </div>
        </div>
    )
}

export default MovieList