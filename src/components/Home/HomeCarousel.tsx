import { useEffect, useState } from "react";
import { FaRegThumbsUp } from "react-icons/fa6";
import { imagePath } from "../../utils/constant";
import { baseApi } from "../../api/axiosInstance";
const HomeCarousel = () => {
  interface CarouselMovies {
    backdrop_path: string;
    poster_path: string;
    title: string;
    overview: string;
    vote_count: number;
  }
  const [carouselMovies, setCarouselMovies] = useState<CarouselMovies[]>([])
  const fetchUpcoming = async () => {
    try {
      const reponse = await baseApi.get("/3/movie/popular?language=en-US&page=1")
      console.log(reponse.data.results)
      setCarouselMovies(reponse.data.results)

    } catch (error) {
      console.log("fetch upcoming movies error ", error)
    }
  }
  useEffect(() => {
    fetchUpcoming()
  }, [])
  if (carouselMovies.length === 0) {
    return <div>Loading...</div>; // Hiển thị gì đó khi dữ liệu chưa được load
  }
  return (
    <div className="relative w-[900px]">
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          {
          carouselMovies.map((movie, ind) => (
            <div className={`carousel-item ${ind == 0 ? "active": "" } `}>
              <div className="relative ">
                {/* <div className="block  bg-red-300 aspect-[7/4]"></div> */}
                <img src={imagePath + movie?.backdrop_path} className="w-full aspect-[7/4]" alt="" />
                <div className="absolute bottom-0 h-44 w-full _carouselGradient"></div>
              </div>
              <div className="absolute bottom-0 flex items-end gap-4 px-4">
                {/* <div className="block bg-blue-400 w-[160px] aspect-[4/5]"></div> */}
                <img src={imagePath + movie?.poster_path} className="w-[160px] aspect-[4/5]" alt="" />
                <div className="flex flex-col gap-2">
                  <h1 className="text-4xl text-white">{movie?.title}</h1>
                  <h2 className="w-[600px] text-xl line-clamp-3 text-zinc-400 ">{movie?.overview}</h2>
                  <div className="flex items-center gap-1 text-zinc-400 text-xl">
                    <FaRegThumbsUp />
                    <h3 className="text-lg">{movie?.vote_count}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))
          }

        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

export default HomeCarousel