import React from "react";
import Header from "@/components/Header";

export const dynamic = "force-dynamic";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className="px-4 py-8 md:px-8 min-h-screen max-w-7xl mx-auto">
        {children}
      </div>
    </>
  );
}

export default Layout;
