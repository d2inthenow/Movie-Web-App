import { Link } from 'react-router-dom';
import { useState, ChangeEvent, useEffect, KeyboardEvent } from 'react';
import { baseApi } from '../../api/axiosInstance';
import { CarouselMovieType } from '../../utils/constant';
import CarouselMiniCard from '../Home/CarouselMiniCard';
import { IoCloseCircleSharp } from "react-icons/io5";
const Navbar = () => {
    const [search, setSearch] = useState("")
    const [searchedList, setSearchedList] = useState<CarouselMovieType[]>([])
    const [show, setShow] = useState(false)
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value)
    }
    const fetchSearch = async () => {
        try {
            const response = await baseApi.get(`/3/search/movie?query=${search}&include_adult=false&language=en-US&page=1`)
            setSearchedList(response.data.results)
            console.log(response.data.results)
        } catch (error) {
            console.log("fetch search error", error)
        }
    }
    const toggleShow = (bool: boolean) => {
        setShow(bool)
    }
    const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            (event?.target as HTMLInputElement).blur()
        }
    }
    useEffect(() => {
        if (search.length > 0) {
            setShow(true)
        } else {
            setShow(false)
        }
        fetchSearch()
    }, [search])
    return (
        <nav className="bg-[grey] py-2">
            <div className="flex justify-between items-center w-[80%] mx-auto">
                <div className="flex space-x-16">
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <div className="flex flex-col text-yellow-500">
                            <h1 className="text-[18px] leading-4">ALLABOUT</h1>
                            <h1 className="text-[24px] leading-2 font-semibold">MOVIES</h1>
                        </div>
                    </Link>
                    <Link to="/movies">
                        <button className="text-[18px] text-yellow-500 hover:underline">EXPLORE</button>
                    </Link>
                </div>
                <div className="relative">
                    <input className="w-[500px] h-10 bg-black text-[#c2c2c2] text-lg outline-none px-4 placeholder:text-[#646464] rounded-xl "
                        placeholder="search"
                        onChange={handleChange}
                        onClick={() => toggleShow(true)}
                        onKeyDown={handleKeyPress}
                        type="text" />
                    {
                        show && search.length > 0 &&
                        <div className="absolute z-30 top-4 right-1 text-yellow-500 text-2xl hover:cursor-pointer"
                        onClick={()=>toggleShow(false)}
                        ><IoCloseCircleSharp /></div>
                    }
                    {
                        show &&
                        <div className="relative" onClick={() => toggleShow(false)}>
                            <div className="absolute left-0 w-full bg-zinc-800 rounded-xl">
                                <div className="py-3 pl-5">
                                    <div className="flex flex-col gap-2 h-fit max-h-[380px] overflow-y-auto ">
                                        {
                                            searchedList.length > 0 && searchedList.map((item, index) =>
                                                <CarouselMiniCard carouselMovies={searchedList} item={index} index={index} />
                                            )}
                                    </div>
                                </div>

                            </div>
                        </div>}
                </div>
            </div>

        </nav>
    )
}

export default Navbar;