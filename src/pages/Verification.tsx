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

                               
                            <Text mb={'1em'}> Founder 1 ( Sol :0) button <span style={{color:'red'}}>:unverified</span></Text>
                     

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