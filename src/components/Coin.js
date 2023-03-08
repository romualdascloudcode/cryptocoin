import React, { useState, useEffect } from "react";
import styles from "../styles/Coin.module.css";
import Loader from "../helpers/Loader";
import ReactPaginate from "react-paginate";
import Charts from "../components/Charts";
import { Link } from "react-router-dom";
import { getCoins } from "../api/index";
import Pagination from "../helpers/Pagination";

function Coin() {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState([]);
  const [searchTherm, setSearchTherm] = useState("");

  const axis = false;
  const { pagesVisited, itemsPerPage, pageCount, changePage } = Pagination({
    items,
  });

  useEffect(() => {
    getCoins()
      .then((data) => {
        setItems(data.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  function Search(items) {
    return items.filter((item) => {
      if (searchTherm === "") {
        return item;
      } else if (item.name.toLowerCase().includes(searchTherm.toLowerCase())) {
        return item;
      }
    });
  }

  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <h1>Buy crypto at true cost</h1>
        <form>
          <input
            className={styles.input}
            type="text"
            placeholder="Search..."
            onChange={(event) => {
              setSearchTherm(event.target.value);
            }}
          />
        </form>
      </div>
      <div className={styles.mobileContainer}>
        <div className={styles.tableTitles}>
          <p>Coin</p>
          <p>Price</p>
          <p>24h</p>
          <p>Mkt Cap</p>
          <p>Last 14 Days</p>
        </div>
        <div className="loader">{isLoading && <Loader />}</div>
        {Search(items)
          ?.map((item, index) => {
            return (
              <div className={styles.coinContainer} key={item.id}>
                <Link to={`/coin/${item?.id}`} state={{ data: item }}>
                  <div className={styles.row}>
                    <div className={styles.coinWrapper}>
                      <img src={item?.image} alt="crypto" />
                      <h1 key={item?.id}>{item?.name}</h1>
                      <p className={styles.symbol}>{item?.symbol}</p>
                    </div>

                    <p className={styles.price}>${item?.current_price}</p>
                    {item.price_change_percentage_24h < 0 ? (
                      <p className={`${styles.percent} ${styles.red}`}>
                        {item.price_change_percentage_24h?.toFixed(2)}%
                      </p>
                    ) : (
                      <p className={`${styles.percent} ${styles.green}`}>
                        {item.price_change_percentage_24h?.toFixed(2)}%
                      </p>
                    )}
                    <p className={styles.marketcap}>
                      {item.market_cap?.toLocaleString()}
                    </p>
                    <div className={styles.chart}>
                      <Charts
                        id={item?.id}
                        axis={axis}
                        color={item.price_change_percentage_24h}
                      />
                    </div>
                  </div>
                </Link>
              </div>
            );
          })
          .slice(pagesVisited, pagesVisited + itemsPerPage)}
        <ReactPaginate
          previousLabel={"< Prev"}
          nextLabel={"Next >"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={styles.paginationBttns}
          previousLinkClassName={styles.previousBttn}
          nextLinkClassName={styles.nextBttn}
          disabledClassName={styles.paginationDisabled}
          activeClassName={styles.paginationActive}
        />
      </div>
    </div>
  );
}

export default Coin;
