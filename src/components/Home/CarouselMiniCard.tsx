import { useState } from 'react'
import { FaRegThumbsUp } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { CarouselMovieType, imagePath } from '../../utils/constant'

interface CarouselMiniCardProps {
    carouselMovies: CarouselMovieType[],
    item: number,
    index: number
}
function CarouselMiniCard({carouselMovies,item,index}: CarouselMiniCardProps) {
    const [hover, setHover] = useState<number | null>(null);
    return (
        <Link key={index} to={`/details/${carouselMovies[item].id}`} style={{ textDecoration: 'none' }}>
            <div className="flex gap-2"
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(null)}>
                <img src={imagePath + carouselMovies[item]?.poster_path} className="w-[100px] " alt="" />
                <div className="flex flex-col justify-between py-2">
                    <div className="leading-5">
                        <h1 className={`${hover === index ? "underline" : ""}`} >{carouselMovies[item]?.title}</h1>
                        <h1 className="text-xl text-zinc-300 line-clamp-3 ">{carouselMovies[item]?.overview}</h1>
                    </div>
                    <div className="flex gap-1 text-center"><FaRegThumbsUp />
                        <h2>{carouselMovies[item]?.vote_count}</h2>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default CarouselMiniCard