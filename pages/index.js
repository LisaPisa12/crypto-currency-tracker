import SearchBar from "../components/SearchBar";
import CoinList from "../components/CoinList";
import Layout from "../components/Layout";

export default function Home({ data }) {
  return (
    <Layout>
      <div className="crypto_tracker_app">
        <SearchBar type="type" placeholder="Search" />
        <CoinList data={data} />
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
