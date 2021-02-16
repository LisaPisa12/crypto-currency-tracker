import Coin from "./Coin";

export default function CointList({ data }) {
  console.log("data", data);
  return (
    <>
      {data.map((coin) => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            id={coin.id}
            price={coin.current_price}
            symbol={coin.symbol}
            volume={coin.total_volume}
            marketCap={coin.market_cap}
            priceChange={coin.price_change_percentage_24h}
            image={coin.image}
          />
        );
      })}
    </>
  );
}
