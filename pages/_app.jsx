import defaultLayout from "../components/defaultLayout";
import "../styles/globals.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import layout from "../components/Layout";
import Head from "next/head";
library.add(fas);

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || layout;

  return (
    <>
      {/* <Head>
        <title>Via Việt, Via New Zin, Acc Fb, Mua Fb, Mua Via, Facebook luôn bảo hành</title>
        <link rel="shortcut icon" type="image/png" href="/images/logo.png" />
      </Head> */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
