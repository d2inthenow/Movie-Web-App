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

            <div className="row">
                {next.map((item) => (
                    <CarouselMiniCard carouselMovies={carouselMovies} item={item} ind={item} />
                ))
                }

            </div>

        </div>
    )
}

export default HomeCarouselList