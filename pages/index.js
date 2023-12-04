import Head from "next/head";
import Main from "../components/Main";
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
      <Main />
      <Empresa />
      <Missao />
      <Valores />
      <SimpleMap />
    </div>
  );
}