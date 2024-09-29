import { useEffect, useState } from "react";
import { baseApi } from "../../api/axiosInstance";
import { CarouselMovieType } from "../../utils/constant";
import HomeCarousel from "./HomeCarousel";
import HomeCarouselList from "./HomeCarouselList";
const HomeSlider = () => {

  const [carouselMovies, setCarouselMovies] = useState<CarouselMovieType[]>([])
  const [selected, setSelected] = useState(0)
  const [next, setNext] = useState<number[]>([])
  useEffect(() => {
    if (carouselMovies.length) {
      const index1 = (selected + 1) % carouselMovies.length;
      const index2 = (selected + 2) % carouselMovies.length;
      const index3 = (selected + 3) % carouselMovies.length;
      setNext([index1, index2, index3])
    }
  }, [carouselMovies, selected])

  useEffect(() => {
    const myCarousel = document.getElementById('carouselExample')

    const handleSlide = (event: Event) => {
      const customevent = event as any
      setSelected(customevent.to)
    }
    if (myCarousel) {
      myCarousel.addEventListener('slide.bs.carousel', handleSlide)

      return () => {
        myCarousel.removeEventListener('slide.bs.carousel', handleSlide)
      }
    }
  }
  )
  const fetchUpcoming = async () => {
    try {
      const response = await baseApi.get(`/3/movie/upcoming?language=en-US&page=1`)
      setCarouselMovies(response.data.results)

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
    <div className="row">
      <div className="relative col-8">
        <div id="carouselExample" className="carousel slide">
          <HomeCarousel carouselMovies={carouselMovies} />
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
      <div className="col-4 ">
        <HomeCarouselList
          next={next}
          carouselMovies={carouselMovies} />
      </div>
    </div>
  )
}

export default HomeSlider