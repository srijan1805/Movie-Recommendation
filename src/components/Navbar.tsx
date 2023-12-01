"use client";

import { getRandomMovieId } from "@/assets/data";
import { useRouter } from "next/navigation";
import React from "react";

function Navbar() {
  const router = useRouter();
  return (
    <header className="flex items-center justify-between px-6 py-4 shadow-lg">
      <h1 className="font-semibold">Movie Recommendation</h1>
      <button
        onClick={() => {
          const movieId = getRandomMovieId();
          router.push(`/recommendations?q=${movieId}`);
        }}
        className="btn btn-primary"
      >
        Recommend Again
      </button>
    </header>
  );
}

export default Navbar;
