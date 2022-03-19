import "../styles/globals.css";
import type { AppProps } from "next/app";
import { PageWrapper } from "../wrappers/PageWrapper";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <PageWrapper>
        <Component {...pageProps} />
      </PageWrapper>
    </ThemeProvider>
  );
}

export default MyApp;
