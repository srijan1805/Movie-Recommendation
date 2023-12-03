import { Movie } from "@/types/indes";
import Image from "next/image";
import * as DefaultPoster from "@/assets/images/movie.jpg";
import { Button, Card, CardBody, CardFooter } from "@nextui-org/react";

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
    <Card shadow="sm">
      <CardBody>
        <Image
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w185/${movie.poster_path}`
              : "/movie.jpg"
          }
          alt="Poster"
          height={500}
          width={300}
          className="rounded-lg"
        />
      </CardBody>

      <CardFooter className="">
        <Button className="w-full" color="danger" variant="flat">
          Watch
        </Button>
      </CardFooter>
    </Card>
  );
}

export default MovieCard;
