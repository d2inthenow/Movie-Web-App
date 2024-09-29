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

