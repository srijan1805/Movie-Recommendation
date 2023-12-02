import { getRandomMovieId } from "@/assets/data";
import axios from "axios";

export const dynamic = "force-dynamic"; // defaults to force-static
export async function GET(request: Request) {
  const movieId = getRandomMovieId();

  let movies = null;
  let error = null;

  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/movie/${movieId}/recommendations?language=en-US&page=1`,
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_API_ACCESS_TOKEN}`,
    },
  };

  try {
    const response = await axios.request(options);
    movies = response.data.results;
  } catch (e: any) {
    error = e.message ?? "Something went wrong!";
    console.error(e);
  }

  return Response.json({ movies, error });
}
