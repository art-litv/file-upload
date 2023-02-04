import { type AppType } from "next/app";

import Head from "@app/document/head";
import AppProvider from "@app/providers";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Head />
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </>
  );
};

export default MyApp;
