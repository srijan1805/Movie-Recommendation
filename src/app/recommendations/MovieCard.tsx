import { Movie } from "@/types/indes";
import Image from "next/image";
import * as DefaultPoster from "@/assets/images/movie.jpg";

const STRING_LIMIT = 128;

type CardProps = {
  movie: Movie;
};

function limitChar(
  string: string,
  limit: number | undefined = STRING_LIMIT
): string {
  return string.length > limit ? string.substring(0, limit) + "..." : string;
}

function MovieCard({ movie }: CardProps) {
  return (
    <div className="card w-full h-44 card-side bg-base-100 shadow-xl">
      <figure className="w-[40%] max-w-[124px] lg:w-[35%]">
        <div className="h-full w-full relative">
          {movie.poster_path ? (
            <Image
              src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}
              alt="Poster"
              fill
            />
          ) : (
            <Image src="/movie.jpg" alt="Poster" fill />
          )}
        </div>
      </figure>
      <div className="card-body w-[60%] p-4">
        <h2 className="card-title">{limitChar(movie.title, 50)}</h2>
        {/* <p className="h-10 overflow-y-scroll">
         
          {movie.overview}
        </p> */}
        <div className="card-actions">
          <button className="btn btn-primary">Watch</button>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
