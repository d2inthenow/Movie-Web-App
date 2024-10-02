import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { baseApi } from "../../api/axiosInstance"
import { imagePath, MovieDetailsType } from "../../utils/constant"
import Trailer from "../../components/MovieDetails/Trailer"
import SimilarMovies from "../../components/MovieDetails/SimilarMovies"
const Details = () => {
  const params = useParams()
  console.log(params)

  const [details, setDetails] = useState<MovieDetailsType>()

  const fetchDetails = async () => {
    try {
      const response = await baseApi.get(`/3/movie/${params.id}?language=en-US`)
      console.log(response)
      setDetails(response.data)
    } catch (error) {
      console.log("Fech Details Error", error)
    }
  }
  useEffect(() => {
    fetchDetails()
  }, [params])
  return (
    < div >
      {details && params.id &&
        <div className="relative h-fit w-full">
          <div className="relative">
            <img src={imagePath + details?.backdrop_path} 
            className="opacity-40 w-full aspect-[7/4] object-center" 
            alt="background" />
            <div className="absolute bottom-0 w-full h-full _carouselGradient"></div>
          </div>
          <div className="absolute top-0 w-full pb-[100px]">
            <div className="w-[90%] max-auto mt-[500px]">

              <div className="flex gap-8">
                <img src={imagePath + details?.poster_path}
                  className="w-[350px] h-fit"
                  alt="" />
                <div className="">
                  <h1 className="text-5xl">{details?.original_title}
                    <span className="mx-3 text-4xl">({details?.release_date?.substring(0, 4)})</span>
                  </h1>
                  <div className="text-xl text-slate-300 mt-2">
                    <h2 >{details?.tagline}</h2>
                    <h2 className="mt-4">{details?.overview}</h2>
                    <h2 className="flex flex-col gap-3 mt-4 text-zinc-300">
                      Genres: {details?.genres?.map(genre => genre.name).join(", ")}
                    </h2>
                    <h2>Rating: {String(details?.vote_average).substring(0, 3)}</h2>
                    <h2>Original Language: {details?.original_language}</h2>
                    <h2>Release Date: {details?.release_date}</h2>
                  </div>
                </div>
              </div>
              <Trailer movieId={params?.id}/>
              <SimilarMovies movieId={params?.id} />
            </div>   
          </div>
        </div>
      }
    </div>
  )
}

export default Details