import { CarouselMovieType } from '../../utils/constant'
import CarouselMiniCardSkeleton from '../Skeleton/CarouselMiniCardSkeleton';
import CarouselMiniCard from './CarouselMiniCard';

interface HomecarouselListProps {
    next: number[]
    carouselMovies: CarouselMovieType[]
}

function HomecarouselList({ next, carouselMovies }: HomecarouselListProps) {

    return (
        <div>
            <h1 className='font-bold text-xl text-yellow-500'>Up Next</h1>
            <div className="row">
                {
                    carouselMovies.length > 0 ?
                        next.map((item) => (
                            <CarouselMiniCard carouselMovies={carouselMovies} item={item} ind={item} />
                        ))
                        :
                        [...Array(3)].map((_, index) =>
                            <CarouselMiniCardSkeleton key={index} />
                        )
                }
            </div>


        </div>
    )
}

export default HomecarouselList