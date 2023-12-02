import React from "react";
import axios from "@/lib/axios";
import { Movie } from "@/types/indes";
import MovieCard from "./MovieCard";

async function Recommendations() {
  const res = await axios.get("/api/recommend");
  const movies: Movie[] | null = res.data.movies;
  const error: string | null = res.data.error;

  if (error) {
    return (
      <div role="alert" className="alert alert-error">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>{error}</span>
      </div>
    );
  }

  return (
    <>
      {movies && movies.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {movies.map((m) => (
            <MovieCard key={m.id} movie={m} />
          ))}
        </div>
      ) : (
        <div>No Recommendations</div>
      )}
    </>
  );
}

export default Recommendations;
