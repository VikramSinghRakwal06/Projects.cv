import React, { useState, useEffect } from 'react';
import Chart from 'react-google-charts';
import { useContext } from 'react';
import { CoinContext } from '../context/CoinContext';
const LineChart = ({ historicalData }) => {
  const [data, setData] = useState([["Date", "Prices"]]);
    const {currency}=useContext(CoinContext)
  useEffect(() => {
    const dataCopy = [["Date", "Prices"]];

    if (historicalData?.prices) {
      historicalData.prices.forEach((item) => {
        const date = new Date(item[0]).toLocaleDateString().slice(0, -5);
        dataCopy.push([date, item[1]]);
      });
    }

    setData(dataCopy);
  }, [historicalData]);

  return (
    <div className='pl-[370px] ' style={{ height: '350px', width: '75%' }}>
      <Chart
        chartType="LineChart"
        data={data}
        options={{
          title: 'Price Trend',
          hAxis: { title: 'Date' },
          vAxis: { title: `Price (${currency.name})` },
        }}
        width="100%"
        height="100%"
        legendToggle
      />
    </div>
  );
};

export default LineChart;
