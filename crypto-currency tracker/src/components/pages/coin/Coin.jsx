import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CoinContext } from '../../context/CoinContext';

const Coin = () => {
  const [coinData, setCoinData] = useState(null); 
  const { coinId } = useParams();
  const { currency } = useContext(CoinContext);

  const fetchCoinData = async () => {
    try {
      const res = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`);
      const data = await res.json();
      setCoinData(data);
    } catch (error) {
      console.error("Error fetching coin data:", error);
    }
  };

  useEffect(() => {
    fetchCoinData();
  }, [currency]);

  if (!coinData) {

    return (

      <div className='grid place-self-center min-h-[80vh]'>
        <div className='animate-rotate w-[65px] h-[65px] place-self-center border-[5px] border-solid border-[#bdbdbd] border-t-[#4500c6] rounded-full'></div>
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
    </div>
  );
};

export default Coin;
