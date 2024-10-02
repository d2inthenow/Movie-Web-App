export const imagePath = "https://image.tmdb.org/t/p/w500";
export interface CarouselMovieType {
  id: number;
  backdrop_path: string;
  poster_path: string;
  title: string;
  overview: string;
  vote_count: number;
}

export interface MovieCardType {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
  original_language: string;
}

// export const Category=["Now Playing", "Popular","Top Rated","Upcoming"] ;
export interface CategoryType {
  name: string;
  path: string;
}
 export const Category : CategoryType[]=[
  {name:"Now Playing",path:"now_playing"},
  {name:"Popular",path:"popular"},
  {name:"Top Rated",path:"top_rated"},
  {name:"Upcoming",path:"upcoming"}
 ]

 export interface MovieDetailsType {
  id: number;
  poster_path: string;
  backdrop_path: string;
  original_title: string;
  release_date: string;
  tagline: string;
  overview: string;
  genres: { name: string }[];
  vote_average: number;
  original_language: string;

 }