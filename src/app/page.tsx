import { getRandomMovieId } from "@/assets/data";
import Link from "next/link";

export default function Home() {
  const movieId = getRandomMovieId();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center space-y-5 p-24">
      <h1 className="text-2xl font-semibold">Movie Recommendation</h1>
      <Link
        href={`/recommendations?q=${movieId}`}
        className="btn btn-primary uppercase"
      >
        Recommend me
      </Link>
    </main>
  );
}
