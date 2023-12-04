import React, { Suspense } from "react";
import Recommendations from "./Recommendations";
import RecommendationSkeleton from "@/components/ui/skeletons/RecommendationSkeleton";

function Page() {
  return (
    <main>
      <div className="mb-4 text-lg">Recommendations</div>
      <Suspense fallback={<RecommendationSkeleton />}>
        <Recommendations />
      </Suspense>
    </main>
  );
}

export default Page;
