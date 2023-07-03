import Head from "next/head";
import Image from "next/image";
import Hero from "../components/Hero";
import Instagram from "../components/Instagram";
import FaleAgora from "../components/FaleAgora";
import SimpleMap from "../components/SimpleMap";
import Empresa from "../components/Empresa";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Canaã Pallets</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Empresa />
      <FaleAgora heading='Compre agora' message='Fale com nosso time e receba e seu pedido em menos de 24hrs'/>
      <Instagram />
      <SimpleMap />
    </div>
  );
}