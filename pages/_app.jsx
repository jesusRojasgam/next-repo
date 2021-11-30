import "../styles/main.scss";
import { Fade } from "react-awesome-reveal";
import { Nav, Footer } from "../components";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
      <Fade triggerOnce duration={2000} delay={500}>
        <Footer />
      </Fade>
    </>
  );
}

export default MyApp;
