import Head from "next/head";
import SearchBar from "../components/SearchBar";
import Coins from "../components/Coins";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hello MF</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SearchBar type="type" placeholder="Search" />
      <Coins />
    </div>
  );
}
