import Layout from "@/common/layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "react-toastify/ReactToastify.min.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
