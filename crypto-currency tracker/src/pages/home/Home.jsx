import React from 'react';

function Home() {
    return (
        <div className='px-2.5 py-0 pb-[100px]'>
            <div className='max-w-[600px] my-20 mx-auto flex flex-col items-center text-center gap-[30px]'>
            <h1 className='text-[max(3vw,36px)]'>Largest <br/> Crypto-Currency Tracker</h1>
            <p className='w-[75%] text-[#e3e3e3] leading-relaxed'>Welcome to the world of CryptoCurrency. Sign up to know more about Crypto Currency</p>
            <form className='p-2 w-[80%] bg-white '><input type="text" placeholder='Search crypto..'/>
            <button type='submit'>Search</button>
            </form>
            </div>
        </div>
    );
}

export default Home;