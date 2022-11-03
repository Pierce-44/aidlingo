import Head from "next/head";
import Header from "./components/header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Aidlingo</title>
        <meta name="Aidlingo" content="Aidlingo" />
        <link rel="icon" href="/logo.svg.png" />
      </Head>
      <Header />
    </div>
  );
}
