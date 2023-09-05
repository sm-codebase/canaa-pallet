import Head from "next/head";
import Hero from "../components/Hero";
import SimpleMap from "../components/SimpleMap";
import Empresa from "../components/Empresa";
import Missao from "../components/Missao";
import Valores from "../components/Valores";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Canaã Pallets</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Empresa />
      <Missao />
      <Valores />
      <SimpleMap />
    </div>
  );
}