import { createContext, useEffect, useState } from "react";



export const CoinContext = createContext();

const CoinContextProvider = (props)=>{

    const [coins, setCoins]= useState([])
    const [currency, setCurrency]=useState({
        name:'usd',
        symbol:'$'
    })
    const fetchCoins = async ()=>{
        try {
            const response = await(fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`));
            const data = await response.json();
            setCoins(data);
            
        } catch (error) {
            console.log("Unable to fetch the API ");
           
        }
      
    }
    

    useEffect(()=>{
        fetchCoins();
    },[currency])
    const contextValue ={
        coins, currency,setCurrency
    }
    
    return(
<CoinContext.Provider value={contextValue}>
        {props.children}
</CoinContext.Provider>
    )
}

export default CoinContextProvider;