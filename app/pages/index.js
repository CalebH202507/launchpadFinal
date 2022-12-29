import React, { useEffect } from "react";
import dynamic from 'next/dynamic';
import CandyMachine from "../components/CandyMachine";
import { useWallet } from "@solana/wallet-adapter-react";


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
            <img src="https://media.giphy.com/media/eSwGh3YK54JKU/giphy.gif" alt="emoji" />
            <div className='flex'>
            <div className="mx-auto">
                <WalletMultiButtonDynamic/>
            </div>
            </div>
        </div>
    );

    return (
        <div className="App bg-[#141414] w-screen h-screen overflow-x-hidden overflow-y-hidden">
            <div className="flex  w-full h-full items-center">
                <div className="my-auto mx-auto">
                    <p className="text-center text-white text-2xl">🍭 Candy Drop</p>
                    <p className="text-xl text-white text-center">NFT drop machine with fair mint</p>
                    {/* Render your connect to wallet button right here */}
                    {wallet.publicKey ? <CandyMachine walletAddress={wallet} /> : renderNotConnectedContainer()}         
            </div>
            <div className="absolute bottom-0 w-full">
                    <p className='bg-black p-2 text-center text-white'><a href={TWITTER_LINK}>built on @_buildspace</a></p>

                </div>
                
                </div>
                
        </div>
    );
};

export default Home;
