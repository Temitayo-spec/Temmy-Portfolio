import "../styles/globals.scss";
import { Layout } from "../components";
import Preloader from "../components/Preloader";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 7000);
  }, []);
  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </>
  );
}

export default MyApp;
