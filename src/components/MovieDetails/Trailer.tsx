import { useState, useEffect } from "react"
import { baseApi } from "../../api/axiosInstance"
import YouTube from "react-youtube"
const Trailer = ({ movieId }: { movieId: String }) => {
    const [trailer, setTrailers] = useState<{ key: string, name: string }[]>([])
    const fetchTrailer = async () => {
        try {
            const response = await baseApi.get(`/3/movie/${movieId}/videos?language=en-US`)
            console.log(response.data.results)
            const trailerObj = response.data.results.filter((data: { type: String }) => data.type == "Trailer")
            setTrailers(trailerObj)
        } catch (error) {
            console.log("fetch trailer error", error)
        }
    }
    useEffect(() => {
        fetchTrailer()
    }, [movieId])
    const otps = {
        height: "280",
        weight: "380",
    }
    return (
        <div className="">
            {
                trailer.length > 0 &&
                <div className="mt-16">
                    <h1 className="text-3xl text-yellow-300 font-semibold">Watch Trailer</h1>
                    <div className="flex flex-wrap gap-4">
                        {
                            trailer.map((link, index) =>
                                <div key={index} className="flex flex-col gap-4 mt-4">
                                    <YouTube videoId={link.key} otps={otps} />
                                    <h1 className="text-xl w-[380px]">{link.name}</h1>
                                </div>
                            )
                        }
                    </div>
                </div>
            }
        </div>
    )
}

export default Trailer