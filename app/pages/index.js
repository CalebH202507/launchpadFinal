import React, { useEffect } from "react";
import dynamic from 'next/dynamic';
import CandyMachine from "../components/CandyMachine";
import { useWallet } from "@solana/wallet-adapter-react";
import Head from "next/head";

const WalletMultiButtonDynamic = dynamic(
    async () => (await import('@solana/wallet-adapter-react-ui')).WalletMultiButton,
    { ssr: false }
);

// Constants
const TWITTER_HANDLE = "_buildspace";
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

const Home = () => {
    const wallet = useWallet();

    useEffect(() => {
        if (wallet.connected === true) {
            console.log('Phantom wallet found!')
        } else {
            console.log('Phantom wallet not found')
        }
        if (wallet.publicKey) {
            console.log(wallet.publicKey)
        }
    })

    const renderNotConnectedContainer = () => (
        <div>
            <div>
                <p className='text-white text-4xl font-light text-center'>Connect your Phantom Wallet!</p>
                <div className='mt-[5vh] flex'>
                    <div className='mx-auto'>
                    <WalletMultiButtonDynamic />

                    </div>
                </div>
            </div>
        </div>
    );

    return (

       <div className="App bg-gradient-to-r from-red-500 to-neutral-50 w-screen h-screen overflow-x-hidden overflow-y-hidden">
        <Head>
            <title>Googles NFT Mintsite</title>
            <link rel="icon" href="/Favicon.ico" />
        </Head>
            <div className="items-center">
                <div className="mx-auto">
                <p className="text-base mt-[2vh] text-white font-bold text-center">Press <span className='bg-[#da392b] pl-1 pr-1 rounded text-white'>Mint NFT</span> to mint your very own Google NFT!</p>
                <div className="bg-[#da392b] w-[350px] mt-[40px] h-[600px;] rounded-[65px] ml-[40vw] pt-[50px]">
                    <div className="text-center text-white text-2xl mb-[20px]">
                    <p>Googles NFT Mint</p>
                    <p>0.01 SOL</p>
                    </div>
                    <div className="mb-[50px] bg-white w-[275px] h-[275px] ml-[40px] pl-[12.5px] pt-[12.5px] rounded-[15px]">
                        <div className="w-[250px] h-[250px]">
                        <img src="https://media.giphy.com/media/Kuc89lPplceghoJ7VT/giphy.gif" alt="emoji" />
                        </div>
                    </div>
                    {/* Render your connect to wallet button right here */}
                    <div className='mt-[-4vh]'>
                    {wallet.publicKey ? <CandyMachine walletAddress={wallet} /> : renderNotConnectedContainer()}    
                    </div>        
                </div>  
            </div>
            
           
                
                </div>
                
        </div>
        
    );
};

export default Home;
