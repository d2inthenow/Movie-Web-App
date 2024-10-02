import { CarouselMovieType } from "../../utils/constant"
import CarouselMiniCard from './CarouselMiniCard'
interface HomeCarouselListProps {
    next: number[],
    carouselMovies: CarouselMovieType[]
}
function HomeCarouselList({ next, carouselMovies }: HomeCarouselListProps) {

    return (
        <div className="">
            <h1 className="font-bold text-xl text-yellow-500"> Up Next</h1>

            <div className="">
                <div className="">
                    {next.map((item, index) => (
                        <CarouselMiniCard carouselMovies={carouselMovies} item={item} index={item} />
                    ))
                    }
                </div>
            </div>

        </div>
    )
}

export default HomeCarouselList