import { Hero, About, Footer } from "../components";
import Head from "next/head";
import { Fade } from "react-awesome-reveal";

export default function Home() {
  return (
    <div>
      <Head>
        <title></title>
        <meta
          name="description"
          content="Full Stack Developer - Jesus Rojas"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="home">
        <Fade triggerOnce duration={3000} delay={500}>
          <Hero />
        </Fade>
        <Fade triggerOnce duration={3000} delay={500}>
          <About />
        </Fade>
      </main>
    </div>
  );
}
