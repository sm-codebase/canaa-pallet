import Head from "next/head";
import Carousel from "../components/Carousel";
import Box from "../components/Box";
import Certifications from "../components/Certifications";
import SimpleMap from "../components/SimpleMap";
import Valores from "../components/Valores";
import Contact from "../components/Contact";
import Whatsapp from "../components/Whatsapp";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Canaã Pallets</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Carousel />
      <Box />
      <Certifications />
      <Valores />
      <SimpleMap />
      <Contact />
      <Whatsapp />
    </div>
  );
}
