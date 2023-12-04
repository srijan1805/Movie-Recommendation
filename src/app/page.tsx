import { Button, Card } from "@nextui-org/react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-hero bg-center">
      <div className="bg-black/50 flex-1 w-full flex flex-col justify-center items-center">
        <Card
          className="p-6 border-none bg-background/60 dark:bg-default-100/70 text-center space-y-4"
          shadow="sm"
        >
          <h1 className="text-2xl lg:text-4xl font-semibold">
            Movie Recommendation
          </h1>

          <Button
            as={Link}
            href="/recommendations"
            color="danger"
            variant="shadow"
            size="lg"
          >
            Recommend me
          </Button>
        </Card>
      </div>
    </main>
  );
}
