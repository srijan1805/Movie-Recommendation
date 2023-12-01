import React from "react";
import Recommendations from "./Recommendations";

function Page() {
  return (
    <div className="p-8 min-h-screen">
      <div className="mb-4 text-lg">Recommendations</div>

      <Recommendations />
    </div>
  );
}

export default Page;