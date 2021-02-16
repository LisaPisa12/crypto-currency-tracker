import { useState } from "react";
import SearchBar from "../components/SearchBar";
import CoinList from "../components/CoinList";
import Layout from "../components/Layout";

export default function Home({ data }) {
  const [search, setSearch] = useState("");

  const coins = data.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleChange = (e) => {
    e.preventDefault();

    setSearch(e.target.value.toLowerCase());
  };

  return (
    <Layout>
      <div className="crypto_tracker_app">
        <SearchBar type="type" placeholder="Search" onChange={handleChange} />
        <CoinList data={coins} />
      </div>
    </Layout>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};
