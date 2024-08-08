import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Layout from "@/components/layout/layoutwrapper";
import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <ToastContainer />
      </RecoilRoot>
    </QueryClientProvider>
  );
}
