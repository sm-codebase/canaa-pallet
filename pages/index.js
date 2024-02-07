import Head from "next/head";
import Carousel from "../components/Carousel";
import Box from "../components/Box";
import Certifications from "../components/Certifications";
import SimpleMap from "../components/SimpleMap";
import QuemSomos from "../components/QuemSomos";
import Missao from "../components/Missao";
import Valores from "../components/Valores";
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
      <QuemSomos />
      <Missao />
      <Valores />
      <SimpleMap />
      <Whatsapp />
    </div>
  );
}
