import "../styles/globals.css";
import type { AppProps } from "next/app";
import { PageWrapper } from "../wrappers/PageWrapper";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-gradient-to-r from-red-02 to-blue-02">
      <PageWrapper>
        <Component {...pageProps} />
      </PageWrapper>
    </div>
  );
}

export default MyApp;
