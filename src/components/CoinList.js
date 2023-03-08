import React from "react";
import styles from "../styles/CoinList.module.css";
import Charts from "../components/Charts";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";

function CoinList() {
  const location = useLocation();
  const { data } = location.state;

  const {
    symbol,
    image,
    name,
    id,
    market_cap_rank,
    current_price,
    price_change_percentage_24h,
    market_cap,
    total_volume,
    fully_diluted_valuation,
    circulating_supply,
    total_supply,
    max_supply,
  } = data;

  return (
    <div className={styles.coinList}>
      <div className={styles.container}>
        <Link to="/">
          <FontAwesomeIcon icon={faArrowCircleLeft} size="2x" />
        </Link>
        <p className={styles.rank}>Rank #{market_cap_rank}</p>
        <div className={styles.data}>
          <img src={image} alt="crypto" />
          <h1>{name}</h1>
          <p>({symbol})</p>
        </div>
        <div className={styles.price}>
          <h1>${current_price}</h1>
          {price_change_percentage_24h < 0 ? (
            <p className={styles.red}>
              {price_change_percentage_24h?.toFixed(2)}%
            </p>
          ) : (
            <p className={styles.green}>
              {price_change_percentage_24h?.toFixed(2)}%
            </p>
          )}
        </div>
        <div className={styles.dataTable}>
          <div>
            <p>
              <span>Market Cap</span> ${market_cap?.toLocaleString()}
            </p>
            <p>
              <span>24 Hour Trading Vol</span>$
              {total_volume === null ? " —" : total_volume?.toLocaleString()}
            </p>
            <p>
              <span>Fully Diluted Valuation</span> $
              {fully_diluted_valuation === null
                ? " —"
                : fully_diluted_valuation?.toLocaleString()}
            </p>
          </div>
          <div>
            <p>
              <span>Circulating Supply</span>
              {circulating_supply === null
                ? " —"
                : circulating_supply?.toLocaleString()}
            </p>
            <p>
              <span>Total Supply</span>
              {total_supply === null ? " —" : total_supply?.toLocaleString()}
            </p>
            <p>
              <span>Max Supply</span>
              {max_supply === null ? " —" : max_supply?.toLocaleString()}
            </p>
          </div>
        </div>
        <div className={styles.chart}>
          <p>
            {name} ({symbol}) Price Chart
          </p>
          <Charts id={id} />
        </div>
      </div>
    </div>
  );
}

export default CoinList;
