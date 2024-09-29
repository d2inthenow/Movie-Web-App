
import { FaRegThumbsUp } from 'react-icons/fa'
import { CarouselMovieType, imagePath } from '../../utils/constant'

interface HomeCarouselProps {
    carouselMovies: CarouselMovieType[]
}
function HomeCarousel({carouselMovies} : HomeCarouselProps) {
    
  return (
    <div className="carousel-inner">
          {
          carouselMovies.map((movie, index) => (
            <div key={movie.id} className={`carousel-item ${index == 0 ? "active": "" } `}>
              <div className="relative ">
                {/* <div className="block  bg-red-300 aspect-[7/4]"></div> */}
                <img src={imagePath + movie?.backdrop_path} className="w-full aspect-[7/4]" alt="" />
                <div className="absolute w-full h-full top-0 left-0 bg-black opacity-[0.1] hover:opacity-[0.2]"></div>
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
  )
}

export default HomeCarousel