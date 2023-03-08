import React from "react";
import Coin from "../components/Coin";
import Header from "../components/Header";
import Slider from "../components/Slider";
import Wallet from "../components/Wallet";
import CardBaner from "../components/CardBaner";

function Home() {
  return (
    <div>
      <Header />
      <Coin />
      <Wallet />
      <Slider />
      <CardBaner />
    </div>
  );
}

export default Home;
