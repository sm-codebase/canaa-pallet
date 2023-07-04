import Head from "next/head";
import Image from "next/image";
import Hero from "../components/Hero";
import Instagram from "../components/Instagram";
import FaleAgora from "../components/FaleAgora";
import SimpleMap from "../components/SimpleMap";
import Empresa from "../components/Empresa";
import Embalagens from "../components/Embalagens";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Canaã Pallets</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Empresa />
      <Embalagens />
      <SimpleMap />
    </div>
  );
}