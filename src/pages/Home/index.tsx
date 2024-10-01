import { useEffect, useState } from "react"
import HomeSlider from "../../components/Home/HomeSlider"
import { baseApi } from "../../api/axiosInstance"
import { MovieCardType } from "../../utils/constant"
import MovieList from "../../components/Home/MovieList"
import LoadMoreBtn from "../../components/Button/LoadMoreBtn"
const Home = () => {

  const [movies, setMovies] = useState<MovieCardType[]>([])
  const [page, setPage] = useState<number>(1)


  const fetchMovies = async (page:number) => {
    try {
      const response = await baseApi.get(`/3/movie/top_rated?language=en-US&page=${page}`)
      // console.log(response.data.results)
      setMovies(response.data.results)
    } catch (error) {
      console.log("Fech Error in homepage top rated movies", error)
    }
  }
  useEffect(() => {
    fetchMovies(page)
  }, [page])
  // useEffect(()=>{
  //     console.log(movies)
  // },[movies])
  const handlePageUpdate = () => {
    setPage(prev => prev + 1)
  }
  return (
    <div className="w-[90%] mx-auto mb-44 ">
      <HomeSlider />
      <MovieList movies={movies} title="Top Rated Movies" />
      <div className="" onClick={() => handlePageUpdate()}>
        <LoadMoreBtn />
      </div>

    </div>
  )
}
export default Home