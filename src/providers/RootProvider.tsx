"use client";
import React, { PropsWithChildren } from "react";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NextUIProvider } from "@nextui-org/react";

function RootProvider({ children }: PropsWithChildren) {
  return (
    <NextUIProvider>
      {children}
      <ProgressBar
        height="4px"
        color="#2563eb"
        options={{ showSpinner: false }}
        shallowRouting
      />
      <Footer />
      <ToastContainer />
    </NextUIProvider>
  );
}

export default RootProvider;
