import styles from "../../styles/Coin.module.css";

const Coin = ({
  name,
  price,
  symbol,
  marketCap,
  priceChange,
  image,
  volume,
}) => {
  return (
    <div className={styles.coin_container}>
      <div className={styles.coin_row}>
        <div className={styles.coin}>
          <img className={styles.coin_img} src={image} alt={name} />
          <h1 className={styles.coin_header}>{name}</h1>
          <p className={styles.coin_symbol}>{symbol}</p>
        </div>
        <div className={styles.coin_data}>
          <p className={styles.coin_price}>{price}</p>
          <p className={styles.coin_volume}>{volume.toLocaleString()}</p>
          {priceChange < 0 ? (
            <p className={(styles.coin_price_change, styles.red)}>
              {priceChange.toFixed(2)}%
            </p>
          ) : (
            <p className={(styles.coin_price_change, styles.green)}>
              {priceChange.toFixed(2)}%
            </p>
          )}
          <p className={styles.coin_marketCap}>{marketCap.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default Coin;
