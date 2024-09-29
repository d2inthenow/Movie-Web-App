import { imagePath } from "../../utils/constant"
import { MovieCardType } from "../../utils/constant"
import {  useState } from "react"
interface MovieCardProps {
    movieData: MovieCardType
}
const MovieCard = ({ movieData }:MovieCardProps) => {

    const[hover, setHover] = useState<number | null>(null)

    

    return (
        <div className="col"
        onMouseEnter={()=>setHover(movieData.id)}
        onMouseLeave={()=>setHover(null)}
        >

            <div className={`my-3 border-2 border-zinc-800 rounded-lg overflow-hidden ${movieData.id===hover?"scale-[102%]":""} duration-200  `}>
                <div className="relative overflow-hidden"></div>
                <img src={imagePath + movieData.poster_path} alt="" />
                <div className="absolute w-full h-28 -bottom-6 _carouselGradient">

                </div>
                <div className="bg-[#222] p-2">
                    <div className="bg-[#222] p-2 text-zinc-300">
                        <h1 className={`line-clamp-1 text-[25px] font-semibold ${movieData.id === hover? "underline":""} `}> {movieData.title}</h1>
                        <h1 className="text-[20px]">Rating: {String(movieData.vote_average).substring(0, 3)}</h1>
                        <h1 className="text-[20px]">Language: {movieData.original_language}</h1>
                        <h1 className="text-[20px]">Release: {movieData.release_date}</h1>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default MovieCard