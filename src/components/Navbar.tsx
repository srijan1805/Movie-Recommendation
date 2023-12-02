import { getRandomMovieId } from "@/assets/data";
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <header className="flex items-center justify-between px-6 py-4 shadow-lg flex-wrap">
      <Link href="/" className="btn btn-ghost">
        Home
      </Link>

      <Link href="/recommendations" className="btn btn-primary">
        Recommend Again
      </Link>
    </header>
  );
}

export default Navbar;
