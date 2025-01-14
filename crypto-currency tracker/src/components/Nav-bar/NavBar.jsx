import React, { useContext, useState } from 'react';
import crypto from '../../assets/crypto.png';
import arrow from '../../assets/arrow.png';
import { CoinContext } from '../context/CoinContext';

function NavBar() {
    const {setCurrency}=useContext(CoinContext);
    const currencyHandler = (e)=>{
        switch(e.target.value){
            case "usd":{
            setCurrency({name:'usd', symbol:'$'})
            break;
        }
        case "eur":{
            setCurrency({name:'eur', symbol:'€'})
            break;
        }
        case "inr":{
            setCurrency({name:'inr', symbol:'₹'})
            break;
        }
        default:{
            setCurrency({name:'usd', symbol:'$'})
            break;
        }
    }
        
    }
    return (
        <div className='flex justify-between items-center text-[#ddd] border-b-2 border-solid-[#3c3c3c] py-5 px-[5%]'>
            <div className='flex items-center '><img src={crypto} alt="logo" className='invert w-[max(6vw,40px)] px-3 brightness-150 contrast-125' width='70px' />
            <h2 className='text-2xl font-bold'>Crypto-Tracker</h2></div>
            
            <ul className='flex gap-10 list-none cursor-pointer'>
                <li>Home</li>
                <li>Features</li>
                <li>Pricing</li>
                <li>Blog</li>
               
            </ul>
            <div className='flex items-center gap-[max(2vw,12px)]'><select  className='text-white py-[5px] px-2 border-2 border-solid border-white bg-transparent'  onChange={currencyHandler}>
                <option value="usd" className='bg-[#09005c] text-white'>USD</option>
            <option value="eur" className='bg-[#09005c] text-white'>EUR</option>
            <option value="inr" className='bg-[#09005c] text-white'>INR</option>
            </select>
            
            <button className='flex items-center  gap-2.5 py-3 bg-white border-none cursor-pointer rounded-[20px] text-[15px] font-[15px] px-6 text-[#393939]'>SignUp <img src={arrow} alt="" width='13px' /></button></div>
        </div>
    );
}

export default NavBar;