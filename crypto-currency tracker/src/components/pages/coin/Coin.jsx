

import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CoinContext } from '../../context/CoinContext';
import LineChart from '../../LineChart/LineChart';

const Coin = () => {
  const [coinData, setCoinData] = useState(null);
  const [historicalData, setHistoricalData] = useState(null);
  const { coinId } = useParams();
  const { currency } = useContext(CoinContext);

  const fetchCoinData = async () => {
    try {
      const res = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`);
      if (!res.ok) throw new Error('Failed to fetch coin data');
      const data = await res.json();
      setCoinData(data);
    } catch (error) {
      console.error('Error fetching coin data:', error);
    }
  };

  const fetchHistoricalData = async () => {
    try {
      const res = await fetch(
        ` https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10&interval=daily`
      );
      if (!res.ok) throw new Error('Failed to fetch historical data');
      const data = await res.json();
      setHistoricalData(data);
    } catch (error) {
      console.error('Error fetching historical coin data:', error);
    }
  };

  useEffect(() => {
    fetchCoinData();
    fetchHistoricalData();
  }, [currency]);

  if (!coinData || !historicalData) {
    return (
      <div className="grid place-items-center min-h-[80vh]">
        <div className="animate-spin w-[65px] h-[65px] border-[5px] border-solid border-[#bdbdbd] border-t-[#4500c6] rounded-full"></div>
      </div>
    );
  }

  return (
    <div className="p-4">
      <div>
        <img src={coinData.image.large} alt={`${coinData.name} logo`} className="w-16 h-16" />
        <p className="font-bold">
          {coinData.name} ({coinData.symbol.toUpperCase()})
        </p>
      </div>
      <div>
        <LineChart historicalData={historicalData} />
      </div>
    </div>
  );
};

export default Coin;


