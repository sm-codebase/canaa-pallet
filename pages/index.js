import Head from "next/head";
import Carousel from "../components/Carousel";
import Box from "../components/Box";
import Certifications from "../components/Certifications";
import SimpleMap from "../components/SimpleMap";
import QuemSomos from "../components/QuemSomos";
import Valores from "../components/Valores";
import Missao from "../components/Missao";

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
      <QuemSomos />
      <Missao />
     
      <SimpleMap />
      <Whatsapp />
    </div>
  );
}
