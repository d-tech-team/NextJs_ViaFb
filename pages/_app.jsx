import defaultLayout from "../components/defaultLayout";
import "../styles/globals.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import layout from "../components/Layout";
library.add(fas);

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || layout;

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
