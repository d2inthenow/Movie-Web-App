import { Category, MovieCardType } from "../../utils/constant"
import { useState, useEffect } from "react"
import { baseApi } from "../../api/axiosInstance"
import MovieList from "../../components/Home/MovieList"
import LoadMoreBtn from "../../components/Button/LoadMoreBtn"
interface pageType {
  [key: string]: number
}

const Movies = () => {
  const [filter, setFilter] = useState(Category[0].name)
  const [nowplaying, setNowPlaying] = useState<MovieCardType[]>([])
  const [popular, setPopular] = useState<MovieCardType[]>([])
  const [toprated, setTopRated] = useState<MovieCardType[]>([])
  const [upcoming, setUpComing] = useState<MovieCardType[]>([])

  const [pages, setPages] = useState<pageType>({ "now_playing": 1, "popular": 1, "top_rated": 1, "upcoming": 1 })
  const toggleSelection = (item: string) => {
    setFilter(item)
  }

  const fetchmovie = async (path: string, page: number) => {
    try {
      console.log(path)
      const response = await baseApi.get(`/3/movie/${path}?language=en-US&page=${page}`)
      console.log(response.data.results)
      switch (path) {
        case "now_playing":
          setNowPlaying(
            prev=>[...prev,...response.data.results]
           )
          break;
        case "popular":
          setPopular(
            prev=>[...prev,...response.data.results]
          )
          break;
        case "top_rated":
          setTopRated(
            prev=>[...prev,...response.data.results]
          )
          break;
        case "upcoming":
          setUpComing(
            prev=>[...prev,...response.data.results]
          )
          break;
        default:
          break;
      }

    } catch (error) {
      console.log("Fech error in Movies page", error)
    }
  }

  const handleLoadMore = () => {
    const currentCategory = Category.find(item => item.name == filter)
    if (currentCategory) {
      setPages(prev => ({
        ...prev,
        [currentCategory.path]: prev[currentCategory.path] + 1
      }))
      fetchmovie(currentCategory.path, pages[currentCategory.path] + 1)
    }
  }
  useEffect(() => {
    const current = Category.filter(item => item.name == filter)
    console.log(current)
    fetchmovie(current[0].path, 1)
  }, [filter])

  return (
    <div className="w-[90%] mx-auto mt-4">
      <h1 className="text-3xl font-bold text-yellow-500">Explore Movies</h1>
      <div className="flex mt-2 ">
        {
          Category.map((item, index) => (
            <div key={index} className="">
              <button
                onClick={() => toggleSelection(item.name)}
                className="text-base font-semibold w-44 h-10 hover:bg-[#121212]">{item.name}</button>
              <div className={`h-0.5 mx-auto bg-blue-400 ${filter == item.name ? "w-full" : "w-0"} duration-200`}></div>
            </div>
          ))
        }
      </div>
      {
        filter == "Now Playing" &&
        <MovieList movies={nowplaying} />
      }
      {
        filter == "Popular" &&
        <MovieList movies={popular} />
      }
      {
        filter == "Top Rated" &&
        <MovieList movies={toprated} />
      }
      {
        filter == "Upcoming" &&
        <MovieList movies={upcoming} />
      }

      <div onClick={() => handleLoadMore()}>
        <LoadMoreBtn />
      </div>
    </div>
  )
}

export default Movies