import React, { useState, useEffect } from "react";
import axios from "axios";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function Charts({ id, axis, color }) {
  const [chartData, setChartData] = useState({});

  const apiDays = 13;

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    responsive: true,
    // maintainAspectRatio: false,
    scales: {
      x: {
        display: axis,
      },
      y: {
        display: axis,
      },
    },
  };

  const fetchChartData = async () => {
    try {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${apiDays}&interval=daily`
      );

      const pricesData = response.data.prices.map((price) => price[1]);
      const days = response.data.prices.map((price, index) => index + 1 + "d");

      setChartData({
        labels: days,
        datasets: [
          {
            label: "",
            data: pricesData,
            backgroundColor: "#fff",
            borderColor: `${color < 0 ? "#f00606" : "#1F9B8B"}`,
            borderWidth: 2,
            pointRadius: 1,
          },
        ],
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchChartData();
  }, []);

  return (
    <div>
      <div>
        {Object.keys(chartData).length && (
          <Line data={chartData} options={options} />
        )}
      </div>
    </div>
  );
}

export default Charts;
