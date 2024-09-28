import axios from "axios";

export const baseApi = axios.create({
  baseURL: "https://api.themoviedb.org",
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNmMzZGZmNTUzODA5NGVmMjBiYzI5YzY2ZGU0NDU4MiIsIm5iZiI6MTcyNzQ1Njg0OC4wMjE4NTksInN1YiI6IjY2ZjZkNjI3NTRkYTQyNDYxZjcwZDQ0NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RD2LKVR6plT7-PZDa83la3tfaPP20Z0VbMh9v-NgRQQ'
  }
});
 