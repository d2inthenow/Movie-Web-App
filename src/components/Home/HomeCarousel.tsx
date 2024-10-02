
import { FaRegThumbsUp } from 'react-icons/fa'
import { CarouselMovieType, imagePath } from '../../utils/constant'
import { Link } from 'react-router-dom'

interface HomeCarouselProps {
  carouselMovies: CarouselMovieType[]
}
function HomeCarousel({ carouselMovies }: HomeCarouselProps) {

  return (
    <div className="carousel-inner">
      {
        carouselMovies.map((movie, index) => (
          <Link key={index} to={`/details/${movie.id}`} style={{ textDecoration: 'none' }}>
            <div className={`carousel-item ${index == 0 ? "active" : ""} `}>
              <div className="relative ">
                <img src={imagePath + movie?.backdrop_path} className="w-full aspect-[7/4]" alt="" />
                <div className="absolute w-full h-full top-0 left-0 bg-black opacity-[0.1] hover:opacity-[0.2]"></div>
                <div className="absolute bottom-0 h-44 w-full _carouselGradient"></div>
              </div>
              <div className="absolute bottom-0 flex items-end gap-4 px-4">
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
          </Link>
        ))
      }

    </div>
  )
}

export default HomeCarousel