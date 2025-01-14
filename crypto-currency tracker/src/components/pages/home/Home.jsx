import React, { useContext, useEffect, useState } from 'react';
import { CoinContext } from '../../context/CoinContext';

function Home() {
    const {coins, currency}=useContext(CoinContext);
    const [displayCoin, setDisplayCoin]=useState([]);

    useEffect(()=>{
        setDisplayCoin(coins);
    },[coins])
    return (
        <div className='px-2.5 py-0 pb-[100px]'>
            <div className='max-w-[600px] my-20 mx-auto flex flex-col items-center text-center gap-[30px]'>
            <h1 className='text-[max(3vw,36px)]'>Largest <br/> Crypto-Currency Tracker</h1>
            <p className='w-[75%] text-[#e3e3e3] leading-relaxed'>Welcome to the world of CryptoCurrency. Sign up to know more about Crypto Currency</p>
            <form className='p-2 w-[80%] bg-white rounded-md text-[20px] flex content-between items-center gap-[10px]'>
                <input type="text" className='flex-1 text-[16px] outline-none border-none pl-2.5' placeholder='Search crypto..'/>
            <button className='border-none bg-[#7927ff] text-white text-[16px] px-[30px] py-2.5 rounded-md cursor-pointer' type='submit'>Search</button>
            </form>
            </div>
            <div className='max-w-[800px] m-auto bg-gradient-to-r from-[rgba(84,3,255,0.15)] to-[rgba(105,2,153,0.15)] rounded-[15px]'>
                <div className='grid grid-cols-[0.5fr_2fr_1fr_1fr_1.5fr] py-[15px] px-[20px] items-center border-b border-[#3c3c3c]' >
                    <p>#</p>
                    <p>Coins</p>
                    <p>Price</p>
                    <p className='text-center'>24hr Change</p>
                    <p className='text-right'>Market Cap</p>
                </div>
                {
                    displayCoin.slice(0,10).map((item,index)=>(
                        <div key={index}  className='grid grid-cols-[0.5fr_2fr_1fr_1fr_1.5fr] py-[15px] px-[20px] items-center border-b border-[#3c3c3c]' >
                            <p>
                        {item.market_cap_rank}
                            </p>
                            <div className='flex content-center items-center gap-4'>
                           
                               <img src={item.image} alt="" width='35px' />
                               <p>{item.name +" - "+item.symbol}
                            </p>
                            </div>
                            <p>{currency.symbol+ " " + item.current_price}</p>
                            </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Home;