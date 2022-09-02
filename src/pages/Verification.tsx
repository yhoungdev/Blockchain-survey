//@ts-no-checks
import { Box, Flex, Button, Image, Textarea, Text, Input, FormControl, InputLeftAddon, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { Buttons } from "../Components/Buttons"
import { Inputs } from "../Components/Inputs"
import {BiUser} from 'react-icons/bi'
import {AiOutlineUsergroupAdd} from 'react-icons/ai'
import StepContainer from "../Layouts/StepContainer"
import { useState, useEffect } from "react"
import {FiMail} from 'react-icons/fi'
//@ts-ignor

export const Verification =() => {

    const [ data  , setData ] = useState('');
    const [ color , setColor ] = useState()

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
                                    <InputGroup>
                                        <Input placeholder={'Add a Co-founder'} my={'0.5em'} required/>
                                        <InputLeftElement children={<FiMail/>} py={'1.6em'} />
                                    </InputGroup>
                                    <Buttons bg={'#7f58e2'} _hover={{bg:'black'}} color={'#fff'} fontWeight={'bold'}>
                                        Add Co-Founder 
                                    </Buttons>
                                </form>
                            
                            </>
                        )
                    }
                   
                </Box>

            </StepContainer>
            
        </>
    )
}