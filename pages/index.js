import Head from "next/head";
import Carousel from "../components/Carousel";
import Certifications from "../components/Certifications";
import SimpleMap from "../components/SimpleMap";
import QuemSomos from "../components/QuemSomos";
import Missao from "../components/Missao";
import Valores from "../components/Valores";

 
export default function Home() {
  return (
    <div>
      <Head>
        <title>Canaã Pallets</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Carousel />
      <Certifications />
      <QuemSomos />
      <Missao />
      <Valores />
      <SimpleMap />
    
      
    </div>
  );
}
