"use client";
import axios from "axios";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const STRING_LIMIT = 128;

type Movie = {
  title: string;
  poster_path: string;
  overview: string;
};

type CardProps = {
  movie?: Movie;
};

function Card({ movie }: CardProps) {
  return (
    <div className="card w-full card-side bg-base-100 shadow-xl flex">
      <figure className="w-[40%] max-w-[124px] lg:w-[35%]">
        <div className="h-full w-full  relative">
          <Image
            src={`http://image.tmdb.org/t/p/w185/${movie?.poster_path}`}
            alt="Shoes"
            fill
          />
        </div>
      </figure>
      <div className="card-body w-[60%]">
        <h2 className="card-title">{movie?.title}</h2>
        {/* <p className="h-10 overflow-y-scroll">
         
          {movie?.overview}
        </p> */}
        <div className="card-actions">
          <button className="btn btn-primary">Watch</button>
        </div>
      </div>
    </div>
  );
}

function Recommendations() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  const searchParams = useSearchParams();
  const movieId = searchParams.get("q");

  useEffect(() => {
    setLoading(true);

    async function fetchMovies() {
      if (!movieId) {
        setLoading(false);

        return;
      }

      const options = {
        method: "GET",
        url: `https://api.themoviedb.org/3/movie/${movieId}/recommendations?language=en-US&page=1`,
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_ACCESS_TOKEN}`,
        },
      };

      try {
        const response = await axios.request(options);
        setMovies(response.data.results);
      } catch (error: any) {
        toast.error(error.message ?? "Something went wrong!");
        setMovies([]);
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchMovies();
  }, [movieId]);

  return (
    <div className="space-y-4">
      {loading ? (
        <div className="flex items-center gap-2">
          Loading
          <span className="loading loading-dots loading-lg"></span>
        </div>
      ) : movies.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {movies.map((m, i) => (
            <Card key={i} movie={m} />
          ))}
        </div>
      ) : (
        <div>No Recommendations</div>
      )}
    </div>
  );
}

export default Recommendations;
