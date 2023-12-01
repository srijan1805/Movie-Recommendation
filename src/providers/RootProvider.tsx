"use client";
import React, { PropsWithChildren } from "react";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";

function RootProvider({ children }: PropsWithChildren) {
  return (
    <>
      {children}
      <ProgressBar
        height="4px"
        color="#2563eb"
        options={{ showSpinner: false }}
        shallowRouting
      />
      <Footer />
      <ToastContainer />
    </>
  );
}

export default RootProvider;
