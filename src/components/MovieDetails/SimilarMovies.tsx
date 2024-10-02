import { useEffect, useState } from "react"
import { baseApi } from "../../api/axiosInstance"
import { MovieCardType } from "../../utils/constant"
import MovieList from "../Home/MovieList"
import LoadMoreBtn from "../Button/LoadMoreBtn"
const SimilarMovies = ({ movieId }: { movieId: string }) => {
    const [movies, setMovie] = useState<MovieCardType[]>([])
    const [page, setPage] = useState(0)
    const fetchSimilarMovies = async (page:number) => {
        try {
            const response = await baseApi.get(`/3/movie/${movieId}/similar?language=en-US&page=${page}`)
            setMovie(prev=>[...prev,...response.data.results])
            console.log(response.data.results)
        } catch (error) {
            console.log("fetch similar movies error", error)
        }
    }
    const handleLoadMore = () => {
        fetchSimilarMovies(page+1)
        setPage(prev=>prev+1)
    }
    useEffect(() => {
        fetchSimilarMovies(1)
        setPage(prev=>prev+1)
    }, [movieId])
    return (
        <div>
            <MovieList movies={movies} title="Similar Movies" />
            <div className="" onClick={handleLoadMore}>
                <LoadMoreBtn />
            </div>
        </div>
    )
}

export default SimilarMovies