import React from "react";
import Navbar from "@/components/Navbar";

export const dynamic = "force-dynamic";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

export default Layout;
